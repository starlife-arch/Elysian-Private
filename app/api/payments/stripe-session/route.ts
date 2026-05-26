export const dynamic = 'force-dynamic';
import Stripe from "stripe"; import { NextResponse } from "next/server"; import { requireAuth } from "@/lib/auth-server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
export async function POST(){ const a=await requireAuth(); const session=await stripe.checkout.sessions.create({mode:'payment',line_items:[{price_data:{currency:'usd',product_data:{name:'Elysian Private Membership'},unit_amount:19900},quantity:1}],success_url:`${process.env.NEXT_PUBLIC_APP_URL}/members`,cancel_url:`${process.env.NEXT_PUBLIC_APP_URL}/payment`,metadata:{uid:a.uid}}); return NextResponse.json({url:session.url}); }
