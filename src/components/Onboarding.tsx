import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Leaf, Sprout, Tractor, CloudRain, BarChart3, ArrowRight, Zap, Sparkles, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const features = [
    {
      icon: <Sprout className="h-6 w-6 text-green-500" />,
      title: "Smart Crop Monitoring",
      description: "Real-time tracking of crop health, growth stages, and potential issues using AI-powered image analysis"
    },
    {
      icon: <CloudRain className="h-6 w-6 text-blue-500" />,
      title: "Weather & Irrigation Analytics",
      description: "Optimize water usage with smart irrigation recommendations based on weather forecasts and soil moisture"
    },
    {
      icon: <Tractor className="h-6 w-6 text-orange-500" />,
      title: "Equipment & Resource Tracking",
      description: "Monitor farm equipment usage, maintenance schedules, and resource allocation for maximum efficiency"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
      title: "Yield Prediction & Analytics",
      description: "Accurate yield forecasts and performance analytics to help you plan harvests and maximize profits"
    },
    {
      icon: <Leaf className="h-6 w-6 text-emerald-500" />,
      title: "Sustainable Farming Practices",
      description: "Get recommendations for eco-friendly farming methods that reduce environmental impact"
    }
  ];

  const stats = [
    { number: '25K+', label: 'Farmers Joined', icon: <Users className="h-5 w-5" /> },
    { number: '1M+', label: 'Acres Monitored', icon: <Leaf className="h-5 w-5" /> },
    { number: '30%', label: 'Average Yield Increase', icon: <TrendingUp className="h-5 w-5" /> },
    { number: '50%', label: 'Water Savings', icon: <CloudRain className="h-5 w-5" /> }
  ];

  const steps = [
    {
      number: '1',
      title: 'Setup Your Farm Profile',
      description: 'Add your farm details, crop types, and land area to get personalized recommendations',
      icon: <Leaf className="h-5 w-5" />
    },
    {
      number: '2',
      title: 'Connect Sensors & Devices',
      description: 'Integrate weather stations, soil sensors, and IoT devices for real-time data collection',
      icon: <Zap className="h-5 w-5" />
    },
    {
      number: '3',
      title: 'Get AI-Powered Insights',
      description: 'Receive actionable insights on crop health, irrigation, pest control, and harvest timing',
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      number: '4',
      title: 'Optimize Your Operations',
      description: 'Implement recommendations to increase yields, reduce costs, and improve sustainability',
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-100/50 via-emerald-50/30 to-lime-100/50 rounded-3xl blur-3xl"></div>

        <div className="space-y-3 animate-in fade-in-50 duration-700">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl shadow-lg">
              <Leaf className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent leading-tight">
            Welcome to FarmSmart
          </h1>
          <Badge 
            variant="secondary"
            className="text-sm px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-0 shadow-lg"
          >
            <Sparkles className="w-4 h-4 mr-1" />
            The Future of Smart Farming
          </Badge>
        </div>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700">
          Transform your farming operations with AI-powered insights. Monitor crops, optimize resources, 
          and increase yields with our comprehensive farm management platform designed for modern agriculture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 animate-in slide-in-from-bottom-4 duration-1000">
          <Button 
            size="lg" 
            onClick={onComplete} 
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 text-lg border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 max-w-lg mx-auto shadow-lg animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3 text-green-800 mb-2">
            <div className="p-1 bg-green-500 rounded-full">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">Join 25,000+ Farmers Worldwide</span>
          </div>
          <p className="text-sm text-green-700">
            Start optimizing your farm operations today
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <Card className="p-8 bg-gradient-to-r from-white to-green-50/30 border-0 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white group-hover:shadow-lg transition-shadow duration-300">
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{stat.number}</span>
              </div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Features Section */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Powerful Farming Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your farm efficiently and sustainably
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl group-hover:from-green-200 group-hover:to-emerald-200 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <Card className="p-12 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 border-0 shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Get Started in 4 Easy Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of farmers already transforming their operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-emerald-200 -translate-x-4"></div>
                )}
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* CTA Section */}
      <Card className="p-12 text-center bg-gradient-to-br from-green-600/5 via-emerald-600/5 to-teal-600/5 border-0 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-emerald-100/20 to-teal-100/20 -z-10"></div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent mb-4">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of farmers who have increased their yields, reduced costs, and adopted 
              sustainable practices with FarmSmart. Start your journey toward smarter farming today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              onClick={onComplete} 
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Create Your Account
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-4 text-lg border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 transition-all duration-300"
            >
              Contact Support
            </Button>
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-amber-600 mb-2">
              <span className="text-lg">🌱</span>
              <span className="font-medium">Sustainable Farming for Future Generations</span>
            </div>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Every innovation in farming contributes to a more sustainable future. Join us in creating 
              a world where technology and tradition work together to feed our growing population.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}