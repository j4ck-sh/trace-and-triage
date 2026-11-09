
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

// Calculate statistics from demonstration data

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

// Dataset metadata

export const droneDataset: DroneDatasetMetadata = {
  id: "DEMO-001",

  name: "Demonstration Flight Dataset",

  kind: "synthetic",

  source: "Trace & Triage demonstration data",

  description:
    "Synthetic flight measurements and events used to demonstrate the forensic investigation interface.",

  sampleCount,
  eventCount,
  durationSeconds,

  limitations: [
    "Not collected from a real aircraft.",
    "Not suitable for evidential conclusions.",
    "The flight map and telemetry are not synchronised.",
    "No flight-log parser or validation workflow is connected.",
    "Evidence relationships are illustrative rather than verified forensic findings."
  ]
};
