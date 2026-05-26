import { headers } from "next/headers";
import { getAdminApp, getAdminDb } from "./firebase-admin";
export async function requireAuth() { const h = headers(); const token = h.get("authorization")?.replace("Bearer ", ""); if (!token) throw new Error("Unauthorized"); const decoded = await getAdminApp().auth().verifyIdToken(token); return decoded; }
export async function getUserDoc(uid:string){ const ref = getAdminDb().collection("users").doc(uid); const snap = await ref.get(); return { ref, data: snap.data() as any }; }
