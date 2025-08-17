import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.svg";
import "./Moon.css";
import Footer from "../Footer";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 200;
    const maxStarSize = 2;
    const maxSpeed = 0.05;

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

        // Move star slowly for drift effect
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Twinkle effect
        star.opacity += star.twinkle;
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.twinkle *= -1;
        }
      });
      requestAnimationFrame(drawStars);
    };

    resize();
    drawStars();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <section
        className="w-full h-screen text-white flex items-center justify-center
                 bg-gradient-to-b from-[#001b38] to-[#000b1a] relative overflow-hidden"
      >
        {/* Stars Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        ></canvas>

        {/* Moon */}
        <div className="orb-block">
          <div className="orb-container">
            <div className="orb">
              <div className="orb-core"></div>
              <div className="energy-ring"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center px-6 max-w-lg relative z-10">
          <img
            src={logo}
            loading="lazy"
            alt="SecurityPal AI Logo"
            className="mx-auto"
          />

          <form method="POST" className="w-full relative mt-6">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <div className="relative w-full">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email Address"
                autoComplete="off"
                spellCheck="false"
                className="w-full rounded-lg bg-black/20 backdrop-blur-lg
           text-white placeholder-gray-300
           px-4 pr-[130px] py-4
           text-sm font-normal font-sans
           tracking-tight leading-tight
           outline-none focus:outline-2 focus:outline-offset-2 focus:outline-[#01b29a]
           border-none shadow-inner"
                required
              />
              <button
                type="submit"
                className="absolute top-1.5 right-1.5 bottom-1.5 w-[120px]
                         rounded-sm bg-gray-100 text-gray-900 font-medium text-sm
                         cursor-pointer"
              >
                Get Updates
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer part */}
      <Footer />
    </>
  );
};

export default HeroSection;