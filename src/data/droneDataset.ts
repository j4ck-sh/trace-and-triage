
import { demoFlight } from "./demoFlight";
import { demoEvents } from "./demoEvents";

export type DatasetKind = "synthetic" | "imported";

export interface DroneDatasetMetadata {
  id: string;
  name: string;
  kind: DatasetKind;
  source: string;
  description: string;
  sampleCount: number;
  eventCount: number;
  durationSeconds: number;
  limitations: string[];
}

// Calculate statistics from the shared
// synthetic demonstration dataset.

const sampleCount = demoFlight.length;
const eventCount = demoEvents.length;

const timestamps = [
  ...demoFlight.map((sample) => sample.time),
  ...demoEvents.map((event) => event.time)
].filter(Number.isFinite);

const durationSeconds =
  timestamps.length > 0
    ? Math.max(...timestamps) - Math.min(...timestamps)
    : 0;

// Dataset metadata.

export const droneDataset: DroneDatasetMetadata = {
  id: "DEMO-001",

  name: "Demonstration Flight Dataset",

  kind: "synthetic",

  source: "Trace & Triage demonstration data",

  description:
    "Unified synthetic flight dataset containing fictional GPS coordinates, altitude measurements and linked flight events. Used to demonstrate interactive flight reconstruction, telemetry analysis, event chronology and illustrative evidence relationships.",

  sampleCount,
  eventCount,
  durationSeconds,

  limitations: [
    "All flight records, coordinates and events are synthetic demonstration data.",

    "Not collected from a real aircraft or forensic evidence source.",

    "Map waypoints and telemetry share the same demonstration flight records, but this does not constitute independent verification of the measurements.",

    "Event-to-waypoint correlations are predefined synthetic relationships rather than findings derived from forensic analysis.",

    "No flight-log parser, external data import or forensic validation workflow is connected.",

    "No evidence acquisition, cryptographic integrity verification or chain-of-custody workflow is implemented.",

    "Evidence relationships are illustrative rather than verified forensic findings.",

    "Not suitable for evidential conclusions about an actual aircraft, flight or incident."
  ]
};
