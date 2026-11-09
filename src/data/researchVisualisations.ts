export interface ResearchVisualisation {
  id: string;
  title: string;
  description: string;
  type: "timeline" | "relationships" | "metadata";
  sourceLabel: string;
  notes: string[];
}

export const researchVisualisations: Record<
  string,
  ResearchVisualisation[]
> = {
  "malware-analysis": [
    {
      id: "malware-methodology",
      title: "Investigation Methodology",
      description: "Supporting analytical context.",
      type: "metadata",
      sourceLabel: "TT / RESEARCH NOTES",
      notes: [
        "Replace this example with documented methodology.",
        "Include only verified observations and references."
      ]
    }
  ]
};

export function getResearchVisualisations(
  articleId: string
): ResearchVisualisation[] {
  return researchVisualisations[articleId] ?? [];
}