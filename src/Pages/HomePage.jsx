import { useRef } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.15s ease-out" }}
        className="relative w-full min-h-screen"
      >
        {/* Video background */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_074327_a4d6275d-82d9-4c83-bfbe-f1fb2213c17c.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 text-white">
          <h1 className="text-5xl font-black text-center drop-shadow-lg">
            Generation Thailand
          </h1>
          <Link
            to="/owner"
            className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Go to Owner
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
