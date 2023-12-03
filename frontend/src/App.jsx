import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// React.lazy to lazily load components
const Home = lazy(() => import('./pages/Home'));
const BestPage = lazy(() => import('./pages/BestPage'));
const FreshPage = lazy(() => import('./pages/FreshPage'));
const Game = lazy(() => import('./pages/Game'));

import "./pages/styles/Grid.css";
import "./pages/styles/Page.css";
import './App.css';

function App() {  
  const [sidebar, setSidebar] = useState(false);

  const sideFunc = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <Navbar click={sideFunc} />
      <Sidebar click={sideFunc} effect={sidebar} />
      <Suspense fallback={<div className="Page">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best" element={<BestPage />} />
          <Route path="/new" element={<FreshPage />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

