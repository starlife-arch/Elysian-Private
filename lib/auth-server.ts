import { headers } from "next/headers";
import { adminDb } from "./firebase-admin";
import admin from "firebase-admin";
export async function requireAuth() { const h = headers(); const token = h.get("authorization")?.replace("Bearer ", ""); if (!token) throw new Error("Unauthorized"); const decoded = await admin.auth().verifyIdToken(token); return decoded; }
export async function getUserDoc(uid:string){ const ref = adminDb.collection("users").doc(uid); const snap = await ref.get(); return { ref, data: snap.data() as any }; }
