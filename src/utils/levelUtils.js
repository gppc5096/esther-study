export const calculateLevel = (points) => {
  if (points < 100) return { name: '초보', icon: '🌱' };
  if (points < 200) return { name: '중급', icon: '🌿' };
  return { name: '고급', icon: '🌳' };
}; 