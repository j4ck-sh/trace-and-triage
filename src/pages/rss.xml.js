
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const base = import.meta.env.BASE_URL;

  // Only include published research
  const articles = await getCollection(
    "research",
    ({ data }) => !data.draft
  );

  // Newest publications first
  const sortedArticles = [...articles].sort(
    (a, b) =>
      b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "Trace & Triage — Research Feed",

    description:
      "Digital forensics, incident response, malware analysis and specialist cybersecurity research.",

    site: context.site,

    items: sortedArticles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,

      // Correct GitHub Pages project path
      link: `${base}research/${article.id}/`,

      categories: [
        article.data.category,
        ...article.data.tags
      ],

      customData: `<guid isPermaLink="false">${article.id}</guid>`
    })),

    customData: `<language>en-gb</language>`
  });
}