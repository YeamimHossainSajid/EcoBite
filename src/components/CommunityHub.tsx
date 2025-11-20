import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Package, Clock, DollarSign, ShoppingCart, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface CommunityHubProps {
  user: any;
  onBack: () => void;
}

export function CommunityHub({ user, onBack }: CommunityHubProps) {
  const [screen, setScreen] = useState<'main' | 'boxdetails' | 'payment' | 'success'>('main');
  const [selectedBox, setSelectedBox] = useState<any>(null);

  const rescueBoxes = [
    {
      id: 1,
      name: 'Veggie Rescue Box',
      image: '🥬',
      contents: 'Fresh vegetables & fruits',
      discount: '60%',
      price: '$8',
      originalPrice: '$20',
      distance: '0.8 km',
      pickupTime: 'Today 5-7 PM',
      items: ['Tomatoes', 'Carrots', 'Lettuce', 'Apples', 'Bananas'],
    },
    {
      id: 2,
      name: 'Mixed Surprise Box',
      image: '📦',
      contents: 'Variety of items',
      discount: '70%',
      price: '$6',
      originalPrice: '$20',
      distance: '1.2 km',
      pickupTime: 'Today 6-8 PM',
      items: ['Random selection of fresh produce and pantry items'],
    },
    {
      id: 3,
      name: 'Bakery Box',
      image: '🥖',
      contents: 'Fresh bread & pastries',
      discount: '50%',
      price: '$5',
      originalPrice: '$10',
      distance: '0.5 km',
      pickupTime: 'Today 7-9 PM',
      items: ['Assorted breads', 'Croissants', 'Muffins'],
    },
  ];

  const hubs = [
    { name: 'Green Valley Hub', distance: '0.8 km', open: true, hours: '10 AM - 8 PM' },
    { name: 'Community Center', distance: '1.2 km', open: true, hours: '9 AM - 7 PM' },
    { name: 'Park Square Hub', distance: '1.9 km', open: false, hours: 'Opens at 10 AM' },
  ];

  if (screen === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl text-gray-900 mb-2">Reserved!</h2>
            <p className="text-gray-600 mb-4">Pickup details sent to your email</p>
            <Button
              onClick={() => {
                setScreen('main');
                onBack();
              }}
              className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6"
            >
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (screen === 'payment') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3 max-w-md mx-auto">
            <Button
              onClick={() => setScreen('boxdetails')}
              className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg text-gray-900">Payment</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
          {/* Order Summary */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm text-gray-700 mb-4">Order Summary</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{selectedBox.image}</div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">{selectedBox.name}</h4>
                <p className="text-xs text-gray-500">{selectedBox.contents}</p>
              </div>
              <div className="text-right">
                <p className="text-lg text-green-600">{selectedBox.price}</p>
                <p className="text-xs text-gray-400 line-through">{selectedBox.originalPrice}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">{selectedBox.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Service Fee</span>
                <span className="text-gray-900">$0.50</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <span className="text-gray-900">Total</span>
                <span className="text-lg text-gray-900">
                  ${(parseFloat(selectedBox.price.replace('$', '')) + 0.5).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-sm text-gray-900 mb-3">Payment Method</h3>
            <div className="space-y-3">
              <button className="w-full bg-white rounded-xl p-4 shadow-sm border-2 border-green-500 text-left flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    💳
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Credit Card</p>
                    <p className="text-xs text-gray-500">•••• 4242</p>
                  </div>
                </div>
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </button>

              <button className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-left flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  📱
                </div>
                <div>
                  <p className="text-sm text-gray-900">Digital Wallet</p>
                  <p className="text-xs text-gray-500">Apple Pay, Google Pay</p>
                </div>
              </button>
            </div>
          </div>

          {/* Pickup Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm text-blue-900 mb-1">Pickup Time</h4>
                <p className="text-sm text-blue-700">{selectedBox.pickupTime}</p>
                <p className="text-xs text-blue-600 mt-2">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {selectedBox.distance} away
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setScreen('success')}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6"
          >
            Complete Payment
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'boxdetails' && selectedBox) {
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
            <h1 className="text-lg text-gray-900">Rescue Box Details</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
          {/* Box Image & Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-8xl mb-4">{selectedBox.image}</div>
            <h2 className="text-xl text-gray-900 mb-2">{selectedBox.name}</h2>
            <p className="text-gray-600 mb-4">{selectedBox.contents}</p>

            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <span className="text-sm">Save {selectedBox.discount}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white shadow-md">
            <div className="flex items-end justify-between mb-2">
              <div>
                <p className="text-sm text-green-100 mb-1">Only</p>
                <p className="text-4xl">{selectedBox.price}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-100">Regular Price</p>
                <p className="text-xl line-through text-green-200">{selectedBox.originalPrice}</p>
              </div>
            </div>
          </div>

          {/* Contents */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm text-gray-700 mb-3">What's Inside</h3>
            <ul className="space-y-2">
              {selectedBox.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pickup Details */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm text-gray-700 mb-3">Pickup Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-900">Pickup Time</p>
                  <p className="text-xs text-gray-500">{selectedBox.pickupTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-900">Location</p>
                  <p className="text-xs text-gray-500">{selectedBox.distance} away</p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setScreen('payment')}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Reserve & Pay
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
          <h1 className="text-lg text-gray-900">Community Hub</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md"
        >
          <Package className="w-10 h-10 mb-3" />
          <h2 className="text-xl mb-2">Rescue Boxes</h2>
          <p className="text-sm text-blue-100">Save money while reducing food waste</p>
        </motion.div>

        {/* Browse Rescue Boxes */}
        <div>
          <h3 className="text-sm text-gray-900 mb-3">Available Today</h3>
          <div className="space-y-3">
            {rescueBoxes.map((box, idx) => (
              <motion.button
                key={box.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setSelectedBox(box);
                  setScreen('boxdetails');
                }}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-5xl">{box.image}</div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{box.name}</h4>
                    <p className="text-xs text-gray-500 mb-2">{box.contents}</p>
                    <div className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      {box.discount} OFF
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {box.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {box.pickupTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 line-through">{box.originalPrice}</span>
                    <span className="text-lg text-green-600">{box.price}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Hub Locations */}
        <div>
          <h3 className="text-sm text-gray-900 mb-3">Hub Locations</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-gray-900 mb-1">{hub.name}</h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {hub.distance}
                    </p>
                  </div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      hub.open
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {hub.open ? 'Open' : 'Closed'}
                  </div>
                </div>
                <p className="text-xs text-gray-500">{hub.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Preview */}
        <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-48 flex items-center justify-center shadow-sm">
          <div className="text-center">
            <div className="text-5xl mb-2">🗺️</div>
            <p className="text-gray-700 text-sm">Interactive Hub Map</p>
            <Button className="mt-3 bg-white hover:bg-gray-50 text-gray-900 rounded-lg px-4 py-2 text-sm">
              View Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
