import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../state/GameContext'
import type { KnowledgeLevel } from '../state/types'

const KNOWLEDGE_OPTIONS: { value: KnowledgeLevel; label: string; desc: string }[] = [
  { value: 'iniciante', label: 'Iniciante', desc: 'Pouco ou nenhum conhecimento.' },
  { value: 'intermediario', label: 'Intermediário', desc: 'Já conheço conceitos básicos de IA, Cloud e AWS.' },
  { value: 'avancado', label: 'Avançado', desc: 'Tenho experiência e quero desafios mais complexos.' },
]

export default function Home() {
  const { state, startJourney } = useGame()
  const navigate = useNavigate()
  const [name, setName] = useState(state.profile.displayName)
  const [level, setLevel] = useState<KnowledgeLevel | ''>(state.profile.knowledgeLevel ?? '')
  const [showForm, setShowForm] = useState(false)

  function handleStart(e: React.FormEvent) {
    e.preventDefault()
    if (!level) return
    startJourney(name || 'Participante', level)
    navigate('/jornada')
  }

  return (
    <div>
      <section className="hero">
        <div className="slogan">Aprenda, jogue e evolua na carreira em Cloud.</div>
        <h1>Cloud Sisters</h1>
        <p>
          Uma jornada gamificada para mulheres aprenderem Cloud Computing, evoluírem com orientação personalizada e se
          conectarem com outras profissionais. Jogue, desbloqueie minicursos e acompanhe sua evolução.
        </p>
        {!showForm ? (
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            Começar jornada 🚀
          </button>
        ) : null}
      </section>

      {showForm ? (
        <section className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="section-title">Vamos personalizar sua jornada</h2>
          <p className="section-sub">Conte seu nome e seu nível de conhecimento atual.</p>
          <form onSubmit={handleStart}>
            <div className="field">
              <label htmlFor="name">Nome de exibição</label>
              <input
                id="name"
                className="input"
                value={name}
                maxLength={60}
                placeholder="Como quer ser chamada?"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Seu conhecimento atual em tecnologia (IA e Cloud)</label>
              <div className="grid cols-3" style={{ marginTop: '0.5rem' }}>
                {KNOWLEDGE_OPTIONS.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    className={`option-btn ${level === opt.value ? 'correct' : ''}`}
                    aria-pressed={level === opt.value}
                    onClick={() => setLevel(opt.value)}
                  >
                    <strong>{opt.label}</strong>
                    <br />
                    <span style={{ fontSize: '0.85rem', color: 'var(--cs-texto-suave)' }}>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
            <p className="notice">
              Nesta versão demonstrativa, o nível informado personaliza a apresentação, mas não permite pular etapas: a
              jornada é obrigatória e sequencial.
            </p>
            <button type="submit" className="btn btn-primary" disabled={!level}>
              Iniciar jornada
            </button>
          </form>
        </section>
      ) : (
        <section className="grid cols-3 pillars">
          <div className="card pillar">
            <h3>📚 Aprender</h3>
            <p>Jogo com 3 níveis e 30 perguntas de Cloud, mais 12 minicursos progressivos.</p>
          </div>
          <div className="card pillar">
            <h3>📈 Evoluir</h3>
            <p>Dashboard de XP e competências, com recomendação final de curso AWS.</p>
          </div>
          <div className="card pillar">
            <h3>🤝 Conectar</h3>
            <p>Cloud Sisters Community para networking profissional (prévia visual nesta versão).</p>
          </div>
        </section>
      )}
    </div>
  )
}
