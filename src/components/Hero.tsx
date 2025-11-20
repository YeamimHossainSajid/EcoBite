import { motion } from "motion/react";
import { Download, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 rounded-full animate-pulse-glow glow-pink" />
          <div className="relative w-40 h-40 rounded-full overflow-hidden glass-strong p-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1681887001651-a15c749c1ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMDIwMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Yeamim Hossain Sajid"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <motion.div
            className="absolute -top-2 -right-2 glass rounded-full p-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-pink-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl mb-6"
        >
          <span className="gradient-text">Yeamim Hossain Sajid</span>
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 mb-8 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            ✨ Frontend Developer & Creative Enthusiast
          </p>
          <p className="opacity-90">
            Passionate about crafting beautiful, interactive web experiences with modern technologies.
            Currently contributing to innovative projects as a proud member of{" "}
            <span className="gradient-text font-semibold">UIU Developers Hub</span>, where I collaborate
            with talented developers and continuously learn cutting-edge frontend skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 196, 225, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="glass-strong rounded-full px-8 py-4 flex items-center gap-2 group"
            style={{ background: "linear-gradient(135deg, #ffc4e1 0%, #d4b5f0 100%)" }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-strong rounded-full px-8 py-4 hover:glow-lilac transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-6 h-10 rounded-full glass border-2 border-white/50 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-pink-400 to-purple-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
