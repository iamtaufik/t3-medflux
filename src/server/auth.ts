import { type User } from "@prisma/client";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/server/db";
import bcrypt from "bcrypt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
    error: "/",
  },
  providers: [
    CredentialsProvider({
      id: "custom-provider",
      name: "Custom Provider",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ): Promise<any> {
        if (!credentials) throw new Error("Credentials not provided");
        const user = await db.user.findFirst({
          where: { email: credentials.email },
        });
        if (!user) throw new Error("user not found");
        if (!user.password) throw new Error("email or password is incorrect");
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isMatch) throw new Error("email or password is incorrect");
        return user;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      console.log(user);
      const userDetail = await db.user.findUnique({
        where: {
          email: session.user.email,
        },
      });
      if (!userDetail) {
        throw new Error("user not found");
      }
      session.user = {
        ...userDetail,
      };
      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
