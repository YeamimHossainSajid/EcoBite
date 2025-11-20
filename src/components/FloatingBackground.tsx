import { motion } from "motion/react";

export function FloatingBackground() {
  const shapes = [
    { color: "rgba(255, 196, 225, 0.2)", size: 300, delay: 0, x: "10%", y: "20%" },
    { color: "rgba(212, 181, 240, 0.2)", size: 250, delay: 2, x: "80%", y: "60%" },
    { color: "rgba(184, 245, 217, 0.2)", size: 200, delay: 4, x: "20%", y: "70%" },
    { color: "rgba(255, 212, 184, 0.2)", size: 280, delay: 1, x: "70%", y: "10%" },
    { color: "rgba(184, 217, 255, 0.2)", size: 220, delay: 3, x: "50%", y: "50%" },
    { color: "rgba(229, 212, 255, 0.2)", size: 260, delay: 5, x: "90%", y: "30%" },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            backgroundColor: shape.color,
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: "linear-gradient(135deg, #ffc4e1 0%, #d4b5f0 100%)",
          left: "30%",
          top: "40%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
