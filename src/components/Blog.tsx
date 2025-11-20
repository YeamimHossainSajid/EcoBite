import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Blog() {
  const posts = [
    {
      title: "Empowering Farmers with Direct Buyer Connections",
      preview: "How CBazar is revolutionizing the agricultural marketplace by eliminating middlemen and ensuring fair prices for farmers across Bangladesh.",
      image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjA1OTczMjV8MA&ixlib=rb-4.1.0&q=80&w=400",
      url: "#"
    },
    {
      title: "Building a Flutter App That Talks to Spring Boot",
      preview: "A comprehensive guide to creating seamless integration between Flutter mobile applications and Spring Boot backend services with REST APIs.",
      image: "https://images.unsplash.com/photo-1643546352167-8ba057e8c333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwNjI4NjQ3fDA&ixlib=rb-4.1.0&q=80&w=400",
      url: "#"
    },
    {
      title: "Designing a Scalable Database for Healthcare Systems",
      preview: "Best practices and architectural patterns for building robust, HIPAA-compliant database systems for healthcare applications.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1NDg0OTN8MA&ixlib=rb-4.1.0&q=80&w=400",
      url: "#"
    }
  ];

  return (
    <section id="blog" className="py-16" style={{ backgroundColor: '#0D1117' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '1020px' }}>
        <div className="mb-8">
          <h2 style={{ color: '#C9D1D9', fontSize: '24px' }}>
            Blog & Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden transition-all hover:shadow-lg"
              style={{ 
                backgroundColor: '#161B22',
                border: '1px solid #30363D',
                borderRadius: '8px'
              }}
            >
              <div className="aspect-video overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <ImageWithFallback 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 style={{ 
                  color: '#C9D1D9', 
                  fontSize: '16px', 
                  marginBottom: '8px',
                  lineHeight: '24px'
                }}>
                  {post.title}
                </h3>
                
                <p style={{ 
                  color: '#8B949E', 
                  fontSize: '14px', 
                  lineHeight: '21px',
                  marginBottom: '12px'
                }}>
                  {post.preview}
                </p>
                
                <a 
                  href={post.url}
                  className="inline-flex items-center gap-1 transition-colors hover:underline"
                  style={{ color: '#58A6FF', fontSize: '14px' }}
                >
                  Read More
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
