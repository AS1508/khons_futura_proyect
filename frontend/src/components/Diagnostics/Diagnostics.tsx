import {
  Activity,
  Camera,
  Cpu,
  Radio,
  RotateCw,
} from "lucide-react";

import Panel from "../Panel/Panel";
import { useMissionStore } from "../../store/missionStore";

interface Props {
  className?: string;
}

export default function Diagnostics({ className }: Props) {
  const diagnostics = useMissionStore(
    (state) => state.rover.diagnostics
  );

  return (
    <div className={className}>
      <Panel title="DIAGNOSTICS">

        <div className="flex flex-col gap-4">

          <DiagnosticRow
            icon={<Cpu size={14} />}
            label="SYSTEM"
            status={diagnostics.system.status}
            message={diagnostics.system.message}
          />

          <DiagnosticRow
            icon={<RotateCw size={14} />}
            label="MOTORS"
            status={diagnostics.motors.status}
            message={diagnostics.motors.message}
          />

          <DiagnosticRow
            icon={<Activity size={14} />}
            label="IMU"
            status={diagnostics.imu.status}
            message={diagnostics.imu.message}
          />

          <DiagnosticRow
            icon={<Camera size={14} />}
            label="CAMERA"
            status={diagnostics.camera.status}
            message={diagnostics.camera.message}
          />

          <DiagnosticRow
            icon={<Radio size={14} />}
            label="ROS LINK"
            status={diagnostics.ros.status}
            message={diagnostics.ros.message}
          />

        </div>

      </Panel>
    </div>
  );
}

interface DiagnosticRowProps {
  icon: React.ReactNode;
  label: string;
  status: string;
  message: string;
}

function DiagnosticRow({
  icon,
  label,
  status,
  message,
}: DiagnosticRowProps) {
  const isHealthy = status === "OK";

  const isWarning =
    status === "WARNING";

  const isCritical =
    status === "ERROR" ||
    status === "CRITICAL";

  const statusClass = isHealthy
    ? "text-green-500"
    : isWarning
      ? "text-yellow-500"
      : isCritical
        ? "text-red-500"
        : "text-zinc-500";

  const dotClass = isHealthy
    ? "bg-green-500"
    : isWarning
      ? "bg-yellow-500"
      : isCritical
        ? "bg-red-500"
        : "bg-zinc-600";

  return (
    <div className="border-t border-[#222] pt-3">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <div className="text-[#B56A2D]">
            {icon}
          </div>

          <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            {label}
          </span>

        </div>

        <div className="flex items-center gap-2">

          <span
            className={`h-2 w-2 rounded-full ${dotClass}`}
          />

          <span
            className={`font-mono-ui text-[10px] uppercase ${statusClass}`}
          >
            {status}
          </span>

        </div>

      </div>

      <p className="mt-2 pl-6 font-mono-ui text-[10px] text-zinc-600">
        {message}
      </p>

    </div>
  );
}