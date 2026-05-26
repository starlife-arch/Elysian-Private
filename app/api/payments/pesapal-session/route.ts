import { NextResponse } from "next/server"; import { requireAuth } from "@/lib/auth-server";
export async function POST(){ const a=await requireAuth(); return NextResponse.json({url:`${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/pesapal?uid=${a.uid}`}); }
