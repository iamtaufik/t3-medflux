import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import bcrypt from "bcrypt";

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        name: z.string().min(5),
        email: z.string().email(),
        password: z.string().min(8),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const hashPassword = await bcrypt.hash(input.password, 10);

      return await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashPassword,
        },
      });
    }),

  current: protectedProcedure.query(({ ctx }) => {
    return ctx.session.user;
  }),
});
