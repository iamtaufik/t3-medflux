import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { env } from "@/env";

export const medicineRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        code: z.string(),
        unit: z.string(),
        disease: z.string(),
        stock: z.number(),
        maxStock: z.number().default(1200),
        price: z.number(),
        expiryDate: z.date(),
        lastCheckDate: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.medicine.create({
        data: {
          medicineCode: input.code,
          name: input.name,
          unit: input.unit,
          disease: input.disease,
          stock: input.stock,
          maxStock: input.maxStock,
          price: input.price,
          expiryDate: input.expiryDate,
          lastCheckDate: input.lastCheckDate,
        },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const medicines = await ctx.db.medicine.findMany({
      where: {
        expiryDate: {
          gte: new Date(),
        },
      },
    });
    if (!medicines) {
      return [];
    }
    return medicines;
  }),

  getDetail: protectedProcedure
    .input(z.object({ code: z.string() }))
    .query(async ({ ctx, input }) => {
      const medicine = await ctx.db.medicine.findUnique({
        where: {
          medicineCode: input.code,
        },
      });
      if (!medicine) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Medicine not found",
        });
      }
      return medicine;
    }),

  status: protectedProcedure.query(async ({ ctx }) => {
    // simulate a slow db call
    // if (env.NODE_ENV === "development") {
    //   await new Promise((resolve) => setTimeout(resolve, 5000));
    // }

    const [available, expired, sold, alomostOutStock, stock] =
      await Promise.all([
        ctx.db.medicine.count({
          where: {
            stock: {
              gt: 0,
            },
            AND: {
              expiryDate: {
                gte: new Date(),
              },
            },
          },
        }),
        ctx.db.medicine.count({
          where: {
            expiryDate: {
              lt: new Date(),
            },
          },
        }),
        ctx.db.transaction.count(),
        ctx.db.medicine.findMany({
          where: {
            stock: {
              lte: 10,
            },
          },
          select: {
            medicineCode: true,
            stock: true,
            name: true,
          },
        }),
        ctx.db.medicine.aggregate({
          _count: {
            stock: true,
          },
        }),
      ]);
    return {
      available,
      expired,
      sold,
      alomostOutStock,
      isInventoryLow: stock._count.stock <= 500,
    };
  }),

  almostExpired: protectedProcedure.query(async ({ ctx }) => {
    // Get all medicines that will expire in 3 months from now
    const medicines = await ctx.db.medicine.findMany({
      where: {
        expiryDate: {
          gte: new Date(),
          lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 * 3),
        },
      },
      orderBy: {
        expiryDate: "asc",
      },
    });
    return medicines;
  }),
});
