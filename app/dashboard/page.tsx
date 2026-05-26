"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase-client";
export default function Dashboard(){const [u,setU]=useState<any>(); useEffect(()=>{(async()=>{const t=await auth.currentUser?.getIdToken(); const r=await fetch('/api/me',{headers:{Authorization:`Bearer ${t}`}}); setU(await r.json());})();},[]);
if(!u) return <p>Loading</p>; return <div className='card'><h2>Dashboard</h2><p>Status: {u.status}</p><p>Role: {u.role}</p>{u.role==='admin'&&<Link href='/admin'>Admin Dashboard</Link>}<br/><Link href='/invite'>Enter Invite Code</Link><br/><Link href='/payment'>Payment</Link><br/><Link href='/members'>Members Area</Link></div>;}
