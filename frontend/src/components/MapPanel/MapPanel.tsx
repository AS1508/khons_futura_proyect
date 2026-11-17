import Panel from "../Panel/Panel";
import { Map, LocateFixed } from "lucide-react";

import { useMissionStore } from "../../store/missionStore";

interface Props {
  className?: string;
}

export default function MapPanel({ className }: Props) {
  const localization = useMissionStore(
    (state) => state.rover.localization
  );

  const rosStatus = useMissionStore(
    (state) => state.rover.connection.ros_status
  );

  return (
    <div className={className}>
      <Panel title="LOCAL MAP">

        <div className="relative h-full min-h-[260px] rounded-lg overflow-hidden border border-[#222] bg-[#090909]">

          {/* Grid */}

          <div
            className="
            absolute inset-0
            bg-[linear-gradient(to_right,#1d1d1d_1px,transparent_1px),linear-gradient(to_bottom,#1d1d1d_1px,transparent_1px)]
            bg-[size:36px_36px]
          "
          />

          {/* Rover */}

          <div
            className="
            absolute
            left-[55%]
            top-[48%]
            -translate-x-1/2
            -translate-y-1/2
          "
          >

            <LocateFixed
              size={20}
              strokeWidth={2}
              className="text-[#B56A2D]"
            />

          </div>

          {/* Trajectory */}

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >

            <polyline
              points="18,70 30,62 40,58 48,53 55,48"
              fill="none"
              stroke="#B56A2D"
              strokeWidth="0.6"
              strokeDasharray="2 2"
            />

          </svg>

          {/* Waypoints */}

          <div className="absolute left-[18%] top-[70%] w-2 h-2 rounded-full bg-zinc-500" />

          <div className="absolute left-[30%] top-[62%] w-2 h-2 rounded-full bg-zinc-500" />

          <div className="absolute left-[40%] top-[58%] w-2 h-2 rounded-full bg-zinc-500" />

          {/* Top */}

          <div className="absolute left-4 top-4 flex items-center gap-2">

            <Map
              size={15}
              className="text-[#B56A2D]"
            />

            <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              GRID MAP
            </span>

          </div>

          <div className="absolute right-4 top-4">

            <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              SCALE 5 m
            </span>

          </div>

          {/* Bottom */}

          <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-[#222] bg-[#0B0B0B]/95 flex justify-between items-center px-4">

            <div className="flex flex-col">

              <span className="font-mono-ui text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                LAT {localization.latitude.toFixed(4)}
              </span>

              <span className="font-mono-ui text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                LON {localization.longitude.toFixed(4)}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-green-500" />

              <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                ROS {rosStatus}
              </span>

            </div>

          </div>

        </div>

      </Panel>
    </div>
  );
}