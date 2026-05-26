"use client";
import { auth } from "@/lib/firebase-client";
import { useState } from "react";
export default function Invite(){const [m,s]=useState(''); return <form className='card' onSubmit={async e=>{e.preventDefault(); const code=(new FormData(e.currentTarget).get('code')); const t=await auth.currentUser?.getIdToken(); const r=await fetch('/api/invite/validate',{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${t}`},body:JSON.stringify({code})}); s((await r.json()).message);}}><h2>Invite Validation</h2><input name='code' required/><button>Validate</button><p>{m}</p></form>}
