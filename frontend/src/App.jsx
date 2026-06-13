
import './App.css'
import ClerkProviderWithRoutes from './auth/ClerkProviderWithRoutes';
import { Routes, Route } from 'react-router-dom';
import { LayOut } from './layout/LayOut';
import { AuthenticationPage } from './auth/AuthenticationPage';
import { ChallengeGenerator } from './challenge/ChallengeGenerator';
import { MCQChallenge } from './challenge/MCQChallenge';
import { HistoryPanel } from './history/HistoryPanel';

function App() {
  return <ClerkProviderWithRoutes>
    <Routes>
      <Route path="/sign-in/*" element={<AuthenticationPage />} />
      <Route path="/sign-up" element={<AuthenticationPage />} />
      <Route path="/" element={<LayOut />}>
        <Route path="/" element={<ChallengeGenerator />} />
        <Route path="/history" element={<HistoryPanel />} />
      </Route>
    </Routes>
  </ClerkProviderWithRoutes>
}

export default App
