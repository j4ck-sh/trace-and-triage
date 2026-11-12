
import { demoFlight } from "./demoFlight";

export interface ForensicEvent {
  id: string;
  time: number;
  waypointId: string;
  title: string;
  description: string;
  severity: "normal" | "notable";
}

export const demoEvents: ForensicEvent[] = [
  {
    id: "EVT-001",
    time: 0,
    waypointId: "WP-001",
    title: "Flight initiated",
    description: "The demonstration flight begins.",
    severity: "normal"
  },
  {
    id: "EVT-002",
    time: 30,
    waypointId: "WP-003",
    title: "Altitude increase",
    description: "The recorded altitude increases.",
    severity: "normal"
  },
  {
    id: "EVT-003",
    time: 60,
    waypointId: "WP-005",
    title: "Peak altitude",
    description: "The demonstration dataset reaches 55 metres.",
    severity: "notable"
  },
  {
    id: "EVT-004",
    time: 90,
    waypointId: "WP-007",
    title: "Descent",
    description: "The aircraft descends towards the end of the flight.",
    severity: "normal"
  },
  {
    id: "EVT-005",
    time: 105,
    waypointId: "WP-008",
    title: "Flight completed",
    description: "The demonstration flight ends.",
    severity: "notable"
  }
];

// Validate the event-to-waypoint references during development.
// Every event must reference an existing synthetic flight
// sample at the same elapsed timestamp.
for (const event of demoEvents) {
  const waypoint = demoFlight.find(
    (sample) => sample.id === event.waypointId
  );

  if (!waypoint) {
    throw new Error(
      `Event ${event.id} references missing waypoint ${event.waypointId}`
    );
  }

  if (waypoint.time !== event.time) {
    throw new Error(
      `Event ${event.id} time does not match ${event.waypointId}`
    );
  }
}
