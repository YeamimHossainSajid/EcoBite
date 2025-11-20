import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Calendar, Clock, CheckCircle, Download, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface NGODonationProps {
  user: any;
  onBack: () => void;
}

export function NGODonation({ user, onBack }: NGODonationProps) {
  const [screen, setScreen] = useState<'main' | 'create' | 'schedule' | 'tracking' | 'receipt'>('main');

  const ngoList = [
    { name: 'Hope Foundation', distance: '1.2 km', available: true, capacity: '50 meals', rating: 4.8 },
    { name: 'Community Kitchen', distance: '2.5 km', available: true, capacity: '100 meals', rating: 4.9 },
    { name: 'Food for All', distance: '3.8 km', available: false, capacity: '75 meals', rating: 4.7 },
  ];

  if (screen === 'create') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3 max-w-md mx-auto">
            <Button
              onClick={() => setScreen('main')}
              className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg text-gray-900">Create Donation</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
          <div>
            <Label htmlFor="foodType" className="text-gray-700">Food Type</Label>
            <Input
              id="foodType"
              placeholder="e.g., Cooked meals, Fresh produce"
              className="mt-1 bg-white border-gray-200 rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="quantity" className="text-gray-700">Estimated Quantity</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="Number of portions"
              className="mt-1 bg-white border-gray-200 rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="description" className="text-gray-700">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the food items..."
              className="mt-1 bg-white border-gray-200 rounded-xl"
            />
          </div>

          <div>
            <Label className="text-gray-700 mb-3 block">Select NGO</Label>
            <div className="space-y-3">
              {ngoList.filter(ngo => ngo.available).map((ngo, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-white rounded-xl p-4 shadow-sm border-2 border-gray-100 hover:border-green-500 text-left"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-gray-900 mb-1">{ngo.name}</h3>
                      <p className="text-xs text-gray-500">Capacity: {ngo.capacity}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-600">
                      ⭐ {ngo.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {ngo.distance} away
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <Button
            onClick={() => setScreen('schedule')}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6"
          >
            Continue to Schedule
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'schedule') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3 max-w-md mx-auto">
            <Button
              onClick={() => setScreen('create')}
              className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg text-gray-900">Schedule Pickup</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
          <div>
            <Label className="text-gray-700 mb-3 block">Select Date & Time</Label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  type="date"
                  className="bg-white border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="time"
                  className="bg-white border-gray-200 rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-sm text-blue-900 mb-2">📅 Quick Schedule</h3>
            <div className="space-y-2">
              {['Today 6:00 PM', 'Tomorrow 12:00 PM', 'Tomorrow 6:00 PM'].map((time, idx) => (
                <button
                  key={idx}
                  className="w-full bg-white border border-blue-200 rounded-lg p-2 text-sm text-gray-900 hover:bg-blue-50"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="notes" className="text-gray-700">Special Instructions</Label>
            <Textarea
              id="notes"
              placeholder="Any special handling instructions..."
              className="mt-1 bg-white border-gray-200 rounded-xl"
            />
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm text-gray-700 mb-3">Donation Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Food Type:</span>
                <span className="text-gray-900">Cooked meals</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Quantity:</span>
                <span className="text-gray-900">50 portions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">NGO:</span>
                <span className="text-gray-900">Hope Foundation</span>
              </div>
            </div>
          </div>

          <Button
            onClick={() => {
              setScreen('tracking');
              setTimeout(() => setScreen('main'), 3000);
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6"
          >
            Confirm Donation
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'tracking') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3 max-w-md mx-auto">
            <Button
              onClick={() => setScreen('main')}
              className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg text-gray-900">Donation Tracking</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-center text-white shadow-lg mb-6"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-3" />
            <h2 className="text-xl mb-2">Donation Confirmed!</h2>
            <p className="text-green-100 text-sm">Pickup scheduled for today at 6:00 PM</p>
          </motion.div>

          {/* Timeline */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm text-gray-700 mb-4">Status Timeline</h3>
            <div className="space-y-4">
              {[
                { status: 'Donation Created', time: '2:30 PM', completed: true },
                { status: 'NGO Confirmed', time: '2:35 PM', completed: true },
                { status: 'Pickup Scheduled', time: '6:00 PM', completed: false },
                { status: 'In Transit', time: 'Pending', completed: false },
                { status: 'Delivered', time: 'Pending', completed: false },
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      step.completed
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {step.completed ? <CheckCircle className="w-5 h-5" /> : <div className="w-3 h-3 bg-gray-300 rounded-full" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${step.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.status}
                    </p>
                    <p className="text-xs text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={() => setScreen('receipt')}
            className="w-full mt-6 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-xl py-5"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Receipt
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'receipt') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3 max-w-md mx-auto">
            <Button
              onClick={() => setScreen('tracking')}
              className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg text-gray-900">Donation Receipt</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h2 className="text-xl text-gray-900 mb-1">Donation Receipt</h2>
              <p className="text-xs text-gray-500">Thank you for your generosity</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">From</p>
                <p className="text-gray-900">{user.name}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">To</p>
                <p className="text-gray-900">Hope Foundation</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Donation Details</p>
                <div className="bg-gray-50 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Food Type:</span>
                    <span className="text-gray-900">Cooked Meals</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="text-gray-900">50 portions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="text-gray-900">Apr 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Value:</span>
                    <span className="text-gray-900">$375</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-900 mb-1">🌍 Environmental Impact</p>
                <p className="text-xs text-green-700">Prevented 15kg of CO₂ emissions</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Receipt ID: DON-2024-{Math.floor(Math.random() * 10000)}
              </p>
            </div>
          </div>

          <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white rounded-xl py-5">
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Button
            onClick={onBack}
            className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg text-gray-900">Donations</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        {/* Create Donation Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => setScreen('create')}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl p-6 shadow-md"
        >
          <Heart className="w-8 h-8 mb-2" />
          <h3 className="text-lg mb-1">Create Donation</h3>
          <p className="text-sm text-pink-100">Share food with those in need</p>
        </motion.button>

        {/* Available NGOs */}
        <div>
          <h3 className="text-sm text-gray-900 mb-3">Available NGOs Nearby</h3>
          <div className="space-y-3">
            {ngoList.map((ngo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-xl p-4 shadow-sm border ${
                  ngo.available ? 'border-green-200' : 'border-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-gray-900 mb-1">{ngo.name}</h4>
                    <p className="text-xs text-gray-500">Capacity: {ngo.capacity}</p>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    ngo.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {ngo.available ? 'Available' : 'Full'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {ngo.distance}
                  </span>
                  <span className="text-amber-600">⭐ {ngo.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Donations */}
        <div>
          <h3 className="text-sm text-gray-900 mb-3">Recent Donations</h3>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-4">
            {[
              { date: 'Apr 14', meals: 45, ngo: 'Community Kitchen', status: 'Delivered' },
              { date: 'Apr 12', meals: 30, ngo: 'Hope Foundation', status: 'Delivered' },
            ].map((donation, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-900">{donation.meals} meals to {donation.ngo}</p>
                  <p className="text-xs text-gray-500">{donation.date}</p>
                </div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {donation.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
