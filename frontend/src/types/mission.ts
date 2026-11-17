export type MissionStatus =
  | "IDLE"
  | "READY"
  | "ACTIVE"
  | "PAUSED"
  | "COMPLETED"
  | "ABORTED";

export type MissionMode =
  | "SIMULATION"
  | "TELEOPERATION"
  | "AUTONOMOUS";

export interface MissionState {
  id: string;
  name: string;
  status: MissionStatus;
  mode: MissionMode;
}