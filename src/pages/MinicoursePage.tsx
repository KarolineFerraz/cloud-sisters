import { Link, useParams } from 'react-router-dom'
import { useGame } from '../state/GameContext'
import { minicourses } from '../data/minicourses'
import { LEVEL_ORDER } from '../data/questions'
import { GROUP_BY_LEVEL } from '../data/minicourses'
import { isMinicourseGroupUnlocked } from '../state/progress'
import ProgressBar from '../components/ProgressBar'

export default function MinicoursePage() {
  const { id } = useParams()
  const { state, startMinicourse, completeMinicourseStep } = useGame()

  const mc = minicourses.find((m) => m.id === id)
  if (!mc) {
    return <p className="notice">Minicurso não encontrado. <Link to="/jornada">Voltar</Link></p>
  }

  // nível de jogo que controla o desbloqueio deste grupo
  const level = LEVEL_ORDER.find((lvl) => GROUP_BY_LEVEL[lvl] === mc.group)!
  if (!isMinicourseGroupUnlocked(state, level)) {
    return (
      <div className="card">
        <h1 className="section-title">Minicurso bloqueado</h1>
        <p className="notice">Conclua o jogo do nível correspondente para desbloquear este minicurso.</p>
        <Link className="btn btn-ghost" to="/jornada">Voltar à jornada</Link>
      </div>
    )
  }

  const progress = state.minicourseProgress[mc.id]
  const started = Boolean(progress?.startedAt)
  const stepsDone = progress?.stepsDone ?? []
  const completed = Boolean(progress?.completedAt)

  return (
    <div>
      <Link className="inline-link" to="/jornada">← Voltar à jornada</Link>
      <h1 className="section-title" style={{ marginTop: '0.5rem' }}>{mc.title}</h1>
      <p className="section-sub">{mc.summary}</p>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <strong>{stepsDone.length}/{mc.steps.length} etapas concluídas</strong>
          {!started ? (
            <button className="btn btn-primary" onClick={() => startMinicourse(mc.id)}>
              Iniciar minicurso
            </button>
          ) : completed ? (
            <span className="badge concluido">Concluído</span>
          ) : (
            <span className="badge em_andamento">Em andamento</span>
          )}
        </div>
        <div style={{ marginTop: '0.75rem' }}>
          <ProgressBar value={stepsDone.length} max={mc.steps.length} />
        </div>

        {started && (
          <p className="notice" style={{ marginTop: '0.75rem' }}>
            O prazo sugerido de 5 dias é educativo: você pode concluir antes ou continuar depois sem perder progresso.
          </p>
        )}
      </div>

      {!started ? (
        <p className="notice" style={{ marginTop: '1rem' }}>
          Clique em "Iniciar minicurso" para liberar as etapas.
        </p>
      ) : (
        <ol className="steps-list" style={{ marginTop: '1rem' }}>
          {mc.steps.map((step) => {
            const done = stepsDone.includes(step.no)
            // a etapa só pode ser concluída em ordem
            const canDo = step.no === (stepsDone.length + 1)
            return (
              <li key={step.no} className={`step-item ${done ? 'done' : ''}`}>
                <div>
                  <strong>Etapa {step.no}: {step.title}</strong>
                  <p style={{ margin: '0.2rem 0 0', color: 'var(--cs-texto-suave)', fontSize: '0.92rem' }}>
                    {step.content}
                  </p>
                </div>
                {done ? (
                  <span className="badge concluido">Feita</span>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    disabled={!canDo}
                    onClick={() => completeMinicourseStep(mc.id, step.no)}
                  >
                    {step.kind === 'avaliacao' ? 'Concluir avaliação' : 'Concluir etapa'}
                  </button>
                )}
              </li>
            )
          })}
        </ol>
      )}

      {completed ? (
        <div className="card" style={{ marginTop: '1rem', textAlign: 'center' }}>
          <strong>Minicurso concluído! 🎓</strong>
          <p style={{ color: 'var(--cs-texto-suave)' }}>Volte à jornada para avançar.</p>
          <Link className="btn btn-primary" to="/jornada">Continuar jornada</Link>
        </div>
      ) : null}
    </div>
  )
}
