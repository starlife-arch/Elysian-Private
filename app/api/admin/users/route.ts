import { NextResponse } from "next/server"; import { requireAuth,getUserDoc } from "@/lib/auth-server"; import { adminDb } from "@/lib/firebase-admin";
async function assertAdmin(uid:string){const {data}=await getUserDoc(uid); if(data?.role!=='admin') throw new Error('forbidden');}
export async function GET(){const a=await requireAuth(); await assertAdmin(a.uid); const q=await adminDb.collection('users').limit(200).get(); return NextResponse.json({users:q.docs.map(d=>d.data())});}
export async function PATCH(req:Request){const a=await requireAuth(); await assertAdmin(a.uid); const b=await req.json(); const ref=adminDb.collection('users').doc(b.uid); if(b.type==='grant'){const exp=new Date(Date.now()+Number(b.days||30)*86400000).toISOString(); await ref.set({adminAccessOverride:{enabled:true,expiresAt:exp},updatedAt:new Date().toISOString()},{merge:true});}
if(b.type==='revoke') await ref.set({adminAccessOverride:{enabled:false,expiresAt:null},updatedAt:new Date().toISOString()},{merge:true});
if(b.type==='ban') await ref.set({banned:true,status:'banned',updatedAt:new Date().toISOString()},{merge:true});
if(b.type==='unban') await ref.set({banned:false,status:'approved_pending_payment',updatedAt:new Date().toISOString()},{merge:true});
return NextResponse.json({ok:true});}
