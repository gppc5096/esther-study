console.log('서버 스크립트 시작');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAI } = require('openai');

console.log('의존성 로드 완료');

const app = express();
const port = 5001;
console.log('설정된 포트:', process.env.PORT);
console.log('사용할 포트:', port);

// 미들웨어 설정
app.use(cors());
app.use(express.json());

console.log('미들웨어 설정 완료');

// OpenAI 설정
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log('OpenAI 클라이언트 설정 완료');

// 챗봇 엔드포인트
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: '메시지가 필요합니다.' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: '당신은 할아버지입니다. 손녀와 따뜻한 대화를 나눕니다.' },
        { role: 'user', content: message },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content.trim();
    res.json({ reply });
  } catch (error) {
    console.error('OpenAI API 오류:', error);
    res.status(500).json({ error: '챗봇 응답을 생성하는 중 오류가 발생했습니다.' });
  }
});

// 기본 테스트 엔드포인트
app.get('/', (req, res) => {
  res.send('서버가 정상적으로 실행 중입니다.');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
}); 