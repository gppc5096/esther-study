import useLocalStorage from './useLocalStorage';
import { BADGES, calculateLevel } from '../types/rewards';

function useRewards() {
  const [rewards, setRewards] = useLocalStorage('rewards', {
    badges: [],
    perfectStreak: 0,
    lastCorrect: true
  });

  const checkBadges = (learningData) => {
    const newBadges = [];
    
    Object.values(BADGES).forEach(badgeGroup => {
      badgeGroup.forEach(badge => {
        if (!rewards.badges.includes(badge.id) && badge.condition(learningData)) {
          newBadges.push(badge.id);
        }
      });
    });

    if (newBadges.length > 0) {
      setRewards(prev => ({
        ...prev,
        badges: [...prev.badges, ...newBadges]
      }));
      return newBadges;
    }

    return [];
  };

  const updatePerfectStreak = (isCorrect) => {
    setRewards(prev => ({
      ...prev,
      perfectStreak: isCorrect ? (prev.lastCorrect ? prev.perfectStreak + 1 : 1) : 0,
      lastCorrect: isCorrect
    }));
  };

  const getBadge = (badgeId) => {
    for (const group of Object.values(BADGES)) {
      const badge = group.find(b => b.id === badgeId);
      if (badge) return badge;
    }
    return null;
  };

  const getEarnedBadges = () => {
    return rewards.badges.map(getBadge).filter(Boolean);
  };

  return {
    rewards,
    checkBadges,
    updatePerfectStreak,
    getEarnedBadges,
    calculateLevel
  };
}

export default useRewards; 