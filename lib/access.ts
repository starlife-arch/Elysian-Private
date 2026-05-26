import { UserDoc } from "./types";
export const hasMemberAccess = (u: UserDoc) => {
  if (u.banned || u.status === "banned") return false;
  if (u.status === "active") return true;
  if (u.adminAccessOverride?.enabled) {
    const exp = u.adminAccessOverride.expiresAt ? new Date(u.adminAccessOverride.expiresAt).getTime() : null;
    return exp ? exp > Date.now() : true;
  }
  return false;
};
