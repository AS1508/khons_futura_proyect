export type CameraStatus =
  | "ONLINE"
  | "OFFLINE"
  | "ERROR";

export type StreamStatus =
  | "LIVE"
  | "STANDBY"
  | "OFFLINE"
  | "ERROR";

export interface CameraResolution {
  width: number;
  height: number;
}

export interface CameraState {
  id: string;
  name: string;
  status: CameraStatus;
  resolution: CameraResolution;
  fps: number;
  stream_status: StreamStatus;
  recording: boolean;
}