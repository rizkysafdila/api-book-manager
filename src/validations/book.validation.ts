import { z } from "zod";

export class BookValidation {
  static readonly CREATE = z.object({
    title: z.string().min(1).max(100),
    author: z.string().min(1).max(100),
    year: z
      .union([z.string(), z.number()])
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val) && val >= 1900 && val <= new Date().getFullYear(), {
        message: "Invalid year",
      }),
  });

  static readonly UPDATE = z
    .object({
      title: z.string().min(1).max(100).optional(),
      author: z.string().min(1).max(100).optional(),
      year: z
        .union([z.string(), z.number()])
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val >= 1900 && val <= new Date().getFullYear(), { message: "Invalid year" })
        .optional(),
    })
    .refine((data) => data.title !== undefined || data.author !== undefined || data.year !== undefined, {
      message: "At least one field (title, author, or year) must be provided",
      path: ["update"],
    });
}
