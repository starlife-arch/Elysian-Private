"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase-client";
export default function Members(){const [d,setD]=useState<any>(); useEffect(()=>{(async()=>{const t=await auth.currentUser?.getIdToken(); const r=await fetch('/api/members',{headers:{Authorization:`Bearer ${t}`}}); setD(await r.json());})();},[]); return <div className='card'><h2>Members Area</h2><pre>{JSON.stringify(d,null,2)}</pre></div>}
