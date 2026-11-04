import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const research = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/research",
  }),

  schema: z.object({

    title: z.string(),

    description: z.string(),

    date: z.coerce.date(),

    category: z.string(),

    caseId: z.string(),

    tags: z.array(z.string()).default([]),

    tools: z.array(z.string()).default([]),

    difficulty: z
      .enum([
        "Beginner",
        "Intermediate",
        "Advanced"
      ])
      .optional(),

      draft: z.boolean().default(false),

      platform: z.string().optional(),
      environment: z.string().optional(),
      status: z.string().default("Completed"),
      heroImage: z.string().optional(),

  }),

});

export const collections = {
  research,
};