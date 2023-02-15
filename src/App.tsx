import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'

// Core Pages
import Home from './components/pages/core/Home'
import About from './components/pages/core/About'
import Projects from './components/pages/projects/Projects'
import NotFound from './components/pages/core/NotFound'

// Projects
import Perception from './components/pages/projects/Perception'
import Ruperf from './components/pages/projects/Ruperf'
import StreetFighterDQN from './components/pages/projects/StreetFighterDQN'
import PortfolioSite from "./components/pages/projects/PortfolioSite";

// Stuff
import UnityReactionSpeedTest from './components/pages/projects/UnityReactionSpeedTest'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Core */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          {/* Projects */}
          <Route path='/projects/perception' element={<Perception />} />
          <Route path='/projects/ruperf' element={<Ruperf />} />
          <Route
            path='/projects/street-fighter-dqn'
            element={<StreetFighterDQN />}
          />
          <Route
              path='/projects/portfolio-site'
              element={<PortfolioSite />}
          />
          {/* Stuff */}
          <Route
            path='/projects/unity-reaction-speed-test'
            element={<UnityReactionSpeedTest />}
          />
          {/* 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
