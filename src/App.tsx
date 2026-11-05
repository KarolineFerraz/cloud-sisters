import { NavLink, Route, Routes } from 'react-router-dom'
import { useGame } from './state/GameContext'
import { totalXp } from './state/progress'
import Home from './pages/Home'
import Journey from './pages/Journey'
import GameLevel from './pages/GameLevel'
import MinicoursePage from './pages/MinicoursePage'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import MentoraAI from './pages/MentoraAI'
import NextStep from './pages/NextStep'

export default function App() {
  const { state } = useGame()
  const xp = totalXp(state)

  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <span className="logo">CS</span>
          Cloud Sisters
        </NavLink>
        <nav className="nav" aria-label="Navegação principal">
          <NavLink to="/jornada">Aprender</NavLink>
          <NavLink to="/dashboard">Evoluir</NavLink>
          <NavLink to="/comunidade">Conectar</NavLink>
          <NavLink to="/mentora">Cloud Sisters AI</NavLink>
        </nav>
        <div className="topbar-right">
          <span className="xp-pill" aria-label={`Total de XP: ${xp}`}>⭐ {xp} XP</span>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jornada" element={<Journey />} />
          <Route path="/jogo/:level" element={<GameLevel />} />
          <Route path="/minicurso/:id" element={<MinicoursePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/comunidade" element={<Community />} />
          <Route path="/mentora" element={<MentoraAI />} />
          <Route path="/proximo-passo" element={<NextStep />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer">
        Cloud Sisters · "Aprenda, jogue e evolua na carreira em Cloud." · Versão demonstrativa (progresso salvo
        localmente neste navegador).
      </footer>
    </div>
  )
}
