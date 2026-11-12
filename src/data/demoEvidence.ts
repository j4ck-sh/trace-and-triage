
import { demoFlight } from "./demoFlight";
import { demoEvents } from "./demoEvents";

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

const waypointIds = demoFlight.map((sample) => sample.id);
const eventIds = demoEvents.map((event) => event.id);

export const demoEvidenceNodes: EvidenceNode[] = [
  {
    id: "flight-log",
    label: "Synthetic Flight Dataset",
    type: "source",
    description:
      `Demonstration-only dataset containing ${demoFlight.length} ` +
      `fictional flight samples (${waypointIds.join(", ")}). ` +
      "Not acquired from an actual aircraft or flight log."
  },
  {
    id: "gps-records",
    label: "Fictional Waypoint Coordinates",
    type: "artefact",
    description:
      `Invented latitude and longitude values associated with ` +
      `${demoFlight.length} synthetic waypoints. ` +
      "These coordinates are not independently verified GPS evidence."
  },
  {
    id: "telemetry",
    label: "Synthetic Telemetry Samples",
    type: "artefact",
    description:
      `${demoFlight.length} altitude measurements indexed by ` +
      "elapsed flight time in seconds. " +
      "Values are generated demonstration data, not aircraft measurements."
  },
  {
    id: "event-timeline",
    label: "Synthetic Flight Events",
    type: "analysis",
    description:
      `${demoEvents.length} demonstration events ` +
      `(${eventIds.join(", ")}) linked to flight waypoints. ` +
      "Event interpretations are illustrative and not verified findings."
  },
  {
    id: "findings",
    label: "Demonstration Findings",
    type: "report",
    description:
      "A conceptual summary of observations that can be derived " +
      "from the synthetic flight samples and event timeline. " +
      "No independent forensic conclusions or acquisition records are claimed."
  }
];

export const demoEvidenceLinks: EvidenceLink[] = [
  {
    from: "flight-log",
    to: "gps-records",
    relationship:
      "Defines fictional coordinates for the synthetic waypoints"
  },
  {
    from: "flight-log",
    to: "telemetry",
    relationship:
      "Defines synthetic altitude and elapsed-time measurements"
  },
  {
    from: "gps-records",
    to: "event-timeline",
    relationship:
      "Provides fictional waypoint locations for linked events"
  },
  {
    from: "telemetry",
    to: "event-timeline",
    relationship:
      "Provides sample times and altitudes for event interpretation"
  },
  {
    from: "event-timeline",
    to: "findings",
    relationship:
      "Provides illustrative observations for a demonstration report"
  }
];

// Validate the graph structure so broken references are
// detected during development and build.
const nodeIds = new Set(
  demoEvidenceNodes.map((node) => node.id)
);

if (nodeIds.size !== demoEvidenceNodes.length) {
  throw new Error(
    "Synthetic evidence graph contains duplicate node IDs."
  );
}

for (const link of demoEvidenceLinks) {
  if (!nodeIds.has(link.from)) {
    throw new Error(
      `Evidence relationship references missing source: ${link.from}`
    );
  }

  if (!nodeIds.has(link.to)) {
    throw new Error(
      `Evidence relationship references missing target: ${link.to}`
    );
  }
}

// Validate the waypoint references used by the event timeline.
for (const event of demoEvents) {
  const waypoint = demoFlight.find(
    (sample) => sample.id === event.waypointId
  );

  if (!waypoint) {
    throw new Error(
      `Synthetic event ${event.id} references missing waypoint ${event.waypointId}`
    );
  }

  if (waypoint.time !== event.time) {
    throw new Error(
      `Synthetic event ${event.id} has a timestamp mismatch.`
    );
  }
}
