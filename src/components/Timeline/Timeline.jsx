import { useEffect, useRef } from "react";

const timelineData = [
  {
    color: "#00ff9d",
    pulseColor: "rgba(0, 255, 157, 0.3)",
    year: "Discovery workshops",
    status: "Complete",
  },
  {
    color: "#00eaff",
    pulseColor: "rgba(0, 234, 255, 0.3)",
    year: "MVP engineering",
    status: "In progress",
    active: true,
  },
  {
    color: "#009dff",
    pulseColor: "rgba(0, 157, 255, 0.3)",
    year: "Closed beta",
    status: "Sept 2025",
  },
  {
    color: "#b33cff",
    pulseColor: "rgba(179, 60, 255, 0.3)",
    year: "Public launch",
    status: "Q1 2026",
  },
];

const Timeline = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 200;
    const maxStarSize = 2;
    const maxSpeed = 0.05;
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * maxStarSize,
          speed: Math.random() * maxSpeed + 0.01,
          opacity: Math.random(),
          twinkle: Math.random() * 0.05,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move star
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Twinkle
        star.opacity += star.twinkle;
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.twinkle *= -1;
        }
      });
      animationFrameId = requestAnimationFrame(drawStars);
    };

    resize();
    drawStars();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="w-full h-screen text-white flex flex-col items-center justify-center
                 bg-gradient-to-b from-[#001b38] to-[#000b1a] relative overflow-hidden"
    >
      {/* Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>

      {/* Title */}
      <div className="p-6 rounded-2xl text-center relative z-10">
        <h1 className="text-3xl font-bold text-white mb-4 ">
          Aryal Teschnologies
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Here’s our journey from initial discovery to public launch, showing each milestone.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-11/12 mx-auto mt-12 flex justify-between items-start z-10">
        {/* Timeline line */}
        <div className="absolute top-20 left-0 w-full h-0.5 bg-gray-700"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative text-center flex flex-col items-center"
          >
            {/* Pulse icon */}
            <div className="relative w-5 h-5 rounded-full mb-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: item.pulseColor,
                    animationDelay: `${i * 0.5}s`,
                  }}
                  className="absolute inset-0 rounded-full animate-pulse-ring"
                ></span>
              ))}
              <div
                style={{ backgroundColor: item.color }}
                className="absolute inset-0 rounded-full z-10"
              ></div>
            </div>

            {/* Year */}
            <div
              className={`mt-2 text-white ${
                item.active ? "opacity-100 font-bold" : "opacity-60"
              }`}
            >
              {item.year}
            </div>

            {/* Status */}
            <div
              className={`mt-10 max-w-xs text-white text-sm ${
                item.active ? "opacity-100" : "opacity-50"
              }`}
            >
              <h3>{item.status}</h3>
            </div>
          </div>
        ))}

        {/* Tailwind custom animation */}
        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.3; }
            100% { transform: scale(8); opacity: 0; }
          }
          .animate-pulse-ring {
            animation: pulse-ring 4s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Timeline;
