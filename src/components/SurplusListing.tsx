import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Camera, Clock, MapPin, Tag, Upload, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SurplusListingProps {
  user: any;
  onBack: () => void;
}

export function SurplusListing({ user, onBack }: SurplusListingProps) {
  const [step, setStep] = useState<'list' | 'create' | 'success'>('list');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#C1E2BE' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl text-green-900 mb-2">Success!</h2>
            <p className="text-green-700">Your surplus listing is now live</p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (step === 'create') {
    return (
      <div className="min-h-screen pb-20" style={{ backgroundColor: '#C1E2BE' }}>
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setStep('list')}
              className="bg-transparent hover:bg-green-100 text-green-800 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl text-green-900">Create Listing</h1>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pt-6 space-y-6">
          {/* Photo Upload */}
          <div>
            <Label className="text-green-800">Photos</Label>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-white/70 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-green-300 shadow-md"
              >
                <Camera className="w-8 h-8 text-green-600 mb-1" />
                <span className="text-xs text-green-600">Add Photo</span>
              </motion.div>
            </div>
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title" className="text-green-800">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Fresh Vegetables"
              className="mt-1 bg-white/70 border-green-300 rounded-xl"
              required
            />
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category" className="text-green-800">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="mt-1 bg-white/70 border-green-300 rounded-xl">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="fruits">Fruits</SelectItem>
                <SelectItem value="bread">Bread & Bakery</SelectItem>
                <SelectItem value="cooked">Cooked Food</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-green-800">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the food item..."
              className="mt-1 bg-white/70 border-green-300 rounded-xl min-h-24"
              required
            />
          </div>

          {/* Pickup Time */}
          <div>
            <Label htmlFor="pickup" className="text-green-800">Pickup Time</Label>
            <div className="relative mt-1">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
              <Input
                id="pickup"
                type="datetime-local"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="pl-10 bg-white/70 border-green-300 rounded-xl"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <Label className="text-green-800">Pickup Location</Label>
            <div className="mt-1 bg-white/70 backdrop-blur-sm border border-green-300 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-700">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Use current location</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-6"
          >
            Post Listing
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: '#C1E2BE' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <Button
            onClick={onBack}
            className="bg-transparent hover:bg-green-100 text-green-800 p-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl text-green-900">Surplus Food</h1>
        </div>
      </div>

      {/* Create Button */}
      <div className="px-6 pt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setStep('create')}
          className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl p-5 shadow-lg flex items-center justify-between"
        >
          <span className="text-lg">Post New Surplus</span>
          <Upload className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Nearby Listings */}
      <div className="px-6 pt-6">
        <h2 className="text-lg mb-4 text-green-900">Nearby Surplus Food</h2>
        
        <div className="space-y-3">
          {[
            { title: 'Fresh Tomatoes & Cucumbers', user: 'Sarah Martinez', distance: '0.3 km', time: '2h ago', category: 'Vegetables', image: '🍅' },
            { title: 'Whole Wheat Bread', user: 'Green Bakery', distance: '0.5 km', time: '30m ago', category: 'Bakery', image: '🥖' },
            { title: 'Cooked Biryani (5 portions)', user: 'Spice Palace Restaurant', distance: '0.8 km', time: '1h ago', category: 'Cooked', image: '🍚' },
            { title: 'Fresh Apples', user: 'John\'s Orchard', distance: '1.2 km', time: '4h ago', category: 'Fruits', image: '🍎' },
            { title: 'Dairy Products', user: 'Local Dairy', distance: '1.5 km', time: '3h ago', category: 'Dairy', image: '🥛' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md"
            >
              <div className="flex gap-4">
                <div className="text-5xl">{item.image}</div>
                <div className="flex-1">
                  <h3 className="text-green-900 mb-1">{item.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-green-600">
                    <span>{item.user}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.distance}
                    </span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white rounded-xl">
                Request Pickup
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}