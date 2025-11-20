import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, AlertTriangle, ChefHat, Calendar, Trash2 } from 'lucide-react';
import { Button } from './ui/button';

interface SmartKitchenProps {
  user: any;
  onBack: () => void;
}

export function SmartKitchen({ user, onBack }: SmartKitchenProps) {
  const [activeTab, setActiveTab] = useState<'pantry' | 'recipes' | 'planner'>('pantry');

  const pantryItems = [
    { name: 'Milk', expiry: 2, emoji: '🥛', urgent: true },
    { name: 'Eggs', expiry: 3, emoji: '🥚', urgent: true },
    { name: 'Tomatoes', expiry: 4, emoji: '🍅', urgent: false },
    { name: 'Bread', expiry: 1, emoji: '🍞', urgent: true },
    { name: 'Cheese', expiry: 7, emoji: '🧀', urgent: false },
    { name: 'Carrots', expiry: 5, emoji: '🥕', urgent: false },
  ];

  const recipes = [
    { name: 'Veggie Omelette', time: '15 min', ingredients: 3, emoji: '🍳' },
    { name: 'Tomato Soup', time: '20 min', ingredients: 4, emoji: '🍲' },
    { name: 'Cheese Sandwich', time: '5 min', ingredients: 2, emoji: '🥪' },
    { name: 'Carrot Salad', time: '10 min', ingredients: 3, emoji: '🥗' },
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
          <h1 className="text-xl text-green-900">Smart Kitchen</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 pt-4">
        <div className="flex gap-2 bg-green-100/50 rounded-2xl p-1">
          <button
            onClick={() => setActiveTab('pantry')}
            className={`flex-1 py-2 rounded-xl transition-all ${
              activeTab === 'pantry'
                ? 'bg-white text-green-900 shadow-sm'
                : 'text-green-700'
            }`}
          >
            Pantry
          </button>
          <button
            onClick={() => setActiveTab('recipes')}
            className={`flex-1 py-2 rounded-xl transition-all ${
              activeTab === 'recipes'
                ? 'bg-white text-green-900 shadow-sm'
                : 'text-green-700'
            }`}
          >
            Recipes
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`flex-1 py-2 rounded-xl transition-all ${
              activeTab === 'planner'
                ? 'bg-white text-green-900 shadow-sm'
                : 'text-green-700'
            }`}
          >
            Planner
          </button>
        </div>
      </div>

      {/* Pantry Tab */}
      {activeTab === 'pantry' && (
        <div className="px-6 pt-6">
          {/* Cook It Now Alert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-100/80 to-red-100/80 backdrop-blur-sm rounded-2xl p-5 mb-4 shadow-md border border-orange-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h3 className="text-green-900">Cook It Now!</h3>
            </div>
            <p className="text-sm text-green-700 mb-3">3 items expiring in 2 days or less</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full">
              See Recipes
            </Button>
          </motion.div>

          {/* Add Item Button */}
          <Button className="w-full mb-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl py-5 flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            Add Item to Pantry
          </Button>

          {/* Pantry Items */}
          <h2 className="text-lg mb-3 text-green-900">Your Pantry ({pantryItems.length} items)</h2>
          <div className="space-y-3">
            {pantryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={`rounded-2xl p-4 shadow-md ${
                  item.urgent
                    ? 'bg-orange-100/80 border border-orange-200'
                    : 'bg-white/70'
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-green-900 mb-1">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          item.urgent
                            ? 'bg-orange-200 text-orange-800'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        Expires in {item.expiry} days
                      </span>
                    </div>
                  </div>
                  <Button className="bg-transparent hover:bg-red-100 text-red-600 p-2 rounded-full">
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Waste Prevention Insights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 bg-gradient-to-br from-green-100/80 to-blue-100/80 backdrop-blur-sm rounded-2xl p-5 shadow-md"
          >
            <h3 className="text-green-900 mb-3">This Month</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/70 rounded-xl p-3 text-center">
                <div className="text-2xl text-green-900 mb-1">95%</div>
                <p className="text-xs text-green-700">Food Used</p>
              </div>
              <div className="bg-white/70 rounded-xl p-3 text-center">
                <div className="text-2xl text-green-900 mb-1">$45</div>
                <p className="text-xs text-green-700">Saved</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Recipes Tab */}
      {activeTab === 'recipes' && (
        <div className="px-6 pt-6">
          <h2 className="text-lg mb-3 text-green-900">Recipes from Your Pantry</h2>
          <p className="text-sm text-green-700 mb-4">Based on items expiring soon</p>

          <div className="space-y-3">
            {recipes.map((recipe, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-5xl">{recipe.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-green-900 mb-1">{recipe.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-green-600">
                      <span>⏱️ {recipe.time}</span>
                      <span>•</span>
                      <span>🥘 {recipe.ingredients} ingredients</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">
                  View Recipe
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Search More Recipes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-5 text-center shadow-md"
          >
            <ChefHat className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="text-green-900 mb-2">Need More Ideas?</h3>
            <p className="text-sm text-green-700 mb-3">Search 1000+ recipes</p>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-xl w-full">
              Browse All Recipes
            </Button>
          </motion.div>
        </div>
      )}

      {/* Planner Tab */}
      {activeTab === 'planner' && (
        <div className="px-6 pt-6">
          <h2 className="text-lg mb-3 text-green-900">Weekly Meal Planner</h2>
          <p className="text-sm text-green-700 mb-4">Plan ahead to reduce waste</p>

          {/* Days */}
          <div className="space-y-3">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <h3 className="text-green-900">{day}</h3>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-3 py-1 text-sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                {idx === 0 ? (
                  <div className="space-y-2">
                    <div className="bg-green-50 rounded-xl p-2 text-sm text-green-800">
                      🍳 Breakfast: Veggie Omelette
                    </div>
                    <div className="bg-green-50 rounded-xl p-2 text-sm text-green-800">
                      🍝 Lunch: Pasta with Vegetables
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-green-600">No meals planned</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Shopping List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 bg-gradient-to-r from-blue-100/80 to-cyan-100/80 backdrop-blur-sm rounded-2xl p-5 shadow-md"
          >
            <h3 className="text-green-900 mb-3">Shopping List</h3>
            <p className="text-sm text-green-700 mb-3">Based on your meal plan</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl w-full">
              Generate List
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
