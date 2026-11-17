import Panel from "../Panel/Panel";
import {
  BatteryCharging,
  Cpu,
  Thermometer,
  Activity,
  Radio,
  Gauge,
} from "lucide-react";

import { useMissionStore } from "../../store/missionStore";

interface Props {
  className?: string;
}

export default function Telemetry({ className }: Props) {
  const power = useMissionStore((state) => state.rover.power);
  const system = useMissionStore((state) => state.telemetry.system);
  const imu = useMissionStore((state) => state.telemetry.imu);
  const connection = useMissionStore(
    (state) => state.rover.connection
  );

  return (
    <div className={className}>
      <Panel title="SYSTEM STATUS">

        <div className="flex flex-col gap-5">

          {/* POWER */}

          <div>

            <SectionLabel label="POWER" />

            <div className="grid grid-cols-2 gap-4">

              <StatusValue
                icon={<BatteryCharging size={14} />}
                label="BATTERY"
                value={`${power.battery_percent}%`}
                status={power.status}
              />

              <StatusValue
                icon={<Activity size={14} />}
                label="VOLTAGE"
                value={`${power.voltage_v.toFixed(1)} V`}
                status="NOMINAL"
              />

              <StatusValue
                icon={<Activity size={14} />}
                label="CURRENT"
                value={`${power.current_a.toFixed(2)} A`}
                status={power.current_a === 0 ? "IDLE" : "ACTIVE"}
              />

              <StatusValue
                icon={<Thermometer size={14} />}
                label="SYSTEM TEMP"
                value={`${system.temperature_c}°C`}
                status="NOMINAL"
              />

            </div>

          </div>


          {/* COMPUTE */}

          <div className="border-t border-[#222] pt-4">

            <SectionLabel label="COMPUTE" />

            <StatusValue
              icon={<Cpu size={14} />}
              label="JETSON CPU"
              value={`${system.cpu_percent}%`}
              status="NORMAL"
              fullWidth
            />

          </div>


          {/* LINK */}

          <div className="border-t border-[#222] pt-4">

            <SectionLabel label="LINK" />

            <div className="flex flex-col gap-3">

              <TelemetryStatus
                icon={<Radio size={14} />}
                title="ROVER"
                status={connection.status}
              />

              <TelemetryStatus
                icon={<Radio size={14} />}
                title="ROS LINK"
                status={connection.ros_status}
              />

              <TelemetryStatus
                icon={<Gauge size={14} />}
                title="IMU"
                status={imu.status}
              />

            </div>

          </div>

        </div>

      </Panel>
    </div>
  );
}


function SectionLabel({
  label,
}: {
  label: string;
}) {
  return (
    <div className="mb-3">

      <span className="font-mono-ui text-[9px] uppercase tracking-[0.25em] text-zinc-600">
        {label}
      </span>

    </div>
  );
}


function StatusValue({
  icon,
  label,
  value,
  status,
  fullWidth = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  status: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`border border-[#222] p-3 ${
        fullWidth ? "w-full" : ""
      }`}
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <div className="text-[#B56A2D]">
            {icon}
          </div>

          <span className="font-mono-ui text-[9px] uppercase tracking-[0.2em] text-zinc-500">
            {label}
          </span>

        </div>

        <span
          className={`font-mono-ui text-[9px] uppercase ${
            status === "NOMINAL" ||
            status === "NORMAL" ||
            status === "GOOD" ||
            status === "ONLINE" ||
            status === "CONNECTED"
              ? "text-green-500"
              : status === "LOW" ||
                status === "CRITICAL" ||
                status === "ERROR"
              ? "text-red-500"
              : "text-zinc-500"
          }`}
        >
          {status}
        </span>

      </div>

      <div className="mt-3">

        <span className="font-mono-ui text-lg text-zinc-100">
          {value}
        </span>

      </div>

    </div>
  );
}


function TelemetryStatus({
  icon,
  title,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
}) {
  const isHealthy =
    status === "ONLINE" ||
    status === "CONNECTED" ||
    status === "GOOD";

  return (
    <div className="flex items-center justify-between border border-[#222] px-3 py-3">

      <div className="flex items-center gap-2">

        <div className="text-[#B56A2D]">
          {icon}
        </div>

        <span className="font-mono-ui text-[9px] uppercase tracking-[0.2em] text-zinc-500">
          {title}
        </span>

      </div>

      <div className="flex items-center gap-2">

        <div
          className={`w-2 h-2 rounded-full ${
            isHealthy ? "bg-green-500" : "bg-zinc-600"
          }`}
        />

        <span className="font-mono-ui text-[10px] uppercase text-zinc-200">
          {status}
        </span>

      </div>

    </div>
  );
}