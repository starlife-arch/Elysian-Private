export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server"; import { getUserDoc, requireAuth } from "@/lib/auth-server";
export async function GET(){ const a=await requireAuth(); const {data}=await getUserDoc(a.uid); return NextResponse.json(data||{}); }
