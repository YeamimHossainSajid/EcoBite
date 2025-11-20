import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, TrendingDown, Download, BarChart3, CheckCircle, DollarSign, Clock, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface BusinessListingProps {
  user: any;
  onBack: () => void;
}

export function BusinessListing({ user, onBack }: BusinessListingProps) {
  const [screen, setScreen] = useState<'main' | 'create' | 'endofday' | 'analytics' | 'receipt' | 'success'>('main');
  const [itemName, setItemName] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');

  const handleCreateListing = () => {
    setScreen('success');
    setTimeout(() => {
      setScreen('main');
    }, 2000);
  };

  // Success Screen
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
            <h2 className="text-2xl text-gray-900 mb-2">Success!</h2>
            <p className="text-gray-600">Your listing is now live</p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Create Listing Screen
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
            <h1 className="text-lg text-gray-900">Add Discounted Item</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
          {/* Photo Upload */}
          <div>
            <Label className="text-gray-700">Photos</Label>
            <div className="mt-2 grid grid-cols-4 gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 shadow-sm"
              >
                <Camera className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">Add</span>
              </motion.div>
            </div>
          </div>

          <div>
            <Label htmlFor="itemName" className="text-gray-700">Item Name</Label>
            <Input
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="e.g., Fresh Bread"
              className="mt-1 bg-white border-gray-200 rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="originalPrice" className="text-gray-700">Original Price</Label>
              <div className="relative mt-1">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="originalPrice"
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="10.00"
                  className="pl-9 bg-white border-gray-200 rounded-xl"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="discountPrice" className="text-gray-700">Sale Price</Label>
              <div className="relative mt-1">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <Input
                  id="discountPrice"
                  type="number"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  placeholder="7.00"
                  className="pl-9 bg-white border-gray-200 rounded-xl text-green-600"
                />
              </div>
            </div>
          </div>

          {/* Auto-pricing Suggestion */}
          {originalPrice && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-xl p-4"
            >
              <h3 className="text-sm text-green-900 mb-2">💡 Pricing Suggestions</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setDiscountPrice((parseFloat(originalPrice) * 0.7).toFixed(2))}
                  className="w-full bg-white border border-green-200 rounded-lg p-2 text-left text-sm hover:bg-green-50"
                >
                  <span className="text-gray-900">30% off</span>
                  <span className="float-right text-green-600">${(parseFloat(originalPrice) * 0.7).toFixed(2)}</span>
                </button>
                <button
                  onClick={() => setDiscountPrice((parseFloat(originalPrice) * 0.5).toFixed(2))}
                  className="w-full bg-white border border-green-200 rounded-lg p-2 text-left text-sm hover:bg-green-50"
                >
                  <span className="text-gray-900">50% off (Popular)</span>
                  <span className="float-right text-green-600">${(parseFloat(originalPrice) * 0.5).toFixed(2)}</span>
                </button>
              </div>
            </motion.div>
          )}

          <div>
            <Label htmlFor="quantity" className="text-gray-700">Quantity Available</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="10"
              className="mt-1 bg-white border-gray-200 rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="expiry" className="text-gray-700">Available Until</Label>
            <div className="relative mt-1">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="expiry"
                type="datetime-local"
                className="pl-10 bg-white border-gray-200 rounded-xl"
              />
            </div>
          </div>

          <Button
            onClick={handleCreateListing}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6"
          >
            Post Discounted Item
          </Button>
        </div>
      </div>
    );
  }

  // Analytics Dashboard
  if (screen === 'analytics') {
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
            <h1 className="text-lg text-gray-900">Waste Insights</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">This Month</p>
              <p className="text-2xl text-gray-900 mb-1">$2,450</p>
              <p className="text-xs text-green-600">↑ 12% vs last month</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Waste Prevented</p>
              <p className="text-2xl text-gray-900 mb-1">145kg</p>
              <p className="text-xs text-green-600">↑ 8% vs last month</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm text-gray-900 mb-4">Monthly Waste Reduction</h3>
            <div className="space-y-3">
              {[
                { month: 'Jan', value: 80 },
                { month: 'Feb', value: 95 },
                { month: 'Mar', value: 120 },
                { month: 'Apr', value: 145 },
              ].map((item) => (
                <div key={item.month} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-8">{item.month}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(item.value / 150) * 100}%` }}
                    >
                      <span className="text-xs text-white">{item.value}kg</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CO2 Impact */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 shadow-md text-white">
            <h3 className="mb-2">Environmental Impact</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-3xl mb-1">245kg</p>
                <p className="text-sm text-blue-100">CO₂ Prevented</p>
              </div>
              <div>
                <p className="text-3xl mb-1">890</p>
                <p className="text-sm text-blue-100">Meals Saved</p>
              </div>
            </div>
          </div>

          {/* Tax Benefits */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-gray-900">Tax Deduction Eligible</h3>
              <Button
                onClick={() => setScreen('receipt')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-3 py-1 text-xs"
              >
                <Download className="w-3 h-3 mr-1" />
                Receipt
              </Button>
            </div>
            <p className="text-2xl text-gray-900 mb-1">$1,845</p>
            <p className="text-xs text-gray-500">Donations this year</p>
          </div>
        </div>
      </div>
    );
  }

  // Tax Receipt Screen
  if (screen === 'receipt') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3 max-w-md mx-auto">
            <Button
              onClick={() => setScreen('analytics')}
              className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg text-gray-900">Tax Receipt</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 pt-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            {/* Receipt Header */}
            <div className="text-center mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌱</span>
              </div>
              <h2 className="text-xl text-gray-900 mb-1">FoodFlow</h2>
              <p className="text-xs text-gray-500">Tax Deduction Receipt</p>
            </div>

            {/* Business Info */}
            <div className="mb-6">
              <h3 className="text-sm text-gray-500 mb-2">Business Details</h3>
              <p className="text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-600">Tax ID: XXX-XX-1234</p>
            </div>

            {/* Donation Summary */}
            <div className="mb-6">
              <h3 className="text-sm text-gray-500 mb-3">Donation Summary (Q1 2024)</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Food Donations</span>
                  <span className="text-gray-900">$1,245</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Surplus Redistribution</span>
                  <span className="text-gray-900">$600</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="text-gray-900">Total Deductible</span>
                  <span className="text-lg text-gray-900">$1,845</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                This receipt is valid for tax purposes. Keep for your records.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-5">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
            <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl py-5">
              Email to Accountant
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Main Screen
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
          <h1 className="text-lg text-gray-900">Business Portal</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => setScreen('create')}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 shadow-md text-white text-left"
          >
            <Plus className="w-8 h-8 mb-2" />
            <h3 className="mb-1">Add Item</h3>
            <p className="text-xs text-green-100">Discounted food</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => setScreen('analytics')}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-left"
          >
            <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-gray-900 mb-1">Analytics</h3>
            <p className="text-xs text-gray-500">View insights</p>
          </motion.button>
        </div>

        {/* Today's Summary */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500 mb-4">Today's Summary</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-2xl text-gray-900 mb-1">12</p>
              <p className="text-xs text-gray-500">Items Listed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-900 mb-1">8</p>
              <p className="text-xs text-gray-500">Sold</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-green-600 mb-1">$145</p>
              <p className="text-xs text-gray-500">Revenue</p>
            </div>
          </div>
        </div>

        {/* Active Listings */}
        <div>
          <h3 className="text-sm text-gray-900 mb-3">Active Listings</h3>
          <div className="space-y-3">
            {[
              { name: 'Fresh Bread', price: '$3.50', original: '$5.00', qty: 8, time: '2h left' },
              { name: 'Pastries', price: '$2.00', original: '$4.00', qty: 5, time: '4h left' },
              { name: 'Sandwiches', price: '$4.50', original: '$7.00', qty: 3, time: '1h left' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-900">{item.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 line-through">{item.original}</span>
                    <span className="text-green-600">{item.price}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">{item.qty} available</span>
                  <span className="text-orange-600">{item.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
