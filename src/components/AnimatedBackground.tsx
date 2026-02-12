"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["-20%", "30%", "-20%"],
          y: ["-20%", "40%", "-20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          right: "-10%",
          top: "20%",
        }}
        animate={{
          x: ["0%", "-20%", "0%"],
          y: ["0%", "30%", "0%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          filter: "blur(70px)",
          left: "20%",
          bottom: "-10%",
        }}
        animate={{
          x: ["0%", "40%", "0%"],
          y: ["0%", "-20%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.id % 3 === 0 
              ? "rgba(99,102,241,0.6)" 
              : particle.id % 3 === 1 
                ? "rgba(16,185,129,0.5)" 
                : "rgba(139,92,246,0.5)",
            boxShadow: `0 0 ${particle.size * 2}px ${
              particle.id % 3 === 0 
                ? "rgba(99,102,241,0.4)" 
                : particle.id % 3 === 1 
                  ? "rgba(16,185,129,0.3)" 
                  : "rgba(139,92,246,0.3)"
            }`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated gradient mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <motion.stop
              offset="0%"
              stopColor="rgba(99,102,241,0.3)"
              animate={{ stopOpacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.stop
              offset="50%"
              stopColor="rgba(139,92,246,0.2)"
              animate={{ stopOpacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.stop
              offset="100%"
              stopColor="rgba(16,185,129,0.1)"
              animate={{ stopOpacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </linearGradient>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grad1)"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </svg>

      {/* Pulsing rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-indigo-500/20"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              left: "50%",
              top: "50%",
              marginLeft: -(200 + i * 150) / 2,
              marginTop: -(200 + i * 150) / 2,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
