import { Trophy, Code, Rocket, GraduationCap } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Best DBMS Project 2025 Winner",
      description: "Awarded for creating an innovative database management solution for healthcare systems.",
      color: "#A371F7"
    },
    {
      icon: Code,
      title: "Solved 250+ LeetCode Problems",
      description: "Demonstrated strong problem-solving skills and algorithmic thinking.",
      color: "#3FB950"
    },
    {
      icon: Rocket,
      title: "Top 10% Flutter Developer on GitHub",
      description: "Recognized for contributions to Flutter open-source projects and community.",
      color: "#58A6FF"
    },
    {
      icon: GraduationCap,
      title: "Bachelor of Science in CSE",
      description: "Computer Science and Engineering degree with focus on software development.",
      color: "#A371F7"
    }
  ];

  return (
    <section id="achievements" className="py-16" style={{ backgroundColor: '#0D1117' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '1020px' }}>
        <div className="mb-8">
          <h2 style={{ color: '#C9D1D9', fontSize: '24px' }}>
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg transition-all hover:shadow-lg"
              style={{ 
                backgroundColor: '#161B22',
                border: '1px solid #30363D',
                borderRadius: '8px'
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ 
                    backgroundColor: '#0D1117',
                    border: '1px solid #30363D'
                  }}
                >
                  <achievement.icon size={24} style={{ color: achievement.color }} />
                </div>
                <div className="flex-1">
                  <h3 style={{ color: '#C9D1D9', fontSize: '16px', marginBottom: '8px' }}>
                    {achievement.title}
                  </h3>
                  <p style={{ color: '#8B949E', fontSize: '14px', lineHeight: '21px' }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
