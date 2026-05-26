export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server"; import { getAdminDb } from "@/lib/firebase-admin";
export async function GET(req:Request){ const u=new URL(req.url); const uid=u.searchParams.get('uid'); if(uid) await getAdminDb().collection('users').doc(uid).set({paid:true,status:'active',updatedAt:new Date().toISOString()},{merge:true}); return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/members`); }
