export interface SystemTelemetry {
  cpu_percent: number;
  temperature_c: number;
}

export interface IMUTelemetry {
  status: "ONLINE" | "OFFLINE" | "ERROR";
}

export interface TelemetryState {
  system: SystemTelemetry;
  imu: IMUTelemetry;
}