import { motion } from 'motion/react';
import { ArrowLeft, Trophy, Award, Star, Target, TrendingUp, Gift, Crown } from 'lucide-react';
import { Button } from './ui/button';

interface GamificationProps {
  user: any;
  onBack: () => void;
}

export function Gamification({ user, onBack }: GamificationProps) {
  const badges = [
    { name: 'First Share', emoji: '🌱', unlocked: true },
    { name: 'Week Warrior', emoji: '🔥', unlocked: true },
    { name: 'Eco Champion', emoji: '🌍', unlocked: true },
    { name: 'Food Saver', emoji: '💚', unlocked: true },
    { name: 'Community Hero', emoji: '🦸', unlocked: false },
    { name: 'Master Chef', emoji: '👨‍🍳', unlocked: false },
  ];

  const leaderboard = [
    { rank: 1, name: 'Emma Wilson', points: 2450, avatar: '👩' },
    { rank: 2, name: 'Michael Chen', points: 2280, avatar: '👨' },
    { rank: 3, name: 'Sarah Johnson', points: 2150, avatar: '👩' },
    { rank: 45, name: user.name, points: user.points, avatar: user.name[0], isUser: true },
  ];

  const challenges = [
    { title: 'Share 1 surplus item', progress: 0, target: 1, points: 10, emoji: '📦' },
    { title: 'Cook from pantry 3 times', progress: 1, target: 3, points: 15, emoji: '👨‍🍳' },
    { title: 'Save 5kg CO₂ this week', progress: 3.2, target: 5, points: 20, emoji: '🌍' },
  ];

  const rewards = [
    { name: 'Coffee Voucher', points: 500, emoji: '☕' },
    { name: 'Grocery Discount', points: 1000, emoji: '🛒' },
    { name: 'Restaurant Meal', points: 1500, emoji: '🍽️' },
    { name: 'Eco Products Kit', points: 2000, emoji: '🎁' },
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
          <h1 className="text-xl text-green-900">Your Progress</h1>
        </div>
      </div>

      {/* Points Overview */}
      <div className="px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-6 text-center shadow-2xl mb-6"
        >
          <Trophy className="w-16 h-16 text-white mx-auto mb-3" />
          <h2 className="text-4xl text-white mb-2">{user.points}</h2>
          <p className="text-yellow-50 mb-4">Flourish Points</p>
          <div className="bg-white/20 rounded-full h-3 mb-2">
            <div className="bg-white rounded-full h-3" style={{ width: '60%' }}></div>
          </div>
          <p className="text-sm text-yellow-50">40 points to Level 4</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md"
          >
            <div className="text-3xl mb-1">🏅</div>
            <div className="text-2xl text-green-900 mb-1">12</div>
            <p className="text-xs text-green-700">Badges</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md"
          >
            <div className="text-3xl mb-1">🔥</div>
            <div className="text-2xl text-green-900 mb-1">7</div>
            <p className="text-xs text-green-700">Day Streak</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md"
          >
            <div className="text-3xl mb-1">👥</div>
            <div className="text-2xl text-green-900 mb-1">#45</div>
            <p className="text-xs text-green-700">Rank</p>
          </motion.div>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900 flex items-center gap-2">
          <Target className="w-5 h-5" />
          Daily Challenges
        </h2>

        <div className="space-y-3">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">{challenge.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-green-900 mb-1">{challenge.title}</h3>
                  <p className="text-xs text-green-600">+{challenge.points} points</p>
                </div>
              </div>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div
                  className="bg-green-600 rounded-full h-2 transition-all"
                  style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-green-700 text-right">
                {challenge.progress}/{challenge.target}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Your Badges
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * idx }}
              whileHover={{ scale: badge.unlocked ? 1.1 : 1 }}
              className={`rounded-2xl p-4 text-center shadow-md ${
                badge.unlocked
                  ? 'bg-gradient-to-br from-yellow-100 to-amber-100'
                  : 'bg-gray-200/50 grayscale'
              } backdrop-blur-sm`}
            >
              <div className="text-4xl mb-2">{badge.emoji}</div>
              <p className="text-xs text-green-900">{badge.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Leaderboard
        </h2>

        <div className="space-y-2">
          {leaderboard.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
              className={`rounded-2xl p-4 shadow-md flex items-center gap-3 ${
                entry.isUser
                  ? 'bg-gradient-to-r from-green-400/80 to-green-500/80 backdrop-blur-sm'
                  : 'bg-white/70 backdrop-blur-sm'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                  entry.rank === 1
                    ? 'bg-yellow-400 text-white'
                    : entry.rank === 2
                    ? 'bg-gray-300 text-white'
                    : entry.rank === 3
                    ? 'bg-orange-400 text-white'
                    : 'bg-green-100 text-green-900'
                }`}
              >
                {entry.rank <= 3 ? <Crown className="w-5 h-5" /> : `#${entry.rank}`}
              </div>
              <div className="flex-1">
                <h3 className={entry.isUser ? 'text-white' : 'text-green-900'}>
                  {entry.name}
                </h3>
                <p className={`text-xs ${entry.isUser ? 'text-green-50' : 'text-green-600'}`}>
                  {entry.points} points
                </p>
              </div>
              {entry.isUser && (
                <div className="bg-white/30 px-3 py-1 rounded-full text-xs text-white">
                  You
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rewards Store */}
      <div className="px-6 pb-6">
        <h2 className="text-lg mb-4 text-green-900 flex items-center gap-2">
          <Gift className="w-5 h-5" />
          Rewards Store
        </h2>

        <div className="space-y-3">
          {rewards.map((reward, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-5 shadow-md"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">{reward.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-green-900 mb-1">{reward.name}</h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-green-700">{reward.points} points</span>
                  </div>
                </div>
              </div>
              <Button
                disabled={user.points < reward.points}
                className={`w-full rounded-xl ${
                  user.points >= reward.points
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {user.points >= reward.points ? 'Redeem' : 'Not Enough Points'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
