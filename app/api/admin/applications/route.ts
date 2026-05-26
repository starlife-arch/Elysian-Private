export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server"; import { requireAuth,getUserDoc } from "@/lib/auth-server"; import { adminDb } from "@/lib/firebase-admin";
export async function GET(){const a=await requireAuth(); const {data}=await getUserDoc(a.uid); if(data?.role!=='admin') return NextResponse.json({message:'forbidden'},{status:403}); const q=await adminDb.collection('applications').where('status','==','pending_approval').get(); return NextResponse.json({applications:q.docs.map(d=>d.data())});}
