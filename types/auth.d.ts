// /types/next-auth.d.ts

import NextAuth, { DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      /** The `id` you return from authorize() */
      id: string;
      /** The `role` you return from authorize() */
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    /** Propagated from your authorize return */
    id: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
  }
}
