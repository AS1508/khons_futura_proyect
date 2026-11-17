import {
  LayoutDashboard,
  Flag,
  Camera,
  Map,
  Bot,
  Activity,
 Gauge,
  Mountain,
  BrainCircuit,
  ScrollText,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Flag, label: "Mission" },
  { icon: Camera, label: "Camera" },
  { icon: Map, label: "Map" },
  { icon: Bot, label: "Rover" },
  { icon: Activity, label: "Telemetry" },
  { icon: Gauge, label: "Mobility" },
  { icon: Mountain, label: "Terrain" },
  { icon: BrainCircuit, label: "AI Modules" },
  { icon: ScrollText, label: "Logs" },
];

export default function Sidebar() {
  return (
    <aside className="w-[250px] h-full bg-[#0B0B0C] border-r border-[#222] flex flex-col">

      {/* Header */}

      <div className="px-7 pt-8 pb-6">

        <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-600">
          FUTURA
        </p>

        <h1 className="mt-3 text-xl font-semibold uppercase tracking-[0.18em] text-zinc-100">
          Mission
        </h1>

        <h1 className="text-xl font-semibold uppercase tracking-[0.18em] text-zinc-100">
          Control
        </h1>

      </div>

      <div className="mx-7 h-px bg-[#222]" />

      {/* Rover */}

      <div className="px-7 py-6">

        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          Rover
        </p>

        <h3 className="mt-2 text-sm tracking-[0.18em] uppercase text-zinc-200">
          KHONS-01
        </h3>

        <div className="mt-4 flex items-center gap-2">

          <div className="w-2 h-2 rounded-full bg-green-500"/>

          <span className="text-xs tracking-[0.18em] uppercase text-zinc-500">
            ONLINE
          </span>

        </div>

      </div>

      <div className="mx-7 h-px bg-[#222]" />

      {/* Navigation */}

      <nav className="flex-1 py-6">

        {menuItems.map(({ icon: Icon, label }, index) => (

          <button
            key={label}
            className={`group relative flex w-full items-center gap-4 px-7 py-3 transition-all duration-200

            ${
              index === 0
                ? "text-white"
                : "text-zinc-500 hover:text-white"
            }`}
          >

            {index === 0 && (
              <div className="absolute left-0 h-6 w-[3px] rounded-r bg-[#B56A2D]" />
            )}

            <Icon
              size={18}
              strokeWidth={1.75}
              className={
                index === 0
                  ? "text-[#B56A2D]"
                  : "group-hover:text-[#B56A2D]"
              }
            />

            <span className="text-sm tracking-wide">
              {label}
            </span>

          </button>

        ))}

      </nav>

      <div className="mx-7 h-px bg-[#222]" />

      {/* Footer */}

      <div className="px-7 py-5">

        <button className="group flex items-center gap-4 text-zinc-500 hover:text-white transition">

          <Settings
            size={18}
            strokeWidth={1.75}
            className="group-hover:text-[#B56A2D]"
          />

          <span className="text-sm">
            Settings
          </span>

        </button>

      </div>

    </aside>
  );
}