import { Link } from 'react-router-dom'
import { useGame } from '../state/GameContext'
import { LEVEL_LABELS, LEVEL_ORDER, XP_BY_LEVEL, questionsByLevel } from '../data/questions'
import { GROUP_BY_LEVEL, GROUP_LABELS, minicoursesByGroup } from '../data/minicourses'
import {
  gameStageStatus,
  groupCompletedCount,
  isJourneyComplete,
  levelCompletedCount,
  minicourseGroupStatus,
  minicourseStatus,
} from '../state/progress'
import StatusBadge from '../components/StatusBadge'

export default function Journey() {
  const { state } = useGame()
  const journeyDone = isJourneyComplete(state)

  return (
    <div>
      <h1 className="section-title">Sua jornada</h1>
      <p className="section-sub">
        Siga a ordem: jogo → minicursos do nível → próximo jogo. Cada etapa desbloqueia a seguinte.
      </p>

      {LEVEL_ORDER.map((level) => {
        const gameStatus = gameStageStatus(state, level)
        const gameLocked = gameStatus === 'bloqueado'
        const done = levelCompletedCount(state, level)
        const total = questionsByLevel(level).length

        const group = GROUP_BY_LEVEL[level]
        const groupStatus = minicourseGroupStatus(state, level)
        const groupLocked = groupStatus === 'bloqueado'
        const mcDone = groupCompletedCount(state, level)
        const mcList = minicoursesByGroup(group)

        return (
          <section key={level} style={{ marginBottom: '1.5rem' }}>
            {/* Jogo do nível */}
            <div className={`card level-card ${gameLocked ? 'locked' : ''}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <span className="tag">Jogo · {XP_BY_LEVEL[level]} XP por acerto</span>
                  <h2 style={{ margin: '0.2rem 0' }}>Nível {LEVEL_LABELS[level]}</h2>
                  <p style={{ margin: 0, color: 'var(--cs-texto-suave)' }}>
                    {done}/{total} perguntas concluídas
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <StatusBadge status={gameStatus} />
                  <div style={{ marginTop: '0.6rem' }}>
                    {gameLocked ? (
                      <span className="notice">Conclua os minicursos do nível anterior para desbloquear.</span>
                    ) : (
                      <Link className="btn btn-primary btn-sm" to={`/jogo/${level}`}>
                        {gameStatus === 'concluido' ? 'Revisar jogo' : 'Jogar'}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Minicursos do nível */}
            <div className={`card level-card ${groupLocked ? 'locked' : ''}`} style={{ marginTop: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <span className="tag">Minicursos {GROUP_LABELS[group]}</span>
                  <h3 style={{ margin: '0.2rem 0' }}>4 minicursos · 5 etapas cada</h3>
                  <p style={{ margin: 0, color: 'var(--cs-texto-suave)' }}>{mcDone}/{mcList.length} concluídos</p>
                </div>
                <StatusBadge status={groupStatus} />
              </div>

              {groupLocked ? (
                <p className="notice" style={{ marginTop: '0.75rem' }}>
                  Conclua as {total} perguntas do jogo {LEVEL_LABELS[level]} para desbloquear estes minicursos.
                </p>
              ) : (
                <div className="grid cols-2" style={{ marginTop: '0.9rem' }}>
                  {mcList.map((mc) => {
                    const st = minicourseStatus(state, level, mc.id)
                    return (
                      <div key={mc.id} className="card" style={{ boxShadow: 'none' }}>
                        <StatusBadge status={st} />
                        <h4 style={{ margin: '0.4rem 0 0.2rem' }}>{mc.title}</h4>
                        <p style={{ margin: '0 0 0.6rem', color: 'var(--cs-texto-suave)', fontSize: '0.9rem' }}>
                          {mc.summary}
                        </p>
                        <Link className="btn btn-ghost btn-sm" to={`/minicurso/${mc.id}`}>
                          {st === 'concluido' ? 'Revisar' : 'Abrir minicurso'}
                        </Link>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </section>
        )
      })}

      <section className="card" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Meu Próximo Passo na Cloud</h2>
        {journeyDone ? (
          <>
            <p>Parabéns! Você concluiu toda a jornada obrigatória.</p>
            <Link className="btn btn-primary" to="/proximo-passo">
              Ver recomendação de curso AWS
            </Link>
          </>
        ) : (
          <p className="notice">
            A recomendação final de curso AWS é liberada após concluir os 3 jogos e os 12 minicursos.
          </p>
        )}
      </section>
    </div>
  )
}
