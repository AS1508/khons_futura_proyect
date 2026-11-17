import Panel from "../Panel/Panel";
import { Compass, Cpu } from "lucide-react";

import { useMissionStore } from "../../store/missionStore";

interface Props {
  className?: string;
}

export default function Rover3D({ className }: Props) {
  const motion = useMissionStore((state) => state.rover.motion);
  const connection = useMissionStore((state) => state.rover.connection);

  return (
    <div className={className}>
      <Panel title="ROVER STATUS">

        <div className="h-full flex flex-col">

          {/* Rover */}

          <div className="flex-1 flex items-center justify-center">

            <div className="relative w-56 h-72">

              {/* FRONT */}

              <p className="absolute left-1/2 -translate-x-1/2 top-0 font-mono-ui text-[10px] tracking-[0.25em] text-zinc-500">

                FRONT

              </p>

              {/* Body */}

              <div className="absolute left-1/2 top-10 -translate-x-1/2 w-32 h-48 rounded-lg border border-[#343434] bg-[#111111]">

                <div className="absolute inset-3 border border-[#242424]" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <Cpu
                    size={34}
                    strokeWidth={1.3}
                    className="text-[#B56A2D]"
                  />

                </div>

              </div>

              {/* Wheels */}

              <Wheel className="left-6 top-14" />
              <Wheel className="right-6 top-14" />

              <Wheel className="left-6 bottom-14" />
              <Wheel className="right-6 bottom-14" />

            </div>

          </div>

          {/* Bottom */}

          <div className="border-t border-[#222] pt-4">

            <div className="grid grid-cols-2 gap-y-2">

              <Info
                label="Heading"
                value={`${motion.heading_deg.toFixed(0)}°`}
              />

              <Info
                label="Speed"
                value={`${motion.speed_mps.toFixed(2)} m/s`}
              />

              <Info
                label="Pitch"
                value={`${motion.pitch_deg.toFixed(1)}°`}
              />

              <Info
                label="Roll"
                value={`${motion.roll_deg.toFixed(1)}°`}
              />

            </div>

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-green-500" />

                <span className="font-mono-ui text-xs uppercase text-zinc-300">
                  {connection.status}
                </span>

              </div>

              <Compass
                size={17}
                className="text-[#B56A2D]"
              />

            </div>

          </div>

        </div>

      </Panel>
    </div>
  );
}

function Wheel({ className }: { className: string }) {
  return (
    <div
      className={`absolute ${className} w-7 h-12 rounded bg-[#1A1A1A] border border-[#444]`}
    />
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between">

      <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </span>

      <span className="font-mono-ui text-[11px] text-zinc-200">
        {value}
      </span>

    </div>
  );
}