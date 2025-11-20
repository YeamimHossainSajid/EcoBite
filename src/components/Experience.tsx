import { motion } from "motion/react";
import { Users, Code, Trophy, Heart } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Active Member",
      organization: "UIU Developers Hub",
      period: "2023 - Present",
      icon: Users,
      color: "#ffc4e1",
      achievements: [
        "Collaborated on multiple full-stack web development projects with team members",
        "Participated in weekly coding sessions and tech talks to learn new frameworks",
        "Contributed to open-source projects and helped build community resources",
        "Mentored junior members in frontend development best practices",
      ],
    },
    {
      role: "Frontend Developer",
      organization: "Personal Projects",
      period: "2022 - Present",
      icon: Code,
      color: "#d4b5f0",
      achievements: [
        "Built 15+ responsive websites and web applications from scratch",
        "Mastered modern frontend frameworks including React and Next.js",
        "Implemented complex animations and micro-interactions for enhanced UX",
        "Optimized web performance achieving 95+ Lighthouse scores",
      ],
    },
    {
      role: "Competitive Programmer",
      organization: "LeetCode & Codeforces",
      period: "2021 - Present",
      icon: Trophy,
      color: "#b8f5d9",
      achievements: [
        "Solved 200+ algorithmic problems across various platforms",
        "Achieved rating milestones and improved problem-solving skills",
        "Participated in weekly coding contests and challenges",
        "Applied data structures and algorithms knowledge to real projects",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Experience & Journey</span>
          </h2>
          <p className="text-lg opacity-80">My path in frontend development</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 glass-light rounded-full -ml-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`lg:flex lg:gap-8 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
              >
                <div className="lg:flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-3xl p-6 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${exp.color}40` }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <exp.icon className="w-7 h-7" style={{ color: exp.color }} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="mb-1 group-hover:gradient-text transition-all">
                          {exp.role}
                        </h3>
                        <p className="text-sm opacity-80 mb-1">{exp.organization}</p>
                        <p className="text-xs opacity-60">{exp.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                          className="text-sm opacity-80 flex gap-2"
                        >
                          <span className="text-pink-400 flex-shrink-0">✦</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center relative">
                  <motion.div
                    className="w-6 h-6 rounded-full glass-strong z-10"
                    style={{ backgroundColor: exp.color }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: exp.color }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div className="hidden lg:block lg:flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special UIU Hub Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 glass-strong rounded-3xl p-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Heart className="w-12 h-12 text-pink-400" fill="currentColor" />
          </motion.div>
          <h3 className="gradient-text mb-3">Proud Member of UIU Developers Hub</h3>
          <p className="opacity-80 max-w-2xl mx-auto">
            Being part of this amazing community has been instrumental in my growth as a developer.
            I've learned so much from collaborating with talented peers, working on real-world projects,
            and staying updated with the latest frontend technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
