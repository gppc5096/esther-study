export const GRANDFATHER_MESSAGES = [
  {
    type: 'GENERAL',
    messages: [
      '서현아, 할아버지가 늘 응원한단다!',
      '우리 서현이가 이렇게 열심히 공부하는 모습이 정말 자랑스럽구나.',
      '오늘도 즐겁게 공부하자! 할아버지가 항상 곁에서 응원할게.',
      '서현아, 할아버지는 네가 무엇을 하든 항상 네 편이란다.',
      '우리 서현이는 정말 특별하고 소중한 아이야. 할아버지가 많이 사랑한단다.'
    ]
  },
  {
    type: 'STUDY',
    messages: [
      '수학 문제를 잘 풀고 있구나! 정말 대단해!',
      '어려운 문제도 포기하지 않고 도전하는 모습이 멋지다!',
      '조금씩 발전하는 모습이 보여서 할아버지가 너무 기쁘구나.',
      '오늘도 열심히 공부하는 우리 서현이가 자랑스럽다!',
      '틀린 문제도 다시 한번 도전하는 모습이 정말 훌륭해!'
    ]
  },
  {
    type: 'ACHIEVEMENT',
    messages: [
      '와! 높은 점수를 받았구나! 정말 대단하다!',
      '이렇게 좋은 성과를 내다니, 할아버지가 정말 자랑스럽구나!',
      '열심히 노력한 결과가 보이는구나. 정말 잘했어!',
      '우리 서현이는 할 수 있다는 걸 보여줬구나. 정말 멋져!',
      '이번 성과를 축하하며, 다음에는 더 잘할 수 있을 거야!'
    ]
  }
];

export const getRandomMessage = (type = 'GENERAL') => {
  const messageGroup = GRANDFATHER_MESSAGES.find(group => group.type === type);
  const messages = messageGroup ? messageGroup.messages : GRANDFATHER_MESSAGES[0].messages;
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}; 