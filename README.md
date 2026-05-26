# Elysian Private

Production-ready Next.js App Router project for an invite-only private dating platform.

## Core capabilities
- Firebase Auth with user/admin roles.
- Firestore-backed applications, invites, users.
- Strict invite validation and one-time code usage.
- Payments via Stripe + Pesapal callback flow.
- Admin controls to approve/reject, ban/unban, and grant/revoke timed membership access override without payment.

## Environment
Copy `.env.example` to `.env.local` and fill all values.

## Run
```bash
npm install
npm run dev
```

## Admin override behavior
Admins can grant temporary access by setting `adminAccessOverride.enabled=true` and expiration. This bypasses unpaid status while active.
