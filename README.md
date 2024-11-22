# 서현이와 함께 떠나는 수학나라 여행 🎨

초등학교 3-4학년을 위한 맞춤형 수학 학습 웹 애플리케이션입니다. 할아버지의 사랑이 담긴 특별한 학습 도구입니다.

## 주요 기능 ✨

- 초등 수학 교과과정 기반 학습 콘텐츠
- 랜덤 문제 출제 시스템
- 포인트 및 보상 시스템
- 할아버지에게 이메일 보내기
- 가족 응원 메시지 게시판

## 기술 스택 🛠

- **Frontend**: Remix Framework
- **스타일링**: Tailwind CSS
- **폰트**: Gowun Dodum (Google Fonts)
- **아이콘/애니메이션**: Lottie Files, FontAwesome
- **이메일 서비스**: Nodemailer + Gmail SMTP
- **데이터 저장소**: Local Storage
- **배포**: Vercel

## 시작하기 🚀

프로젝트 실행을 위한 단계별 가이드:

```bash
# 저장소 복제
git clone [repository-url]

# 종속성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 사용 가능한 스크립트 📝

- `npm run dev`: 개발 모드로 앱 실행
- `npm run build`: 프로덕션용 빌드 생성
- `npm start`: 프로덕션 모드로 앱 실행
- `npm test`: 테스트 실행

## 프로젝트 구조 📁

```
src/
├── components/
│   ├── MathProblems.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── GrandfatherMessage.jsx
├── pages/
│   ├── Home.jsx
│   ├── Learning.jsx
│   └── Messages.jsx
└── utils/
    ├── emailService.js
    └── randomProblem.js
```

## 연락처 📧

프로젝트에 대한 문의나 제안사항이 있으시다면 언제든 연락주세요.

## 라이선스 📄

이 프로젝트는 MIT 라이선스를 따릅니다.