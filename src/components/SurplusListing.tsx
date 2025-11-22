import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin, Upload, CheckCircle, Edit, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SurplusListingProps {
  user: any;
  onBack: () => void;
}

interface Listing {
  id: string;
  title: string;
  description: string;
  category: string;
  pickupTime: string;
  createdAt: string;
  user: string;
  distance: string;
  image: string;
}

const STORAGE_KEY = 'surplusListings';

const categoryMap: Record<string, string> = {
  vegetables: 'Vegetables',
  fruits: 'Fruits',
  bread: 'Bakery',
  cooked: 'Cooked',
  dairy: 'Dairy',
  other: 'Other'
};

const categoryEmoji: Record<string, string> = {
  vegetables: '🍅',
  fruits: '🍎',
  bread: '🥖',
  cooked: '🍚',
  dairy: '🥛',
  other: '🥘'
};

export function SurplusListing({ user, onBack }: SurplusListingProps) {
  const [step, setStep] = useState<'list' | 'create' | 'edit' | 'success'>('list');
  const [listings, setListings] = useState<Listing[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  // Load listings from localStorage
  useEffect(() => {
    const savedListings = localStorage.getItem(STORAGE_KEY);
    if (savedListings) {
      setListings(JSON.parse(savedListings));
    } else {
      // Initialize with default listings
      const defaultListings: Listing[] = [
        { id: '1', title: 'Fresh Tomatoes & Cucumbers', user: 'Sarah Martinez', distance: '0.3 km', createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), category: 'vegetables', description: 'Fresh vegetables from garden', pickupTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), image: '🍅' },
        { id: '2', title: 'Whole Wheat Bread', user: 'Green Bakery', distance: '0.5 km', createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), category: 'bread', description: 'Freshly baked whole wheat bread', pickupTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(), image: '🥖' },
        { id: '3', title: 'Cooked Biryani (5 portions)', user: 'Spice Palace Restaurant', distance: '0.8 km', createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(), category: 'cooked', description: 'Delicious biryani, freshly prepared', pickupTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), image: '🍚' },
        { id: '4', title: 'Fresh Apples', user: 'John\'s Orchard', distance: '1.2 km', createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), category: 'fruits', description: 'Organic fresh apples', pickupTime: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(), image: '🍎' },
        { id: '5', title: 'Dairy Products', user: 'Local Dairy', distance: '1.5 km', createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), category: 'dairy', description: 'Fresh dairy products', pickupTime: new Date(Date.now() + 36 * 60 * 60 * 1000).toISOString(), image: '🥛' },
      ];
      setListings(defaultListings);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultListings));
    }
  }, []);

  // Save listings to localStorage
  const saveListings = (newListings: Listing[]) => {
    setListings(newListings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newListings));
  };

  // Format time ago
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  // Create new listing
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert datetime-local to ISO string
    const pickupTimeISO = pickupTime ? new Date(pickupTime).toISOString() : new Date().toISOString();
    const newListing: Listing = {
      id: Date.now().toString(),
      title,
      description,
      category,
      pickupTime: pickupTimeISO,
      createdAt: new Date().toISOString(),
      user: user?.name || 'You',
      distance: '0.0 km',
      image: categoryEmoji[category] || '🥘'
    };
    saveListings([newListing, ...listings]);
    resetForm();
    setStep('success');
    setTimeout(() => {
      setStep('list');
    }, 2000);
  };

  // Update existing listing
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    
    // Convert datetime-local to ISO string
    const pickupTimeISO = pickupTime ? new Date(pickupTime).toISOString() : new Date().toISOString();
    const updatedListings = listings.map(listing =>
      listing.id === editingId
        ? { ...listing, title, description, category, pickupTime: pickupTimeISO, image: categoryEmoji[category] || '🥘' }
        : listing
    );
    saveListings(updatedListings);
    resetForm();
    setEditingId(null);
    setStep('success');
    setTimeout(() => {
      setStep('list');
    }, 2000);
  };

  // Delete listing
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      const updatedListings = listings.filter(listing => listing.id !== id);
      saveListings(updatedListings);
    }
  };

  // Start editing
  const handleEdit = (listing: Listing) => {
    setEditingId(listing.id);
    setTitle(listing.title);
    setDescription(listing.description);
    setCategory(listing.category);
    // Convert ISO string to datetime-local format (YYYY-MM-DDTHH:mm)
    const date = new Date(listing.pickupTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    setPickupTime(`${year}-${month}-${day}T${hours}:${minutes}`);
    setStep('edit');
  };

  // Reset form
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setPickupTime('');
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (step === 'edit') {
      handleUpdate(e);
    } else {
      handleCreate(e);
    }
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

  if (step === 'create' || step === 'edit') {
    return (
      <div className="min-h-screen pb-20" style={{ backgroundColor: '#C1E2BE' }}>
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                setStep('list');
                resetForm();
              }}
              className="bg-transparent hover:bg-green-100 text-green-800 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl text-green-900">{step === 'edit' ? 'Edit Listing' : 'Create Listing'}</h1>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pt-6 space-y-6">
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
            {step === 'edit' ? 'Update Listing' : 'Post Listing'}
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
          {listings.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md"
            >
              <div className="flex gap-4">
                <div className="text-5xl">{item.image}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-green-900">{item.title}</h3>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleEdit(item)}
                        className="bg-transparent hover:bg-green-100 text-green-700 p-1.5 h-auto rounded-full"
                        size="sm"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(item.id)}
                        className="bg-transparent hover:bg-red-100 text-red-600 p-1.5 h-auto rounded-full"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {categoryMap[item.category] || item.category}
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
                    <span>{getTimeAgo(item.createdAt)}</span>
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