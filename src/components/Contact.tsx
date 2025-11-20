import { motion } from "motion/react";
import { Mail, Github, Linkedin, Youtube, Code2, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "#ffc4e1",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "#b8d9ff",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      color: "#ffd4b8",
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com",
      color: "#b8f5d9",
    },
    {
      name: "Codeforces",
      icon: Code2,
      url: "https://codeforces.com",
      color: "#e5d4ff",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Let's Connect!</span>
          </h2>
          <p className="text-lg opacity-80">I'd love to hear from you ✨</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm opacity-80">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full glass-light rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300 transition-all placeholder:opacity-50"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm opacity-80">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full glass-light rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300 transition-all placeholder:opacity-50"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm opacity-80">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  className="w-full glass-light rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300 transition-all resize-none placeholder:opacity-50"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full glass-strong rounded-2xl px-6 py-4 flex items-center justify-center gap-2 hover:glow-pink transition-all"
                style={{ background: "linear-gradient(135deg, #ffc4e1 0%, #d4b5f0 100%)" }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-pink-400" />
                <h3>Get in Touch</h3>
              </div>
              <p className="opacity-80 mb-6">
                Feel free to reach out for collaborations, questions, or just a friendly chat
                about frontend development and design!
              </p>
              <div className="space-y-3">
                <div className="glass-light rounded-2xl px-4 py-3">
                  <p className="text-sm opacity-70">Email</p>
                  <p>yeamim.sajid@example.com</p>
                </div>
                <div className="glass-light rounded-2xl px-4 py-3">
                  <p className="text-sm opacity-70">Location</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="mb-6">Find me on</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="glass-light rounded-2xl px-4 py-3 flex items-center gap-3 group cursor-pointer"
                  >
                    <div
                      className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${social.color}40` }}
                    >
                      <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    </div>
                    <span className="text-sm group-hover:gradient-text transition-all">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
