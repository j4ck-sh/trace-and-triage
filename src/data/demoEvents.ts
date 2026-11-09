
export interface ForensicEvent {
  id: string;
  time: number;
  title: string;
  description: string;
  severity: "normal" | "notable";
}

export const demoEvents: ForensicEvent[] = [
  {
    id: "EVT-001",
    time: 0,
    title: "Flight initiated",
    description: "The demonstration flight begins.",
    severity: "normal"
  },
  {
    id: "EVT-002",
    time: 30,
    title: "Altitude increase",
    description: "The recorded altitude increases.",
    severity: "normal"
  },
  {
    id: "EVT-003",
    time: 60,
    title: "Peak altitude",
    description: "The demonstration dataset reaches 55 metres.",
    severity: "notable"
  },
  {
    id: "EVT-004",
    time: 90,
    title: "Descent",
    description: "The aircraft descends towards the end of the flight.",
    severity: "normal"
  },
  {
    id: "EVT-005",
    time: 105,
    title: "Flight completed",
    description: "The demonstration flight ends.",
    severity: "notable"
  }
];