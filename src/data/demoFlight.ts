
export interface FlightSample {
  id: string;
  time: number;
  altitude: number;
  latitude: number;
  longitude: number;
}

export const demoFlight: FlightSample[] = [
  {
    id: "WP-001",
    time: 0,
    altitude: 0,
    latitude: 0.0100,
    longitude: 0.0100
  },
  {
    id: "WP-002",
    time: 15,
    altitude: 12,
    latitude: 0.0104,
    longitude: 0.0106
  },
  {
    id: "WP-003",
    time: 30,
    altitude: 29,
    latitude: 0.0109,
    longitude: 0.0113
  },
  {
    id: "WP-004",
    time: 45,
    altitude: 45,
    latitude: 0.0115,
    longitude: 0.0119
  },
  {
    id: "WP-005",
    time: 60,
    altitude: 55,
    latitude: 0.0120,
    longitude: 0.0125
  },
  {
    id: "WP-006",
    time: 75,
    altitude: 39,
    latitude: 0.0116,
    longitude: 0.0131
  },
  {
    id: "WP-007",
    time: 90,
    altitude: 14,
    latitude: 0.0110,
    longitude: 0.0136
  },
  {
    id: "WP-008",
    time: 105,
    altitude: 0,
    latitude: 0.0103,
    longitude: 0.0140
  }
];
