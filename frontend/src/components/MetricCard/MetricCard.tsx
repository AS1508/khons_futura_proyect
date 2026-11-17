import type { ReactNode } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

interface Props {
  title: string;
  value: string;
  status: string;
  icon?: ReactNode;
  progress?: number;
}

export default function MetricCard({
  title,
  value,
  status,
  icon,
  progress,
}: Props) {
  return (
    <div className="bg-[#101010] border border-[#252525] rounded-lg p-4 hover:border-[#343434] transition-colors">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          {icon}

          <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-zinc-500">

            {title}

          </span>

        </div>

        <span
          className={`
            font-mono-ui
            text-[10px]
            uppercase
            tracking-[0.18em]

            ${
              status === "GOOD" ||
              status === "ONLINE" ||
              status === "CONNECTED" ||
              status === "OK"

                ? "text-green-500"

                : status === "WARNING"

                ? "text-yellow-500"

                : status === "ERROR"

                ? "text-red-500"

                : "text-zinc-500"
            }
          `}
        >
          {status}
        </span>

      </div>

      {/* Value */}

      <div className="mt-3 flex items-end justify-between">

        <h2 className="font-mono-ui text-2xl font-semibold text-zinc-100">

          {value}

        </h2>

        {progress !== undefined && (
          <span className="font-mono-ui text-xs text-zinc-500">
            {progress}%
          </span>
        )}

      </div>

      {/* Progress */}
{progress !== undefined && (
  <div className="mt-3">
    <ProgressBar value={progress} />
  </div>
)}

    </div>
  );
}