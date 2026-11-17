interface Props {
  value: number;
}

export default function ProgressBar({ value }: Props) {
  const totalBlocks = 16;
  const activeBlocks = Math.round((value / 100) * totalBlocks);

  return (
    <div className="flex items-center gap-[3px] mt-2">

      {Array.from({ length: totalBlocks }).map((_, index) => (
        <div
          key={index}
          className={`
            h-[5px]
            flex-1
            rounded-sm
            transition-all
            duration-300
          `}
          style={{
            background:
              index < activeBlocks
                ? "#B56A2D"
                : "#262626",
          }}
        />
      ))}

    </div>
  );
}