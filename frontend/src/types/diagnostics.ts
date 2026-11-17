export type DiagnosticStatus =
  | "OK"
  | "WARNING"
  | "ERROR"
  | "CRITICAL"
  | "OFFLINE";

export interface DiagnosticComponent {
  status: DiagnosticStatus;
  message: string;
}

export interface DiagnosticsState {
  system: DiagnosticComponent;
  motors: DiagnosticComponent;
  imu: DiagnosticComponent;
  camera: DiagnosticComponent;
  ros: DiagnosticComponent;
}