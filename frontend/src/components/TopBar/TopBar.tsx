import logo from "../../assets/logo.png";

import { useMissionStore } from "../../store/missionStore";

export default function TopBar() {
  const rover = useMissionStore((state) => state.rover);
  const mission = useMissionStore((state) => state.mission);

  return (
    <header className="h-20 border-b border-[#252525] bg-[#090909] flex items-center justify-between px-10">

      {/* Logo + Título */}

      <div className="flex items-center gap-4">

        <img
          src={logo}
          alt="FUTURA"
          className="w-18 h-18 object-contain"
        />

        <div>

          <p className="font-mono-ui text-[10px] uppercase tracking-[0.45em] text-[#B56A2D]">
            FUTURA
          </p>

          <h1 className="font-mono-ui mt-1 text-xl font-semibold uppercase tracking-[0.30em] text-zinc-100">
            MISSION CONTROL
          </h1>

        </div>

      </div>

      {/* Centro */}

      <div className="flex gap-16">

        <div>

          <p className="font-mono-ui text-[10px] uppercase tracking-[0.30em] text-zinc-500">
            ROVER
          </p>

          <h2 className="font-mono-ui mt-1 text-base uppercase tracking-[0.18em] text-white">
            {rover.identity.name}
          </h2>

        </div>

        <div>

          <p className="font-mono-ui text-[10px] uppercase tracking-[0.30em] text-zinc-500">
            MISSION
          </p>

          <h2 className="font-mono-ui mt-1 text-base uppercase tracking-[0.18em] text-[#B56A2D]">
            {mission.name}
          </h2>

        </div>

        <div>

          <p className="font-mono-ui text-[10px] uppercase tracking-[0.30em] text-zinc-500">
            STATUS
          </p>

          <div className="mt-1 flex items-center gap-2">

            <div className="w-2 h-2 rounded-full bg-green-500" />

            <span className="font-mono-ui text-sm uppercase tracking-[0.18em] text-white">
              {rover.connection.status}
            </span>

          </div>

        </div>

      </div>

      {/* Derecha */}

      <div className="flex gap-10 text-right">

        <div>

          <p className="font-mono-ui text-[10px] uppercase tracking-[0.30em] text-zinc-500">
            LATENCY
          </p>

          <h2 className="font-mono-ui mt-1 text-base text-white">
            {rover.connection.latency_ms} ms
          </h2>

        </div>

        <div>

          <p className="font-mono-ui text-[10px] uppercase tracking-[0.30em] text-zinc-500">
            FPS
          </p>

          <h2 className="font-mono-ui mt-1 text-base text-white">
            60
          </h2>

        </div>

        <div>

          <p className="font-mono-ui text-[10px] uppercase tracking-[0.30em] text-zinc-500">
            UTC
          </p>

          <h2 className="font-mono-ui mt-1 text-base text-white">
            {new Date().toLocaleTimeString()}
          </h2>

        </div>

      </div>

    </header>
  );
}