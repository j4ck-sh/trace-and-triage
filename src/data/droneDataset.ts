
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

export const droneDataset: DroneDatasetMetadata = {
  id: "DEMO-001",
  name: "Demonstration Flight Dataset",
  kind: "synthetic",
  source: "Trace & Triage demonstration data",
  description:
    "Synthetic flight measurements used to demonstrate the forensic analysis interface.",

  sampleCount: 8,
  eventCount: 5,
  durationSeconds: 105,

  limitations: [
    "Not collected from a real aircraft.",
    "Not suitable for evidential conclusions.",
    "The map and telemetry are not synchronised.",
    "No flight-log parser or validation workflow is connected."
  ]
};