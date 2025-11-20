import { motion } from 'motion/react';
import { ArrowLeft, Recycle, Sprout, Info, MapPin, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

interface BioTransformationProps {
  user: any;
  onBack: () => void;
}

export function BioTransformation({ user, onBack }: BioTransformationProps) {
  const upcycledProducts = [
    {
      name: 'ReGrain Flour',
      source: 'Spent brewery grain',
      price: '$5.99',
      emoji: '🌾',
      inStock: true
    },
    {
      name: 'Pulp Juice',
      source: 'Fruit pulp waste',
      price: '$3.49',
      emoji: '🥤',
      inStock: true
    },
    {
      name: 'Coffee Snacks',
      source: 'Coffee grounds',
      price: '$4.99',
      emoji: '🍪',
      inStock: false
    },
    {
      name: 'Veggie Chips',
      source: 'Ugly vegetables',
      price: '$2.99',
      emoji: '🥔',
      inStock: true
    },
  ];

  const compostLocations = [
    { name: 'Central Park Drop-off', distance: '0.5 km', hours: 'Mon-Sat 8AM-6PM', emoji: '🏞️' },
    { name: 'Community Garden', distance: '1.2 km', hours: 'Daily 7AM-7PM', emoji: '🌻' },
    { name: 'Green Market', distance: '1.8 km', hours: 'Tue-Sun 9AM-5PM', emoji: '🏪' },
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
          <h1 className="text-xl text-green-900">Bio-Transformation Loop</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-6 text-center shadow-lg mb-6"
        >
          <Recycle className="w-16 h-16 text-white mx-auto mb-3" />
          <h2 className="text-2xl text-white mb-2">From Waste to Worth</h2>
          <p className="text-green-50">Transforming food waste into valuable resources</p>
        </motion.div>
      </div>

      {/* Circular Economy Process */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900">How It Works</h2>
        
        <div className="space-y-3">
          {[
            { step: 1, title: 'Food Waste Collection', desc: 'Non-edible scraps collected', emoji: '♻️' },
            { step: 2, title: 'Composting', desc: 'Organic matter breaks down', emoji: '🌱' },
            { step: 3, title: 'Growing', desc: 'Compost feeds mushrooms & insects', emoji: '🍄' },
            { step: 4, title: 'Harvesting', desc: 'Sustainable protein produced', emoji: '🦗' },
            { step: 5, title: 'New Food', desc: 'Loop completes', emoji: '🍽️' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                  {item.step}
                </div>
                <div className="text-4xl">{item.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-green-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-green-600">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcycled Food Lab */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900">Upcycled Food Lab</h2>
        <p className="text-sm text-green-700 mb-4">New products from food waste</p>

        <div className="grid grid-cols-2 gap-3">
          {upcycledProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md"
            >
              <div className="text-5xl mb-2 text-center">{product.emoji}</div>
              <h3 className="text-sm text-green-900 mb-1 text-center">{product.name}</h3>
              <p className="text-xs text-green-600 mb-2 text-center">{product.source}</p>
              <div className="text-center mb-2">
                <span className="text-lg text-green-900">{product.price}</span>
              </div>
              {product.inStock ? (
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs py-2">
                  Buy Now
                </Button>
              ) : (
                <Button disabled className="w-full bg-gray-300 text-gray-500 rounded-xl text-xs py-2 cursor-not-allowed">
                  Out of Stock
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mushroom Growing */}
      <div className="px-6 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">🍄</div>
            <div>
              <h2 className="text-lg text-green-900">Mushroom Cultivation</h2>
              <p className="text-sm text-green-700">Growing from coffee waste</p>
            </div>
          </div>

          <div className="bg-white/70 rounded-xl p-4 mb-4">
            <h3 className="text-green-900 mb-2">How Coffee Waste Becomes Mushrooms</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-start gap-2">
                <span>1.</span>
                <span>Coffee grounds collected from cafes</span>
              </li>
              <li className="flex items-start gap-2">
                <span>2.</span>
                <span>Mixed with mushroom spawn</span>
              </li>
              <li className="flex items-start gap-2">
                <span>3.</span>
                <span>Grows in controlled environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span>4.</span>
                <span>Harvest in 10-14 days</span>
              </li>
            </ul>
          </div>

          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl">
            <BookOpen className="w-4 h-4 mr-2" />
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Insect Protein */}
      <div className="px-6 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-blue-100/80 to-cyan-100/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">🦗</div>
            <div>
              <h2 className="text-lg text-green-900">Black Soldier Fly Protein</h2>
              <p className="text-sm text-green-700">Sustainable protein source</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white/70 rounded-xl p-3 text-center">
              <div className="text-2xl text-green-900 mb-1">60%</div>
              <p className="text-xs text-green-700">Protein</p>
            </div>
            <div className="bg-white/70 rounded-xl p-3 text-center">
              <div className="text-2xl text-green-900 mb-1">100x</div>
              <p className="text-xs text-green-700">Less Water</p>
            </div>
            <div className="bg-white/70 rounded-xl p-3 text-center">
              <div className="text-2xl text-green-900 mb-1">80%</div>
              <p className="text-xs text-green-700">Less Land</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800">
                Black soldier fly larvae consume food waste and produce high-quality protein for animal feed and human consumption.
              </p>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Compost Drop-off Points */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900 flex items-center gap-2">
          <Sprout className="w-5 h-5" />
          Compost Drop-off Points
        </h2>

        <div className="space-y-3">
          {compostLocations.map((location, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="text-4xl">{location.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-green-900 mb-1">{location.name}</h3>
                  <div className="space-y-1 text-xs text-green-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{location.distance} away</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🕒</span>
                      <span>{location.hours}</span>
                    </div>
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

      {/* Community Garden Dashboard */}
      <div className="px-6 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-green-100/80 to-lime-100/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
        >
          <h2 className="text-lg mb-4 text-green-900">Community Gardens</h2>
          <p className="text-sm text-green-700 mb-4">Growing with our compost</p>

          <div className="space-y-3 mb-4">
            <div className="bg-white/70 rounded-xl p-3 flex items-center justify-between">
              <div>
                <h3 className="text-green-900 text-sm">Riverside Garden</h3>
                <p className="text-xs text-green-600">12 active plots</p>
              </div>
              <div className="text-2xl">🌿</div>
            </div>
            
            <div className="bg-white/70 rounded-xl p-3 flex items-center justify-between">
              <div>
                <h3 className="text-green-900 text-sm">Urban Farm Co-op</h3>
                <p className="text-xs text-green-600">8 active plots</p>
              </div>
              <div className="text-2xl">🥬</div>
            </div>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">
            Join a Garden
          </Button>
        </motion.div>
      </div>

      {/* Impact Stats */}
      <div className="px-6 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md"
        >
          <h2 className="text-lg mb-4 text-green-900">Bio-Transformation Impact</h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/70 rounded-xl p-4">
              <div className="text-3xl text-green-900 mb-1">2.4</div>
              <p className="text-xs text-green-700">Tonnes Composted</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4">
              <div className="text-3xl text-green-900 mb-1">850kg</div>
              <p className="text-xs text-green-700">Mushrooms Grown</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4">
              <div className="text-3xl text-green-900 mb-1">340kg</div>
              <p className="text-xs text-green-700">Insect Protein</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4">
              <div className="text-3xl text-green-900 mb-1">45</div>
              <p className="text-xs text-green-700">Gardens Fed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
