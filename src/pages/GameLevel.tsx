import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGame } from '../state/GameContext'
import { LEVEL_LABELS, LEVEL_ORDER, XP_BY_LEVEL, questionsByLevel } from '../data/questions'
import type { LevelId } from '../data/questions'
import { isGameLevelUnlocked } from '../state/progress'
import ProgressBar from '../components/ProgressBar'

function isLevelId(v: string | undefined): v is LevelId {
  return v === 'iniciante' || v === 'intermediario' || v === 'expert'
}

export default function GameLevel() {
  const { level } = useParams()
  const navigate = useNavigate()
  const { state, answerQuestion } = useGame()

  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean; revealed: boolean } | null>(null)

  const list = useMemo(() => (isLevelId(level) ? questionsByLevel(level) : []), [level])

  if (!isLevelId(level)) {
    return <p className="notice">Nível inválido. <Link to="/jornada">Voltar à jornada</Link></p>
  }

  if (!isGameLevelUnlocked(state, level)) {
    return (
      <div className="card">
        <h1 className="section-title">Nível bloqueado</h1>
        <p className="notice">Conclua os minicursos do nível anterior para desbloquear o jogo {LEVEL_LABELS[level]}.</p>
        <Link className="btn btn-ghost" to="/jornada">Voltar à jornada</Link>
      </div>
    )
  }

  // encontra a primeira pergunta não concluída
  const currentIndex = list.findIndex((q) => !state.questionResults[q.id]?.completed)
  const allDone = currentIndex === -1
  const question = allDone ? null : list[currentIndex]
  const result = question ? state.questionResults[question.id] : undefined
  const attempts = result?.attempts ?? 0

  function choose(optionIndex: number) {
    if (!question || feedback?.revealed || feedback?.correct) return
    setSelected(optionIndex)
    const r = answerQuestion(question.id, optionIndex)
    setFeedback(r)
    if (!r.correct && !r.revealed) {
      // errou a 1ª tentativa: permite tentar de novo
      setTimeout(() => {
        setSelected(null)
        setFeedback(null)
      }, 900)
    }
  }

  function next() {
    setSelected(null)
    setFeedback(null)
  }

  const doneCount = list.filter((q) => state.questionResults[q.id]?.completed).length

  if (allDone) {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <span className="tag">Nível {LEVEL_LABELS[level]}</span>
        <h1 className="section-title">Jogo concluído! 🎉</h1>
        <p>Você concluiu as {list.length} perguntas deste nível.</p>
        <p className="notice">Os minicursos {LEVEL_LABELS[level]} estão desbloqueados na jornada.</p>
        <Link className="btn btn-primary" to="/jornada">Ver minicursos</Link>
      </div>
    )
  }

  const q = question!

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h1 className="section-title">Jogo · {LEVEL_LABELS[level]}</h1>
        <span className="tag">{XP_BY_LEVEL[level]} XP por acerto</span>
      </div>
      <div style={{ margin: '0.5rem 0 1rem' }}>
        <ProgressBar value={doneCount} max={list.length} />
        <small style={{ color: 'var(--cs-texto-suave)' }}>
          Pergunta {doneCount + 1} de {list.length}
        </small>
      </div>

      <div className="card">
        <span className="tag">{q.subject}</span>
        <h2 style={{ marginTop: '0.3rem' }}>{q.statement}</h2>

        {q.options.map((opt, i) => {
          let cls = 'option-btn'
          if (feedback) {
            if (i === q.correctIndex && (feedback.correct || feedback.revealed)) cls += ' correct'
            else if (i === selected && !feedback.correct) cls += ' wrong'
          }
          const locked = Boolean(feedback?.correct || feedback?.revealed)
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={locked}>
              {opt}
            </button>
          )
        })}

        {feedback && !feedback.correct && !feedback.revealed ? (
          <p className="notice">Ops, não foi dessa vez. Você tem mais uma tentativa.</p>
        ) : null}

        {attempts >= 1 && feedback && !feedback.correct && !feedback.revealed ? (
          <small style={{ color: 'var(--cs-texto-suave)' }}>Tentativa 2 de 2</small>
        ) : null}

        {feedback?.correct ? (
          <div className="explanation">
            <strong>Correto! +{XP_BY_LEVEL[level]} XP</strong>
            <p style={{ margin: '0.4rem 0 0' }}>{q.explanation}</p>
          </div>
        ) : null}

        {feedback?.revealed ? (
          <div className="explanation">
            <strong>Resposta correta: {q.options[q.correctIndex]}</strong>
            <p style={{ margin: '0.4rem 0 0' }}>{q.explanation}</p>
            <p style={{ margin: '0.4rem 0 0', color: 'var(--cs-texto-suave)' }}>
              Sem XP nesta pergunta, mas o conteúdo fica registrado para sua evolução.
            </p>
          </div>
        ) : null}

        {feedback?.correct || feedback?.revealed ? (
          <div style={{ marginTop: '1rem' }}>
            <button className="btn btn-primary" onClick={next}>
              Próxima pergunta →
            </button>
          </div>
        ) : null}
      </div>

      <p style={{ marginTop: '1rem' }}>
        <button className="inline-link" onClick={() => navigate('/jornada')}>
          Voltar à jornada
        </button>
      </p>
    </div>
  )
}
