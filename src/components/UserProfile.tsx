import { motion } from 'motion/react';
import { 
  ArrowLeft, User, Mail, MapPin, Bell, Lock, Globe, 
  HelpCircle, FileText, LogOut, ChevronRight, Award,
  TrendingUp, Package
} from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';

interface UserProfileProps {
  user: any;
  onBack: () => void;
  onLogout: () => void;
}

export function UserProfile({ user, onBack, onLogout }: UserProfileProps) {
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
          <h1 className="text-xl text-green-900">Profile</h1>
        </div>
      </div>

      {/* Profile Header */}
      <div className="px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-6 text-center shadow-lg mb-6"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
            {user.name[0].toUpperCase()}
          </div>
          <h2 className="text-2xl text-white mb-1">{user.name}</h2>
          <p className="text-green-50 mb-4">{user.email}</p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md"
          >
            <Award className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl text-green-900 mb-1">{user.points}</div>
            <p className="text-xs text-green-700">Points</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md"
          >
            <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-green-900 mb-1">{user.co2Saved}kg</div>
            <p className="text-xs text-green-700">CO₂ Saved</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md"
          >
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-green-900 mb-1">{user.mealsRescued}</div>
            <p className="text-xs text-green-700">Meals</p>
          </motion.div>
        </div>
      </div>

      {/* Account Section */}
      <div className="px-6 pb-4">
        <h3 className="text-sm text-green-700 mb-3 px-2">ACCOUNT</h3>
        
        <div className="space-y-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Edit Profile</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Email Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Location</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Change Password</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="px-6 pb-4">
        <h3 className="text-sm text-green-700 mb-3 px-2">PREFERENCES</h3>
        
        <div className="space-y-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Push Notifications</span>
            </div>
            <Switch defaultChecked />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Email Notifications</span>
            </div>
            <Switch defaultChecked />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Language</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-green-600">English</span>
              <ChevronRight className="w-5 h-5 text-green-400" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Activity Section */}
      <div className="px-6 pb-4">
        <h3 className="text-sm text-green-700 mb-3 px-2">ACTIVITY</h3>
        
        <div className="space-y-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-green-600" />
              <span className="text-green-900">My Surplus Listings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Donation History</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Points & Badges</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>
        </div>
      </div>

      {/* Support Section */}
      <div className="px-6 pb-4">
        <h3 className="text-sm text-green-700 mb-3 px-2">SUPPORT</h3>
        
        <div className="space-y-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Help Center</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Terms & Policies</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-600" />
              <span className="text-green-900">About FoodFlow</span>
            </div>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </motion.button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6 pb-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={onLogout}
          className="w-full bg-red-500/80 hover:bg-red-600/80 backdrop-blur-sm rounded-2xl p-4 shadow-md flex items-center justify-center gap-3 text-white"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </motion.button>
      </div>

      {/* App Version */}
      <div className="text-center pb-6 text-xs text-green-600">
        FoodFlow v1.0.0
      </div>
    </div>
  );
}
