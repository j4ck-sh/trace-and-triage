export interface EvidenceNode {
  id: string;
  label: string;
  type: "source" | "artefact" | "analysis" | "report";
  description: string;
}

export interface EvidenceLink {
  from: string;
  to: string;
  relationship: string;
}

export const demoEvidenceNodes: EvidenceNode[] = [
  {
    id: "flight-log",
    label: "Flight Log",
    type: "source",
    description:
      "Demonstration flight-record dataset used as the starting point for analysis."
  },
  {
    id: "gps-records",
    label: "GPS Records",
    type: "artefact",
    description:
      "Illustrative geographic observations associated with the flight."
  },
  {
    id: "telemetry",
    label: "Telemetry Samples",
    type: "artefact",
    description:
      "Synthetic altitude measurements over elapsed flight time."
  },
  {
    id: "event-timeline",
    label: "Flight Events",
    type: "analysis",
    description:
      "A chronological interpretation of the demonstration records."
  },
  {
    id: "findings",
    label: "Findings",
    type: "report",
    description:
      "A summary of observations derived from the demonstration data."
  }
];

export const demoEvidenceLinks: EvidenceLink[] = [
  {
    from: "flight-log",
    to: "gps-records",
    relationship: "Contains location records"
  },
  {
    from: "flight-log",
    to: "telemetry",
    relationship: "Contains telemetry observations"
  },
  {
    from: "gps-records",
    to: "event-timeline",
    relationship: "Supports flight reconstruction"
  },
  {
    from: "telemetry",
    to: "event-timeline",
    relationship: "Supports event interpretation"
  },
  {
    from: "event-timeline",
    to: "findings",
    relationship: "Informs documented findings"
  }
];