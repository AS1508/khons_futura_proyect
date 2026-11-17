import Panel from "../Panel/Panel";
import { useMissionStore } from "../../store/missionStore";

interface Props {
  className?: string;
}

export default function Mobility({ className }: Props) {
  const motors = useMissionStore((state) => state.rover.motors);

  const leftCurrent =
    motors.motor_1.current_a + motors.motor_2.current_a;

  const rightCurrent =
    motors.motor_3.current_a + motors.motor_4.current_a;

  const currentDelta = Math.abs(leftCurrent - rightCurrent);

  return (
    <div className={className}>
      <Panel title="MOBILITY">

        <div className="flex flex-col gap-6">

          {/* DRIVE LOAD */}

          <div>

            <div className="flex items-center justify-between mb-4">

              <span className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                DRIVE LOAD
              </span>

              <span className="font-mono-ui text-[10px] uppercase text-zinc-600">
                CURRENT
              </span>

            </div>

            <div className="grid grid-cols-3 gap-4">

              <LoadValue
                label="LEFT"
                value={`${leftCurrent.toFixed(2)} A`}
              />

              <LoadValue
                label="RIGHT"
                value={`${rightCurrent.toFixed(2)} A`}
              />

              <LoadValue
                label="DELTA"
                value={`${currentDelta.toFixed(2)} A`}
              />

            </div>

          </div>


          {/* WHEEL TELEMETRY */}

          <div className="border-t border-[#222] pt-5">

            <div className="flex items-center justify-between mb-3">

              <span className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                WHEEL TELEMETRY
              </span>

              <span className="font-mono-ui text-[10px] uppercase text-zinc-600">
                4 CHANNELS
              </span>

            </div>

            <div className="grid grid-cols-2 gap-3">

              <MotorCard motor={motors.motor_1} />
              <MotorCard motor={motors.motor_2} />
              <MotorCard motor={motors.motor_3} />
              <MotorCard motor={motors.motor_4} />

            </div>

          </div>


          {/* CONTROLLERS */}

          <div className="border-t border-[#222] pt-5">

            <div className="grid grid-cols-2 gap-4">

              <ControllerStatus
                name={motors.controller_1}
                motorCount={2}
              />

              <ControllerStatus
                name={motors.controller_2}
                motorCount={2}
              />

            </div>

          </div>

        </div>

      </Panel>
    </div>
  );
}


interface MotorCardProps {
  motor: {
    id: string;
    rpm: number;
    current_a: number;
    temperature_c: number;
    encoder_count: number;
    status: string;
  };
}


function MotorCard({ motor }: MotorCardProps) {
  return (
    <div className="border border-[#222] p-3">

      <div className="flex items-center justify-between">

        <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-zinc-400">
          {motor.id}
        </span>

        <span
          className={`font-mono-ui text-[9px] uppercase ${
            motor.status === "ONLINE"
              ? "text-green-500"
              : "text-zinc-500"
          }`}
        >
          {motor.status}
        </span>

      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">

        <MotorValue
          label="RPM"
          value={motor.rpm.toString()}
        />

        <MotorValue
          label="CURRENT"
          value={`${motor.current_a.toFixed(2)} A`}
        />

        <MotorValue
          label="TEMP"
          value={`${motor.temperature_c.toFixed(0)}°C`}
        />

        <MotorValue
          label="ENCODER"
          value={motor.encoder_count.toString()}
        />

      </div>

    </div>
  );
}


function MotorValue({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="font-mono-ui text-[9px] uppercase tracking-[0.18em] text-zinc-600">
        {label}
      </p>

      <p className="font-mono-ui mt-1 text-[11px] text-zinc-200">
        {value}
      </p>

    </div>
  );
}


function LoadValue({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="font-mono-ui text-[9px] uppercase tracking-[0.18em] text-zinc-600">
        {label}
      </p>

      <p className="font-mono-ui mt-2 text-base text-zinc-100">
        {value}
      </p>

    </div>
  );
}


function ControllerStatus({
  name,
  motorCount,
}: {
  name: string;
  motorCount: number;
}) {
  return (
    <div className="flex items-center justify-between border border-[#222] px-3 py-3">

      <div>

        <p className="font-mono-ui text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          CONTROLLER
        </p>

        <p className="font-mono-ui mt-1 text-[11px] text-zinc-300">
          {name}
        </p>

      </div>

      <div className="text-right">

        <p className="font-mono-ui text-[9px] uppercase text-zinc-600">
          CHANNELS
        </p>

        <p className="font-mono-ui mt-1 text-[11px] text-zinc-300">
          {motorCount}
        </p>

      </div>

    </div>
  );
}