import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Truck, Clock, Package, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface FlowNetworkProps {
  user: any;
  onBack: () => void;
}

export function FlowNetwork({ user, onBack }: FlowNetworkProps) {
  const hubs = [
    { name: 'Green Valley Hub', distance: '0.8 km', items: 12, volunteers: 5, emoji: '🏪' },
    { name: 'Community Center', distance: '1.2 km', items: 8, volunteers: 3, emoji: '🏢' },
    { name: 'Park Square Hub', distance: '1.9 km', items: 15, volunteers: 7, emoji: '🏛️' },
  ];

  const pickupRequests = [
    {
      id: 1,
      from: 'Green Bakery',
      to: 'Hope NGO',
      distance: '2.3 km',
      items: '15 kg bread',
      time: '30 min ago',
      status: 'pending',
      emoji: '🥖'
    },
    {
      id: 2,
      from: 'Fresh Market',
      to: 'Community Kitchen',
      distance: '1.5 km',
      items: '20 kg vegetables',
      time: '1 hour ago',
      status: 'pending',
      emoji: '🥬'
    },
    {
      id: 3,
      from: 'Spice Restaurant',
      to: 'Street Food Bank',
      distance: '3.1 km',
      items: '10 meals',
      time: '2 hours ago',
      status: 'accepted',
      emoji: '🍛'
    },
  ];

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
          <h1 className="text-xl text-green-900">Flow Network</h1>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-100/80 to-green-100/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-6"
        >
          <h2 className="text-lg mb-4 text-green-900 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Hyper-Local Hub Map
          </h2>
          
          {/* Mock Map */}
          <div className="bg-white/50 rounded-2xl h-64 flex items-center justify-center mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30"></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-2">🗺️</div>
              <p className="text-green-700">Interactive Map View</p>
              <p className="text-sm text-green-600 mt-1">Showing 3 hubs near you</p>
            </div>
            
            {/* Map Pins Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/4 left-1/3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white"
            >
              📍
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white"
            >
              📍
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white"
            >
              📍
            </motion.div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-5">
            View Full Map
          </Button>
        </motion.div>
      </div>

      {/* Nearby Hubs */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900">Nearby Hubs</h2>
        
        <div className="space-y-3">
          {hubs.map((hub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">{hub.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-green-900 mb-1">{hub.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-green-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {hub.distance}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      {hub.items} items
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Truck className="w-3 h-3" />
                      {hub.volunteers} volunteers
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">
                Get Directions
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Volunteer Pickup Requests */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-green-900">Volunteer Pickups</h2>
          <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            {pickupRequests.filter(r => r.status === 'pending').length} New
          </div>
        </div>

        <div className="space-y-3">
          {pickupRequests.map((request, idx) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`rounded-2xl p-5 shadow-md ${
                request.status === 'accepted'
                  ? 'bg-green-100/80 border border-green-300'
                  : 'bg-white/70'
              } backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="text-4xl">{request.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-green-900">{request.from}</h3>
                    <span className="text-green-600">→</span>
                    <h3 className="text-green-900">{request.to}</h3>
                  </div>
                  <div className="space-y-1 text-xs text-green-600">
                    <div className="flex items-center gap-2">
                      <Package className="w-3 h-3" />
                      <span>{request.items}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{request.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{request.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              {request.status === 'pending' ? (
                <div className="grid grid-cols-2 gap-2">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl">
                    Accept
                  </Button>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl">
                    Decline
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 bg-green-200 text-green-800 rounded-xl py-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Accepted - In Progress</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="px-6 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
        >
          <h2 className="text-lg mb-4 text-green-900 text-center">Your Volunteer Impact</h2>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/70 rounded-xl p-4 text-center">
              <div className="text-2xl text-green-900 mb-1">8</div>
              <p className="text-xs text-green-700">Deliveries</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4 text-center">
              <div className="text-2xl text-green-900 mb-1">24kg</div>
              <p className="text-xs text-green-700">Transported</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4 text-center">
              <div className="text-2xl text-green-900 mb-1">12</div>
              <p className="text-xs text-green-700">Families</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
