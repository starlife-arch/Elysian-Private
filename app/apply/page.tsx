"use client";
import { FormEvent, useState } from "react";
import { auth } from "@/lib/firebase-client";
export default function ApplyPage() {
  const [msg, setMsg] = useState("");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    const t = await auth.currentUser?.getIdToken();
    const res = await fetch("/api/applications", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${t}` }, body: JSON.stringify(payload) });
    setMsg((await res.json()).message || "Submitted");
  }
  return <form className="card" onSubmit={onSubmit}><h2>Application</h2><input name="name" placeholder="Full name" required/><input name="age" type="number" min={18} required/><input name="gender" required/><input name="country" required/><input name="city" required/><input name="email" type="email" required/><textarea name="bio" required/><input name="images" placeholder="Cloudinary URL list, comma-separated" required/><button>Submit</button><p>{msg}</p></form>;
}
