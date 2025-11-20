import { motion } from "motion/react";
import { Code2, Palette, Zap, Layers, Smartphone, Database } from "lucide-react";

export function Skills() {
  const skills = [
    { name: "HTML", icon: Code2, color: "#ffc4e1", level: 95 },
    { name: "CSS", icon: Palette, color: "#d4b5f0", level: 92 },
    { name: "JavaScript", icon: Zap, color: "#ffd4b8", level: 90 },
    { name: "React", icon: Layers, color: "#b8d9ff", level: 88 },
    { name: "Next.js", icon: Smartphone, color: "#b8f5d9", level: 85 },
    { name: "Tailwind CSS", icon: Palette, color: "#e5d4ff", level: 90 },
    { name: "TypeScript", icon: Code2, color: "#ffc4e1", level: 82 },
    { name: "Git", icon: Database, color: "#d4b5f0", level: 87 },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg opacity-80">Technologies I love working with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-3xl p-6 text-center group cursor-pointer"
            >
              <motion.div
                className="w-20 h-20 rounded-full glass-strong mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${skill.color}40` }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
              </motion.div>
              
              <h3 className="mb-3">{skill.name}</h3>
              
              <div className="w-full glass-light rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                />
              </div>
              
              <motion.p 
                className="text-sm mt-2 opacity-70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {skill.level}%
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 glass-strong rounded-3xl p-8"
        >
          <h3 className="text-center mb-6 gradient-text">Also familiar with</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Figma", "Redux", "REST APIs", "Responsive Design", "Framer Motion", "Vite", "Webpack", "Sass"].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass rounded-full px-5 py-2 text-sm cursor-pointer hover:glow-pink transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
