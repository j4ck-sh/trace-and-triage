
import type { CollectionEntry } from "astro:content";

// Approximate reading speed in words per minute.
const WORDS_PER_MINUTE = 220;

export function getReadingTime(
  article: CollectionEntry<"research">
): number {
  // The Markdown source of the article.
  const markdown = article.body ?? "";

  // Remove fenced code blocks.
  const withoutCode = markdown.replace(
    /```[\s\S]*?```/g,
    " "
  );

  // Remove Markdown image references.
  const withoutImages = withoutCode.replace(
    /!\[[^\]]*\]\([^)]*\)/g,
    " "
  );

  // Remove basic Markdown formatting.
  const plainText = withoutImages
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_>`~[\]()]/g, " ")
    .trim();

  // Count words.
  const wordCount = plainText
    ? plainText.split(/\s+/).length
    : 0;

  // Minimum displayed reading time is 1 minute.
  return Math.max(
    1,
    Math.ceil(wordCount / WORDS_PER_MINUTE)
  );
}

export function formatReadingTime(
  minutes: number
): string {
  return `${minutes} min read`;
}