import { useMemo } from "react";

// Animated audio-bar visualizer, styled after a rounded soundwave icon.
// Drop <AudioVisualizer /> anywhere. Customize via props.

export default function AudioVisualizer({
  bars = 5,
  color = "#111111",
  height = 80,
  barWidth = 10,
  gap = 10,
  speed = 1,
  active = true,
}) {
  // Give each bar its own random-ish timing so they don't move in lockstep.
  const config = useMemo(() => {
    return Array.from({ length: bars }, (_, i) => {
      const duration = (0.6 + Math.random() * 0.5) / speed;
      const delay = -Math.random() * duration;
      const minScale = 0.15 + Math.random() * 0.15;
      return { id: i, duration, delay, minScale };
    });
  }, [bars, speed]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${gap}px`,
        height: `${height}px`,
      }}
    >
      <style>{`
        @keyframes bar-bounce {
          0%, 100% { transform: scaleY(var(--min-scale)); }
          50% { transform: scaleY(1); }
        }
        .visualizer-bar {
          border-radius: 999px;
          transform-origin: center;
          animation: bar-bounce var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          animation-play-state: var(--play-state);
        }
      `}</style>

      {config.map(({ id, duration, delay, minScale }) => (
        <div
          key={id}
          className="visualizer-bar"
          style={{
            width: `${barWidth}px`,
            height: `${height}px`,
            backgroundColor: color,
            "--duration": `${duration}s`,
            "--delay": `${delay}s`,
            "--min-scale": minScale,
            "--play-state": active ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}