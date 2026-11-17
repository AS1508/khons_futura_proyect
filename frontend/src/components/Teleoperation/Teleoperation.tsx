import Panel from "../Panel/Panel";
import { Wifi, Hand, OctagonX } from "lucide-react";

interface Props {
  className?: string;
}

export default function Teleoperation({ className }: Props) {
  return (
    <div className={className}>
      <Panel title="TELEOPERATION">

        <div className="flex flex-col h-full">

          {/* WASD */}

          <div className="flex justify-center mt-2">

            <div className="grid grid-cols-3 gap-2">

              <div />

              <KeyButton label="W" />

              <div />

              <KeyButton label="A" />

              <KeyButton label="S" />

              <KeyButton label="D" />

            </div>

          </div>

          {/* Speed */}

          <div className="mt-8">

            <Label>SPEED LIMIT</Label>

            <div className="grid grid-cols-4 gap-2 mt-3">

              <SpeedButton text="25%" active={false} />

              <SpeedButton text="50%" active />

              <SpeedButton text="75%" active={false} />

              <SpeedButton text="100%" active={false} />

            </div>

          </div>

          {/* Current */}

          <div className="mt-7 space-y-4">

            <Row
              label="CURRENT SPEED"
              value="0.00 m/s"
            />

            <Row
              label="MODE"
              value="MANUAL"
            />

          </div>

          <div className="mt-auto">

            <div className="flex items-center justify-between mb-4">

              <div className="flex items-center gap-2">

                <Wifi
                  size={15}
                  className="text-green-500"
                />

                <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-zinc-300">

                  ROS ONLINE

                </span>

              </div>

              <Hand
                size={15}
                className="text-[#B56A2D]"
              />

            </div>

            <button className="w-full h-11 rounded-md border border-red-700 bg-red-950/30 hover:bg-red-900/40 transition flex items-center justify-center gap-2">

              <OctagonX size={16} />

              <span className="font-mono-ui tracking-[0.22em] text-xs uppercase">

                Emergency Stop

              </span>

            </button>

          </div>

        </div>

      </Panel>
    </div>
  );
}

function KeyButton({ label }: { label: string }) {
  return (
    <button className="h-12 w-12 rounded-md border border-[#303030] bg-[#111111] hover:border-[#B56A2D] hover:bg-[#171717] transition font-mono-ui text-sm">
      {label}
    </button>
  );
}

function SpeedButton({
  text,
  active,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <button
      className={`
        h-9
        rounded
        border
        text-xs
        font-mono-ui
        uppercase
        transition

        ${
          active
            ? "border-[#B56A2D] bg-[#B56A2D]/20 text-white"
            : "border-[#303030] bg-[#111111] text-zinc-400 hover:border-[#B56A2D]"
        }
      `}
    >
      {text}
    </button>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between">

      <span className="font-mono-ui text-[10px] tracking-[0.22em] uppercase text-zinc-500">
        {label}
      </span>

      <span className="font-mono-ui text-[11px] text-zinc-200">
        {value}
      </span>

    </div>
  );
}

function Label({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-zinc-500">
      {children}
    </p>
  );
}