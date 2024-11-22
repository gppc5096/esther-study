import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Messages from './pages/Messages';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import { LearningProvider } from './contexts/LearningContext';

// 페이지 래퍼 컴포넌트
function PageWrapper({ children }) {
  const location = useLocation();
  
  // 현재 경로에 따라 페이지 클래스 결정
  const getPageClass = () => {
    switch (location.pathname) {
      case '/':
        return 'home-page';
      case '/learning':
        return 'learning-page';
      case '/messages':
        return 'messages-page';
      case '/statistics':
        return 'statistics-page';
      case '/settings':
        return 'settings-page';
      default:
        return '';
    }
  };

  return (
    <div className={getPageClass()}>
      {children}
    </div>
  );
}

function App() {
  return (
    <LearningProvider>
      <Router>
        <Layout>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </PageWrapper>
        </Layout>
      </Router>
    </LearningProvider>
  );
}

export default App;
