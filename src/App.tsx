import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartsPage from './pages/starts.page';
import ConfigPage from './pages/config.page';
import LogoutPage from './pages/logout.page';
import UnauthPage from './pages/unauth.page';

export default function App() {
  return (
    <BrowserRouter basename="/auth/">
      <Routes>
        <Route path="/starts" element={<StartsPage />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/unauth" element={<UnauthPage />} />
      </Routes>
    </BrowserRouter>
  )
};
