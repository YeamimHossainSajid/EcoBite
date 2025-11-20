import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Leaf, Users, Store, Heart, Recycle, TrendingUp, ArrowRight, Zap, Sparkles, CheckCircle, Clock } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Household Food Sharing",
      description: "List your surplus food and connect with neighbors who need it",
      bgColor: "bg-emerald-500"
    },
    {
      icon: <Store className="h-6 w-6 text-white" />,
      title: "Business Surplus",
      description: "Shops and restaurants offer discounted food before it goes to waste",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "NGO Donations",
      description: "Connect with NGOs to feed those in need in your community",
      bgColor: "bg-rose-500"
    },
    {
      icon: <Recycle className="h-6 w-6 text-white" />,
      title: "Bio-Transformation",
      description: "Food waste becomes compost, mushrooms, and insect protein",
      bgColor: "bg-violet-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Progress Tracking",
      description: "Monitor your impact with detailed analytics and insights",
      bgColor: "bg-amber-500"
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users', icon: <Users className="h-5 w-5 text-emerald-600" /> },
    { number: '50K+', label: 'Meals Shared', icon: <Heart className="h-5 w-5 text-emerald-600" /> },
    { number: '95%', label: 'Waste Reduced', icon: <CheckCircle className="h-5 w-5 text-emerald-600" /> },
    { number: '<2min', label: 'First Listing', icon: <Clock className="h-5 w-5 text-emerald-600" /> }
  ];

  const steps = [
    {
      number: '1',
      title: 'List Your Surplus',
      description: 'Share food you won\'t use from your home or business',
      icon: <Leaf className="h-5 w-5 text-white" />
    },
    {
      number: '2',
      title: 'Connect & Share',
      description: 'Match with neighbors, NGOs, or businesses in need',
      icon: <Users className="h-5 w-5 text-white" />
    },
    {
      number: '3',
      title: 'Track Impact',
      description: 'See how much waste you\'ve prevented and lives you\'ve helped',
      icon: <Zap className="h-5 w-5 text-white" />
    },
    {
      number: '4',
      title: 'Earn Rewards',
      description: 'Get points and recognition for your contributions',
      icon: <TrendingUp className="h-5 w-5 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="space-y-6 animate-in fade-in-50 duration-700 pt-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-100 rounded-2xl">
                <div className="bg-emerald-600 p-3 rounded-xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Welcome to FoodFlow
              </h1>
              <Badge 
                className="text-sm px-4 py-2 bg-emerald-100 text-emerald-700 border-0 font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                The Circular Food Solution
              </Badge>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom-4 duration-700">
            Transform food surplus into sustainable solutions. Connect households, businesses, 
            and communities to build a circular food economy that reduces waste and nourishes people.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-in slide-in-from-bottom-4 duration-1000">
            <Button 
              size="lg" 
              onClick={onComplete} 
              className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold rounded-2xl"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700 transition-all duration-300 font-medium rounded-2xl"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 max-w-md mx-auto shadow-sm animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 text-emerald-700 mb-2">
              <div className="p-1 bg-emerald-500 rounded-full">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">Join 10,000+ Food Heroes</span>
            </div>
            <p className="text-sm text-emerald-600">
              Start making a difference in your community today
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <Card className="p-8 bg-white border border-gray-200 shadow-sm rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600 group-hover:shadow-md transition-all duration-300">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{stat.number}</span>
                </div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Features Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              How FoodFlow Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Our complete system for reducing food waste and helping communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-200 rounded-2xl group"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 ${feature.bgColor} rounded-2xl text-white shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-light">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <Card className="p-12 bg-emerald-50 border border-emerald-100 rounded-3xl shadow-sm">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Get Started in 4 Easy Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Join our circular food movement and start making an impact immediately
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-2xl mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <span className="text-lg font-semibold">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-emerald-200 -translate-x-4"></div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-12 text-center bg-gray-50 border border-gray-200 rounded-3xl shadow-sm">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                Ready to Make a Difference?
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-light">
                Join thousands of users already reducing food waste, helping their communities, 
                and building a more sustainable future. Start your FoodFlow journey today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={onComplete} 
                className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold rounded-2xl"
              >
                Create Your Account
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-10 py-4 text-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 text-gray-700 transition-all duration-300 font-medium rounded-2xl"
              >
                Contact Support
              </Button>
            </div>
            
            <div className="pt-8 border-t border-gray-300">
              <div className="flex items-center justify-center gap-3 text-emerald-600 mb-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="font-semibold">Together We Can End Food Waste</span>
              </div>
              <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                Every small action contributes to a larger impact. Join us in creating a world where no food goes to waste and every community thrives.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}