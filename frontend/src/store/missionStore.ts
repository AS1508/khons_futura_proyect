import { create } from "zustand";

import type { RoverState } from "../types/rover";
import type { TelemetryState } from "../types/telemetry";
import type { MissionState } from "../types/mission";

interface MissionStore {
  rover: RoverState;
  telemetry: TelemetryState;
  mission: MissionState;
}

export const useMissionStore = create<MissionStore>(() => ({
  rover: {
    identity: {
      id: "KHONS-01",
      name: "KHONS-01",
      model: "FUTURA Mobility Platform",
      firmware: "0.1.0",
    },

    connection: {
      status: "ONLINE",
      latency_ms: 12,
      ros_status: "CONNECTED",
    },

    motion: {
      speed_mps: 0,
      heading_deg: 0,
      pitch_deg: 0,
      roll_deg: 0,
    },

    power: {
      voltage_v: 24.1,
      current_a: 0,
      battery_percent: 91,
      status: "GOOD",
    },

    localization: {
      latitude: -34.8,
      longitude: -58.5,
      altitude_m: 32.4,
      accuracy_m: 1.5,
    },

    camera: {
      id: "CAM-01",
      name: "FRONT OPTICAL",
      status: "ONLINE",
      resolution: {
        width: 1920,
        height: 1080,
      },
      fps: 60,
      stream_status: "STANDBY",
      recording: false,
    },

    motors: {
      controller_1: "ROBOCLAW-01",
      controller_2: "ROBOCLAW-02",

      motor_1: {
        id: "MOTOR-01",
        rpm: 0,
        current_a: 0,
        temperature_c: 25,
        encoder_count: 0,
        status: "ONLINE",
      },

      motor_2: {
        id: "MOTOR-02",
        rpm: 0,
        current_a: 0,
        temperature_c: 25,
        encoder_count: 0,
        status: "ONLINE",
      },

      motor_3: {
        id: "MOTOR-03",
        rpm: 0,
        current_a: 0,
        temperature_c: 25,
        encoder_count: 0,
        status: "ONLINE",
      },

      motor_4: {
        id: "MOTOR-04",
        rpm: 0,
        current_a: 0,
        temperature_c: 25,
        encoder_count: 0,
        status: "ONLINE",
      },
    },

    diagnostics: {
      system: {
        status: "OK",
        message: "All systems nominal",
      },

      motors: {
        status: "OK",
        message: "All motor controllers operational",
      },

      imu: {
        status: "OK",
        message: "IMU online",
      },

      camera: {
        status: "OK",
        message: "Front optical camera online",
      },

      ros: {
        status: "OK",
        message: "ROS connection established",
      },
    },
  },

  telemetry: {
    system: {
      cpu_percent: 13,
      temperature_c: 29,
    },

    imu: {
      status: "ONLINE",
    },
  },

  mission: {
    id: "MISSION-001",
    name: "Mobility Test 01",
    status: "READY",
    mode: "TELEOPERATION",
  },
}));