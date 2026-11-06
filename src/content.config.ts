
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ==========================================
// TRACE & TRIAGE
// Research Content Collection Configuration
// ==========================================

const research = defineCollection({

  // Load Markdown and MDX research articles
  // from the research folder.
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/research",
  }),

  // Define the metadata available to each article.
  schema: z.object({

    // --------------------------------------
    // REQUIRED ARTICLE INFORMATION
    // --------------------------------------

    // Article title
    title: z.string(),

    // Short description for research cards and SEO
    description: z.string(),

    // Publication date
    date: z.coerce.date(),

    // Research category
    category: z.string(),

    // Investigation reference, e.g. TT-ML-001
    caseId: z.string(),

    // --------------------------------------
    // ARTICLE CLASSIFICATION
    // --------------------------------------

    // Article tags, e.g. Windows, Malware, DFIR
    tags: z.array(z.string()).default([]),

    // Tools used during the investigation
    tools: z.array(z.string()).default([]),

    // Research difficulty
    difficulty: z
      .enum([
        "Beginner",
        "Intermediate",
        "Advanced",
      ])
      .optional(),

    // --------------------------------------
    // PUBLISHING STATUS
    // --------------------------------------

    // true = hidden from the published website
    // false = publicly available
    draft: z.boolean().default(false),

    // Displayed research status
    status: z
      .enum([
        "Planned",
        "In Progress",
        "Completed",
      ])
      .default("Completed"),

    // --------------------------------------
    // FORENSIC INVESTIGATION INFORMATION
    // --------------------------------------

    // Operating system or platform examined
    platform: z.string().optional(),

    // Research/lab environment
    environment: z.string().optional(),

    // Optional malware family or investigated subject
    subject: z.string().optional(),

    // --------------------------------------
    // IMAGES AND PRESENTATION
    // --------------------------------------

    // Main article/featured image
    heroImage: z.string().optional(),

    // Image description for accessibility
    heroImageAlt: z.string().optional(),

    // --------------------------------------
    // ADDITIONAL ARTICLE INFORMATION
    // --------------------------------------

    // Optional reading time, e.g. "12 min read"
    readingTime: z.string().optional(),

    // Link to supporting GitHub repository
    githubUrl: z.string().url().optional(),

    // Optional external references
    references: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
      })
    ).default([]),

    timeline: z.array(
      z.object({
        timestamp: z.string(),
        title: z.string(),
        description: z.string().optional(),
        source: z.string().optional(),
      })
    ).default([]),

    indicators: z.array(
      z.object({
        type: z.string(),
        value: z.string(),
        description: z.string().optional(),
      })
    ).default([]),


    callouts: z.array(
      z.object({
        type: z.enum([
          "finding",
          "note",
          "evidence",
          "limitation",
          "conclusion"
        ]),

        title: z.string(),

        text: z.string(),

        reference: z.string().optional()
      })
    ).default([]),

    attackTechniques: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        tactic: z.string().optional(),
        evidence: z.string(),
        assessment: z.enum(["Observed", "Inferred", "Background"]),
        confidence: z.enum(["High", "Medium", "Low"]),
        reference: z.string().url().optional(),
      })
    ).default([]),

    spartaTechniques: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        tactic: z.string().optional(),
        evidence: z.string(),
        assessment: z.enum(["Observed", "Inferred", "Background"]),
        confidence: z.enum(["High", "Medium", "Low"]),
        reference: z.string().url().optional(),
      })
    ).default([]),

  }),

});

// Export the collection so Astro can use it.
export const collections = {
  research,
};