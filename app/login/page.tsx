"use client";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase-client";
import { useRouter } from "next/navigation";
export default function Login() { const r = useRouter();
  return <div className="card"><h2>Login</h2><form onSubmit={async e=>{e.preventDefault(); const f=new FormData(e.currentTarget); await signInWithEmailAndPassword(auth,String(f.get("email")),String(f.get("password"))); r.push("/dashboard");}}><input name="email" type="email" required/><input name="password" type="password" required/><button>Login</button></form><h3>Create Account</h3><form onSubmit={async e=>{e.preventDefault(); const f=new FormData(e.currentTarget); await createUserWithEmailAndPassword(auth,String(f.get("email")),String(f.get("password"))); r.push("/apply");}}><input name="email" type="email" required/><input name="password" type="password" required/><button>Create account</button></form></div>;
}
