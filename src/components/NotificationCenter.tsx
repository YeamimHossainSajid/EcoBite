import { motion } from 'motion/react';
import { ArrowLeft, Bell, Package, Award, MapPin, Clock, Heart, AlertCircle, Mail } from 'lucide-react';
import { Button } from './ui/button';

interface NotificationCenterProps {
  user: any;
  onBack: () => void;
}

export function NotificationCenter({ user, onBack }: NotificationCenterProps) {
  const notifications = [
    {
      id: 1,
      type: 'pickup',
      icon: Package,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Pickup Reminder',
      message: 'Your rescue box is ready for pickup at Green Valley Hub',
      time: '10 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'expiry',
      icon: AlertCircle,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Items Expiring Soon',
      message: 'Milk and eggs in your pantry expire in 2 days',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      type: 'reward',
      icon: Award,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Achievement Unlocked!',
      message: 'You earned the "Eco Warrior" badge 🏆',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 4,
      type: 'donation',
      icon: Heart,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Donation Completed',
      message: '50 meals delivered to Hope Foundation',
      time: '5 hours ago',
      read: true,
    },
    {
      id: 5,
      type: 'hub',
      icon: MapPin,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'New Hub Nearby',
      message: 'Community Center hub just opened 1.2 km away',
      time: 'Yesterday',
      read: true,
    },
    {
      id: 6,
      type: 'listing',
      icon: Package,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'New Surplus Available',
      message: 'Fresh vegetables available 0.3 km from you',
      time: 'Yesterday',
      read: true,
    },
    {
      id: 7,
      type: 'verification',
      icon: Mail,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Email Verified',
      message: 'Your email has been successfully verified',
      time: '2 days ago',
      read: true,
    },
    {
      id: 8,
      type: 'points',
      icon: Award,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Points Earned',
      message: 'You earned 15 points for sharing surplus food',
      time: '2 days ago',
      read: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Button
            onClick={onBack}
            className="bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg text-gray-900 flex-1">Notifications</h1>
          {unreadCount > 0 && (
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadCount} New
            </div>
          )}
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Mark All Read */}
        {unreadCount > 0 && (
          <div className="px-6 pt-4">
            <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl py-3 text-sm">
              Mark All as Read
            </Button>
          </div>
        )}

        {/* Notifications List */}
        <div className="px-6 pt-4 space-y-2">
          {notifications.map((notification, idx) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-xl p-4 shadow-sm border cursor-pointer transition-all hover:shadow-md ${
                notification.read
                  ? 'bg-white border-gray-100'
                  : 'bg-green-50 border-green-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 ${notification.iconBg} rounded-full flex items-center justify-center shrink-0`}>
                  <notification.icon className={`w-5 h-5 ${notification.iconColor}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={`text-sm ${notification.read ? 'text-gray-900' : 'text-gray-900'}`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-green-500 rounded-full shrink-0 mt-1"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State (for when there are no notifications) */}
        {notifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 pt-20 text-center"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">No Notifications</h3>
            <p className="text-sm text-gray-500">We'll notify you when something new happens</p>
          </motion.div>
        )}

        {/* Notification Settings */}
        <div className="px-6 pt-6 pb-6">
          <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-xl py-5">
            Notification Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
