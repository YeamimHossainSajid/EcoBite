import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, XCircle, Users, BarChart3, MapPin, Package, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface AdminPanelProps {
  user: any;
  onBack: () => void;
}

export function AdminPanel({ user, onBack }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'hubs' | 'listings' | 'volunteers'>('overview');

  const pendingHubs = [
    { name: 'Downtown Hub', location: 'Main St', applicant: 'Sarah Johnson', date: 'Apr 14' },
    { name: 'Eastside Center', location: '5th Ave', applicant: 'Mike Chen', date: 'Apr 13' },
  ];

  const pendingListings = [
    { item: 'Fresh Produce Box', user: 'Green Market', category: 'Vegetables', date: 'Today' },
    { item: 'Bakery Items', user: 'Daily Bread', category: 'Bakery', date: 'Today' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 shadow-md">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg text-white">Admin Dashboard</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Tabs */}
        <div className="px-6 pt-4">
          <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 rounded-lg text-xs transition-all ${
                activeTab === 'overview'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('hubs')}
              className={`flex-1 py-2 rounded-lg text-xs transition-all ${
                activeTab === 'hubs'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600'
              }`}
            >
              Hubs
            </button>
            <button
              onClick={() => setActiveTab('listings')}
              className={`flex-1 py-2 rounded-lg text-xs transition-all ${
                activeTab === 'listings'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600'
              }`}
            >
              Listings
            </button>
            <button
              onClick={() => setActiveTab('volunteers')}
              className={`flex-1 py-2 rounded-lg text-xs transition-all ${
                activeTab === 'volunteers'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600'
              }`}
            >
              Volunteers
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="px-6 pt-6 space-y-6">
            {/* Platform Stats */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <Users className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-2xl text-gray-900 mb-1">2,450</p>
                <p className="text-xs text-gray-500">Active Users</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <Package className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-2xl text-gray-900 mb-1">1,890</p>
                <p className="text-xs text-gray-500">Total Listings</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <MapPin className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-2xl text-gray-900 mb-1">45</p>
                <p className="text-xs text-gray-500">Active Hubs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <TrendingUp className="w-6 h-6 text-orange-600 mb-2" />
                <p className="text-2xl text-gray-900 mb-1">5.2k</p>
                <p className="text-xs text-gray-500">Meals Saved</p>
              </motion.div>
            </div>

            {/* Waste Metrics Chart */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-sm text-gray-900 mb-4">Monthly Waste Reduction</h3>
              <div className="space-y-3">
                {[
                  { month: 'Jan', value: 850, color: 'bg-blue-500' },
                  { month: 'Feb', value: 920, color: 'bg-green-500' },
                  { month: 'Mar', value: 1050, color: 'bg-purple-500' },
                  { month: 'Apr', value: 1180, color: 'bg-orange-500' },
                ].map((item) => (
                  <div key={item.month} className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-8">{item.month}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                      <div
                        className={`${item.color} h-full rounded-full flex items-center justify-end pr-2`}
                        style={{ width: `${(item.value / 1200) * 100}%` }}
                      >
                        <span className="text-xs text-white">{item.value}kg</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-sm text-gray-900 mb-3">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'New hub approved', time: '10 min ago', type: 'success' },
                  { action: 'User report flagged', time: '1 hour ago', type: 'warning' },
                  { action: 'Listing approved', time: '2 hours ago', type: 'success' },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500' : 'bg-orange-500'
                      }`}
                    ></div>
                    <span className="flex-1 text-gray-900">{activity.action}</span>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hubs Tab */}
        {activeTab === 'hubs' && (
          <div className="px-6 pt-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-900">Pending Approvals</h3>
              <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                {pendingHubs.length} New
              </div>
            </div>

            <div className="space-y-3">
              {pendingHubs.map((hub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="mb-3">
                    <h4 className="text-gray-900 mb-1">{hub.name}</h4>
                    <p className="text-xs text-gray-500 mb-1">📍 {hub.location}</p>
                    <p className="text-xs text-gray-500">Applied by {hub.applicant} • {hub.date}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg py-2 text-sm">
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-sm text-gray-900 mb-3">Active Hubs ({45})</h3>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="space-y-3">
                  {['Green Valley Hub', 'Downtown Center', 'Eastside Market'].map((hub, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-900">{hub}</span>
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Active
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Listings Tab */}
        {activeTab === 'listings' && (
          <div className="px-6 pt-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-900">Pending Review</h3>
              <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                {pendingListings.length} New
              </div>
            </div>

            <div className="space-y-3">
              {pendingListings.map((listing, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="mb-3">
                    <h4 className="text-gray-900 mb-1">{listing.item}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {listing.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">By {listing.user} • {listing.date}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 text-sm">
                      Approve
                    </Button>
                    <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg py-2 text-sm">
                      Review
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Volunteers Tab */}
        {activeTab === 'volunteers' && (
          <div className="px-6 pt-6 space-y-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-sm text-gray-900 mb-4">Volunteer Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl text-gray-900 mb-1">145</p>
                  <p className="text-xs text-gray-500">Active Volunteers</p>
                </div>
                <div>
                  <p className="text-2xl text-gray-900 mb-1">1,280</p>
                  <p className="text-xs text-gray-500">Deliveries This Month</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-900 mb-3">Top Volunteers</h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                {[
                  { name: 'John Smith', deliveries: 45, rating: 5.0 },
                  { name: 'Emily Davis', deliveries: 38, rating: 4.9 },
                  { name: 'Michael Brown', deliveries: 32, rating: 4.8 },
                ].map((volunteer, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-900">{volunteer.name}</p>
                      <p className="text-xs text-gray-500">{volunteer.deliveries} deliveries</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-600">
                      ⭐ {volunteer.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
