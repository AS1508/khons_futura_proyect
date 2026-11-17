import { Activity, Flag, Radio } from "lucide-react";

import Panel from "../Panel/Panel";
import { useMissionStore } from "../../store/missionStore";

interface Props {
  className?: string;
}

export default function Mission({ className }: Props) {
  const mission = useMissionStore((state) => state.mission);

  return (
    <div className={className}>
      <Panel title="MISSION">

        <div className="flex flex-col gap-5">

          {/* Mission identity */}

          <div className="border-b border-[#222] pb-4">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Flag
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#B56A2D]"
                />

                <span className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  MISSION ID
                </span>

              </div>

              <span className="font-mono-ui text-[11px] text-zinc-200">
                {mission.id}
              </span>

            </div>

            <div className="mt-3">

              <p className="font-mono-ui text-lg text-zinc-100">
                {mission.name}
              </p>

            </div>

          </div>

          {/* Status */}

          <div className="grid grid-cols-2 gap-4">

            <MissionValue
              label="STATUS"
              value={mission.status}
              accent
            />

            <MissionValue
              label="MODE"
              value={mission.mode}
            />

          </div>

          {/* Connection */}

          <div className="border-t border-[#222] pt-4">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Activity
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#B56A2D]"
                />

                <span className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  MISSION STATE
                </span>

              </div>

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="font-mono-ui text-[10px] uppercase text-green-500">
                  {mission.status}
                </span>

              </div>

            </div>

          </div>

          {/* Mission mode */}

          <div className="flex items-center justify-between border-t border-[#222] pt-4">

            <div className="flex items-center gap-2">

              <Radio
                size={14}
                strokeWidth={1.5}
                className="text-[#B56A2D]"
              />

              <span className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                OPERATING MODE
              </span>

            </div>

            <span className="font-mono-ui text-[10px] uppercase tracking-[0.18em] text-zinc-300">
              {mission.mode}
            </span>

          </div>

        </div>

      </Panel>
    </div>
  );
}

interface MissionValueProps {
  label: string;
  value: string;
  accent?: boolean;
}

function MissionValue({
  label,
  value,
  accent = false,
}: MissionValueProps) {
  return (
    <div>

      <p className="font-mono-ui text-[9px] uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>

      <p
        className={`font-mono-ui mt-2 text-sm uppercase ${
          accent ? "text-[#B56A2D]" : "text-zinc-200"
        }`}
      >
        {value}
      </p>

    </div>
  );
}