import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProfileOverview() {
  return (
    <section id="overview" className="py-16" style={{ backgroundColor: '#0D1117' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '1020px' }}>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
          {/* Left Column - Avatar and Stats */}
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="w-[296px] h-[296px] mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NDAzOTZ8MA&ixlib=rb-4.1.0&q=80&w=400" />
              <AvatarFallback style={{ backgroundColor: '#161B22', color: '#C9D1D9' }}>YS</AvatarFallback>
            </Avatar>
            
            {/* Stats */}
            <div className="flex gap-4 mt-2" style={{ color: '#8B949E' }}>
              <div className="flex items-center gap-1">
                <span style={{ color: '#C9D1D9' }}>234</span> followers
              </div>
              <div className="flex items-center gap-1">
                <span style={{ color: '#C9D1D9' }}>89</span> following
              </div>
            </div>
          </div>

          {/* Right Column - Profile Info */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 style={{ color: '#C9D1D9', fontSize: '26px', marginBottom: '4px' }}>
                Yeamim Hossain Sajid
              </h1>
              <div style={{ color: '#8B949E', fontSize: '20px', marginBottom: '16px' }}>
                @YeamimHossainSajid
              </div>
            </div>

            <p style={{ color: '#C9D1D9', fontSize: '16px', lineHeight: '24px' }}>
              Full Stack Developer | Flutter & Spring Boot Enthusiast | Building Scalable Apps.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2" style={{ color: '#C9D1D9' }}>
                <MapPin size={16} style={{ color: '#8B949E' }} />
                <span>Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} style={{ color: '#8B949E' }} />
                <a href="mailto:contact@yeamim.dev" style={{ color: '#58A6FF' }} className="hover:underline">
                  contact@yeamim.dev
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#8B949E' }}
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#8B949E' }}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#8B949E' }}
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-2">
              <Button 
                size="sm"
                style={{ 
                  backgroundColor: '#161B22',
                  color: '#C9D1D9',
                  border: '1px solid #30363D',
                  borderRadius: '8px',
                  padding: '5px 16px'
                }}
              >
                Follow
              </Button>
              <Button 
                size="sm"
                style={{ 
                  backgroundColor: '#161B22',
                  color: '#C9D1D9',
                  border: '1px solid #30363D',
                  borderRadius: '8px',
                  padding: '5px 16px'
                }}
              >
                Sponsor
              </Button>
              <Button 
                size="sm"
                style={{ 
                  backgroundColor: '#161B22',
                  color: '#C9D1D9',
                  border: '1px solid #30363D',
                  borderRadius: '8px',
                  padding: '5px 16px'
                }}
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
