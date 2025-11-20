import { Code2, Database, Server, Smartphone, Container, Flame } from "lucide-react";

export function About() {
  const skills = [
    { name: "Flutter", icon: Smartphone, color: "#58A6FF" },
    { name: "Java", icon: Code2, color: "#A371F7" },
    { name: "Spring Boot", icon: Server, color: "#3FB950" },
    { name: "MySQL", icon: Database, color: "#58A6FF" },
    { name: "Firebase", icon: Flame, color: "#A371F7" },
    { name: "Docker", icon: Container, color: "#58A6FF" }
  ];

  return (
    <section id="about" className="py-16" style={{ backgroundColor: '#0D1117' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '1020px' }}>
        <div className="mb-8">
          <h2 style={{ color: '#C9D1D9', fontSize: '24px', marginBottom: '8px' }}>
            About Me
          </h2>
          <p style={{ color: '#8B949E', fontSize: '16px' }}>
            Who I Am and What I Do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Bio */}
          <div>
            <p style={{ color: '#C9D1D9', fontSize: '16px', lineHeight: '24px' }}>
              I'm passionate about building full-stack applications using Flutter and Spring Boot. 
              I love solving real-world problems and creating impactful digital experiences.
            </p>
            <p style={{ color: '#C9D1D9', fontSize: '16px', lineHeight: '24px', marginTop: '16px' }}>
              With a strong foundation in both mobile and backend development, I specialize in 
              creating seamless, scalable applications that connect people and solve meaningful problems. 
              My work focuses on delivering robust solutions with modern technologies.
            </p>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg transition-all hover:scale-105"
                style={{ 
                  backgroundColor: '#161B22',
                  border: '1px solid #30363D'
                }}
              >
                <skill.icon size={32} style={{ color: skill.color, marginBottom: '8px' }} />
                <span style={{ color: '#C9D1D9', fontSize: '14px' }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <p style={{ 
            color: '#8B949E', 
            fontSize: '18px',
            fontStyle: 'italic'
          }}>
            "Code. Build. Solve. Repeat."
          </p>
        </div>
      </div>
    </section>
  );
}
