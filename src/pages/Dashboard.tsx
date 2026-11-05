import { Link } from 'react-router-dom'
import { useGame } from '../state/GameContext'
import { LEVEL_LABELS, LEVEL_ORDER, questions, questionsByLevel } from '../data/questions'
import { minicourses } from '../data/minicourses'
import {
  isJourneyComplete,
  levelCompletedCount,
  levelXp,
  totalXp,
} from '../state/progress'
import ProgressBar from '../components/ProgressBar'

interface SkillStat {
  subject: string
  correct: number
  total: number
}

export default function Dashboard() {
  const { state, resetProgress } = useGame()

  const xp = totalXp(state)
  const maxXp = 600

  // competências por assunto
  const bySubject = new Map<string, SkillStat>()
  for (const q of questions) {
    const res = state.questionResults[q.id]
    const entry = bySubject.get(q.subject) ?? { subject: q.subject, correct: 0, total: 0 }
    if (res?.completed) {
      entry.total += 1
      if (res.correct) entry.correct += 1
    }
    bySubject.set(q.subject, entry)
  }
  const skills = [...bySubject.values()].filter((s) => s.total > 0)

  const mcDone = minicourses.filter((m) => state.minicourseProgress[m.id]?.completedAt).length
  const questionsDone = questions.filter((q) => state.questionResults[q.id]?.completed).length
  const journeyDone = isJourneyComplete(state)

  function handleReset() {
    if (confirm('Tem certeza que deseja reiniciar a jornada? Isso apaga seu progresso salvo neste navegador.')) {
      resetProgress()
    }
  }

  return (
    <div>
      <h1 className="section-title">Evoluir · Dashboard</h1>
      <p className="section-sub">
        {state.profile.displayName ? `Olá, ${state.profile.displayName}! ` : ''}
        Acompanhe seu XP, progresso e competências.
      </p>

      <div className="grid cols-3">
        <div className="card stat">
          <div className="num">{xp}</div>
          <div className="lbl">XP de {maxXp}</div>
        </div>
        <div className="card stat">
          <div className="num">{questionsDone}/30</div>
          <div className="lbl">Perguntas concluídas</div>
        </div>
        <div className="card stat">
          <div className="num">{mcDone}/12</div>
          <div className="lbl">Minicursos concluídos</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h2 className="section-title">XP total</h2>
        <ProgressBar value={xp} max={maxXp} />
        <div className="grid cols-3" style={{ marginTop: '1rem' }}>
          {LEVEL_ORDER.map((lvl) => (
            <div key={lvl}>
              <div className="skill-label">
                <span>{LEVEL_LABELS[lvl]}</span>
                <span>
                  {levelCompletedCount(state, lvl)}/{questionsByLevel(lvl).length}
                </span>
              </div>
              <ProgressBar value={levelXp(state, lvl)} max={lvl === 'iniciante' ? 100 : lvl === 'intermediario' ? 200 : 300} />
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h2 className="section-title">Competências por assunto</h2>
        {skills.length === 0 ? (
          <p className="notice">Responda perguntas no jogo para ver suas competências aqui.</p>
        ) : (
          skills.map((s) => (
            <div key={s.subject} className="skill-row">
              <div className="skill-label">
                <span>{s.subject}</span>
                <span>
                  {s.correct}/{s.total} acertos
                </span>
              </div>
              <ProgressBar value={s.correct} max={s.total} />
            </div>
          ))
        )}
      </div>

      <div className="card" style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link className="btn btn-ghost" to="/jornada">Ir para a jornada</Link>
        {journeyDone ? (
          <Link className="btn btn-primary" to="/proximo-passo">Ver recomendação AWS</Link>
        ) : null}
        <button className="btn btn-ghost" onClick={handleReset} style={{ marginLeft: 'auto', borderColor: 'var(--cs-erro)', color: 'var(--cs-erro)' }}>
          Reiniciar jornada
        </button>
      </div>
    </div>
  )
}
