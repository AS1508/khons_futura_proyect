export type MotorStatus =
  | "ONLINE"
  | "OFFLINE"
  | "ERROR"
  | "DISABLED";

export interface MotorState {
  id: string;
  rpm: number;
  current_a: number;
  temperature_c: number;
  encoder_count: number;
  status: MotorStatus;
}

export interface MotorsState {
  controller_1: string;
  controller_2: string;

  motor_1: MotorState;
  motor_2: MotorState;
  motor_3: MotorState;
  motor_4: MotorState;
}