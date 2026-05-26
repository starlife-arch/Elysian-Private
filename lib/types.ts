export type UserStatus = "pending_approval" | "approved_pending_payment" | "active" | "rejected" | "banned";
export type Role = "user" | "admin";
export interface UserDoc { uid: string; email: string; name?: string; age?: number; gender?: string; country?: string; city?: string; bio?: string; images?: string[]; role: Role; status: UserStatus; inviteCode?: string; inviteUsed?: boolean; paid: boolean; adminAccessOverride?: { enabled: boolean; expiresAt?: string | null; reason?: string }; banned: boolean; bannedReason?: string; createdAt: string; updatedAt: string; }
