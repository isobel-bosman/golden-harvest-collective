import { useState } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  const modes = ['light', 'dark'];
  const [mode] = useState<string>(modes[0]);

  return (
    <div
      className={[`theme-${mode}`, `flex min-h-screen flex-col`]
        .filter(Boolean)
        .join(' ')}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
