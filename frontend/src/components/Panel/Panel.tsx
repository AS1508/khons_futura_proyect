import type { ReactNode } from "react";

interface PanelProps {
  title: string;
  children: ReactNode;
  status?: string;
}

export default function Panel({
  title,
  children,
  status,
}: PanelProps) {
  return (
    <div className="bg-[#121212] border border-[#252525] rounded-xl h-full flex flex-col overflow-hidden">

      <div className="h-12 border-b border-[#252525] flex items-center justify-between px-5">

        <h2 className="uppercase tracking-[0.20em] text-xs text-zinc-300">

          {title}

        </h2>

        {status && (
          <span className="text-xs text-zinc-500">

            {status}

          </span>
        )}

      </div>

      <div className="flex-1 p-4">

        {children}

      </div>

    </div>
  );
}