export interface FlightSample {
  time: number;
  altitude: number;
}

export const demoFlight: FlightSample[] = [
  { time: 0, altitude: 0 },
  { time: 15, altitude: 12 },
  { time: 30, altitude: 29 },
  { time: 45, altitude: 45 },
  { time: 60, altitude: 55 },
  { time: 75, altitude: 39 },
  { time: 90, altitude: 14 },
  { time: 105, altitude: 0 }
];