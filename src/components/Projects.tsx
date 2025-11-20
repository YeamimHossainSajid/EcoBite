import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Modern Dashboard App",
      description: "A sleek, responsive admin dashboard with real-time analytics, data visualization, and user management features.",
      image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMDIwNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      gradient: "linear-gradient(135deg, #ffc4e1 0%, #d4b5f0 100%)",
    },
    {
      title: "Mobile-First E-Commerce",
      description: "Beautiful shopping experience with smooth animations, cart management, and seamless checkout flow.",
      image: "https://images.unsplash.com/photo-1632435515745-564cf6e7d10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjIwMjA0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "Framer Motion", "Redux"],
      gradient: "linear-gradient(135deg, #b8f5d9 0%, #b8d9ff 100%)",
    },
    {
      title: "Portfolio Website Builder",
      description: "Interactive tool for creating stunning portfolio websites with drag-and-drop functionality and live preview.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTkzOTIwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "DnD", "CSS Grid"],
      gradient: "linear-gradient(135deg, #ffd4b8 0%, #ffc4e1 100%)",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg opacity-80">Some of my recent creative work</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  style={{ background: project.gradient }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  className="absolute top-4 right-4 glass rounded-full p-2 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 group-hover:gradient-text transition-all">{project.title}</h3>
                <p className="text-sm opacity-80 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-light rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 glass-strong rounded-full px-4 py-2 flex items-center justify-center gap-2 text-sm hover:glow-pink transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 glass-strong rounded-full px-4 py-2 flex items-center justify-center gap-2 text-sm hover:glow-lilac transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-strong rounded-full px-8 py-4 hover:glow-mint transition-all"
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
