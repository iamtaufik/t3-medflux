import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { type Transaction } from "@prisma/client";

export const transactionRouter = createTRPCRouter({
  status: protectedProcedure.query(async ({ ctx }) => {
    const revenue = await ctx.db.transaction.aggregate({
      _sum: {
        totalPrice: true,
      },
    });

    // const expense = await ctx.db.transaction.aggregate({
    //   _sum: {
    //     totalCost: true,
    //   },
    // });

    const sold = await ctx.db.transaction.aggregate({
      _count: {
        id: true,
      },
    });

    return {
      revenue: revenue._sum.totalPrice ?? 0,
      // expense: expense._sum.totalCost,
      sold: sold._count.id ?? 0,
    };
  }),

  getAll: protectedProcedure
    .input(
      z.object({
        page: z.number().default(1),
        limit: z.number().default(10),
        sort: z.union([z.literal("asc"), z.literal("desc")]),
      }),
    )
    .query<Transaction[]>(async ({ input, ctx }) => {
      const transactions = await ctx.db.transaction.findMany({
        take: input.limit,
        skip: (input.page - 1) * input.limit,
        orderBy: {
          structNumber: input.sort,
        },
      });

      return transactions;
    }),

  total: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.transaction.count();
  }),

  profit: protectedProcedure
    .input(
      z.object({
        start: z.string(),
        end: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      // get profit by date range (start - end)
      const profit = await ctx.db.transaction.groupBy({
        by: ["dateTime"],
        _sum: {
          totalPrice: true,
        },
        where: {
          dateTime: {
            gte: new Date(input.start),
            lte: new Date(input.end),
          },
        },
      });

      return profit;
    }),
});
