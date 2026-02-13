import { useAuth } from '../contexts/AuthContext';
import { Brain, Apple, Activity } from 'lucide-react';

export default function Dashboard() {
  const { profile } = useAuth();

  const wellnessCards = [
    {
      title: 'Mindfulness',
      description: 'Practice meditation and breathing exercises to find inner peace',
      icon: Brain,
      gradient: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Nutrition',
      description: 'Discover healthy recipes and meal plans for balanced living',
      icon: Apple,
      gradient: 'from-green-400 to-emerald-400',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Movement',
      description: 'Explore exercises and activities to keep your body energized',
      icon: Activity,
      gradient: 'from-orange-400 to-amber-400',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Welcome back, {profile?.name || 'Friend'}!
          </h1>
          <p className="text-xl text-gray-600">
            Choose a wellness area to explore today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {wellnessCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.title}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 text-left overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`${card.bgColor} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-gray-700" />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {card.description}
                </p>

                <div className={`inline-block bg-gradient-to-r ${card.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:shadow-md transition-shadow`}>
                  Explore →
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Your Wellness Journey
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Track your progress and build healthy habits one day at a time. Each step you take towards mindfulness, nutrition, and movement brings you closer to your wellness goals.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-2 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            <div className="h-2 w-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
            <div className="h-2 w-24 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
