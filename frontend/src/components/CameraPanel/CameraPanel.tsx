import {
  Camera,
  Crosshair,
  Maximize2,
  Radio,
} from "lucide-react";

import Panel from "../Panel/Panel";
import { useMissionStore } from "../../store/missionStore";

interface Props {
  className?: string;
}

export default function CameraPanel({ className }: Props) {
  const rover = useMissionStore((state) => state.rover);

  const camera = rover.camera;
  const motion = rover.motion;
  const localization = rover.localization;

  const resolution = `${camera.resolution.width}×${camera.resolution.height}`;

  const streamStatus =
    camera.stream_status === "LIVE"
      ? "LIVE"
      : camera.stream_status === "STANDBY"
        ? "STANDBY"
        : camera.stream_status;

  return (
    <div className={className}>
      <Panel
        title={`OPTICAL FEED / ${camera.id}`}
        status={camera.stream_status === "LIVE" ? "LIVE" : "STANDBY"}
      >

        <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg border border-[#202020] bg-[#060606]">

          {/* Grid */}

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)]
              bg-[size:40px_40px]
              opacity-40
            "
          />

          {/* Noise */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.35)_100%)]" />

          {/* Marco interno */}

          <div className="absolute inset-4 border border-[#1E1E1E] pointer-events-none" />

          {/* Esquinas */}

          <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-[#B56A2D]" />
          <div className="absolute right-4 top-4 h-5 w-5 border-r border-t border-[#B56A2D]" />
          <div className="absolute left-4 bottom-4 h-5 w-5 border-l border-b border-[#B56A2D]" />
          <div className="absolute right-4 bottom-4 h-5 w-5 border-r border-b border-[#B56A2D]" />

          {/* TOP LEFT */}

          <div className="absolute left-6 top-6">

            <div className="flex items-center gap-3">

              <Camera
                size={15}
                strokeWidth={1.5}
                className="text-[#B56A2D]"
              />

              <span className="font-mono-ui text-[10px] uppercase tracking-[0.28em] text-zinc-400">
                {camera.name}
              </span>

            </div>

            <p className="mt-2 font-mono-ui text-[9px] tracking-[0.18em] text-zinc-600">
              UTC {new Date().toUTCString()}
            </p>

          </div>

          {/* TOP RIGHT */}

          <div className="absolute right-6 top-6 flex items-center gap-6">

            <div className="flex items-center gap-2">

              <span
                className={`h-2 w-2 rounded-full ${
                  camera.recording
                    ? "bg-[#B56A2D] animate-rec"
                    : "bg-zinc-600"
                }`}
              />

              <span className="font-mono-ui text-[10px] tracking-[0.25em] text-zinc-300">
                {camera.recording ? "REC" : "STBY"}
              </span>

            </div>

            <span className="font-mono-ui text-[10px] tracking-[0.18em] text-zinc-500">
              {resolution}
            </span>

            <span className="font-mono-ui text-[10px] tracking-[0.18em] text-zinc-500">
              {camera.fps} FPS
            </span>

          </div>

          {/* CROSSHAIR */}

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div className="relative h-24 w-24">

              <div className="absolute left-1/2 top-0 h-8 w-px bg-zinc-500/50" />
              <div className="absolute left-1/2 bottom-0 h-8 w-px bg-zinc-500/50" />
              <div className="absolute left-0 top-1/2 h-px w-8 bg-zinc-500/50" />
              <div className="absolute right-0 top-1/2 h-px w-8 bg-zinc-500/50" />

              <Crosshair
                size={22}
                strokeWidth={1.25}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  text-[#B56A2D]
                "
              />

            </div>

          </div>

          {/* POSITION */}

          <div className="absolute left-6 bottom-20">

            <p className="font-mono-ui text-[9px] uppercase tracking-[0.25em] text-zinc-600">
              POSITION
            </p>

            <div className="mt-2 space-y-1">

              <p className="font-mono-ui text-[11px] tracking-[0.14em] text-zinc-300">
                LAT {localization.latitude.toFixed(6)}
              </p>

              <p className="font-mono-ui text-[11px] tracking-[0.14em] text-zinc-300">
                LON {localization.longitude.toFixed(6)}
              </p>

              <p className="font-mono-ui text-[11px] tracking-[0.14em] text-zinc-300">
                ALT {localization.altitude_m.toFixed(1)} M
              </p>

            </div>

          </div>

          {/* VIDEO LINK */}

          <div className="absolute right-6 bottom-20 text-right">

            <div className="flex items-center justify-end gap-2">

              <Radio
                size={13}
                strokeWidth={1.5}
                className="text-[#B56A2D]"
              />

              <span className="font-mono-ui text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                VIDEO LINK
              </span>

            </div>

            <p className="mt-2 font-mono-ui text-[11px] tracking-[0.15em] text-zinc-300">
              {streamStatus}
            </p>

          </div>

          {/* HUD */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-12
              border-t
              border-[#222]
              bg-[#0A0A0A]/95
              backdrop-blur-sm
              flex
              items-center
              justify-between
              px-6
            "
          >

            <div className="flex items-center gap-10">

              <HUDItem
                label="SPD"
                value={`${motion.speed_mps.toFixed(2)} M/S`}
              />

              <HUDItem
                label="ALT"
                value={`${localization.altitude_m.toFixed(1)} M`}
              />

              <HUDItem
                label="HDG"
                value={`${motion.heading_deg.toFixed(0)}°`}
              />

              <HUDItem
                label="PITCH"
                value={`${motion.pitch_deg.toFixed(1)}°`}
              />

              <HUDItem
                label="ROLL"
                value={`${motion.roll_deg.toFixed(1)}°`}
              />

            </div>

            <Maximize2
              size={15}
              strokeWidth={1.5}
              className="cursor-pointer text-zinc-500 transition hover:text-[#B56A2D]"
            />

          </div>

        </div>

      </Panel>
    </div>
  );
}

interface HUDItemProps {
  label: string;
  value: string;
}

function HUDItem({ label, value }: HUDItemProps) {
  return (
    <div className="flex items-center gap-2">

      <span className="font-mono-ui text-[9px] uppercase tracking-[0.22em] text-zinc-600">
        {label}
      </span>

      <span className="font-mono-ui text-[11px] tracking-[0.12em] text-zinc-200">
        {value}
      </span>

    </div>
  );
}