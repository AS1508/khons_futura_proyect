import type { CameraState } from "./camera";
import type { MotorsState } from "./motors";
import type { DiagnosticsState } from "./diagnostics";

export type ConnectionStatus =
  | "ONLINE"
  | "OFFLINE"
  | "CONNECTING"
  | "ERROR";

export type ROSConnectionStatus =
  | "CONNECTED"
  | "DISCONNECTED"
  | "CONNECTING"
  | "ERROR";

export type PowerStatus =
  | "GOOD"
  | "LOW"
  | "CRITICAL"
  | "CHARGING"
  | "UNKNOWN";

export interface RoverIdentity {
  id: string;
  name: string;
  model: string;
  firmware: string;
}

export interface ConnectionState {
  status: ConnectionStatus;
  latency_ms: number;
  ros_status: ROSConnectionStatus;
}

export interface MotionState {
  speed_mps: number;
  heading_deg: number;
  pitch_deg: number;
  roll_deg: number;
}

export interface PowerState {
  voltage_v: number;
  current_a: number;
  battery_percent: number;
  status: PowerStatus;
}

export interface LocalizationState {
  latitude: number;
  longitude: number;
  altitude_m: number;
  accuracy_m: number;
}

export interface RoverState {
  identity: RoverIdentity;
  connection: ConnectionState;
  motion: MotionState;
  power: PowerState;
  localization: LocalizationState;
  camera: CameraState;
  motors: MotorsState;
  diagnostics: DiagnosticsState;
}