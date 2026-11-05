import { Link } from 'react-router-dom'
import { useGame } from '../state/GameContext'
import { LEVEL_ORDER, questions } from '../data/questions'
import type { LevelId } from '../data/questions'
import { awsCoursesByLevel } from '../data/awsCatalog'
import { isJourneyComplete, levelXp } from '../state/progress'

export default function NextStep() {
  const { state } = useGame()
  const done = isJourneyComplete(state)

  if (!done) {
    return (
      <div className="card">
        <h1 className="section-title">Meu Próximo Passo na Cloud</h1>
        <p className="notice">
          Esta recomendação é liberada somente após concluir os 3 jogos e os 12 minicursos. Continue sua jornada!
        </p>
        <Link className="btn btn-primary" to="/jornada">Voltar à jornada</Link>
      </div>
    )
  }

  // Seleção determinística do nível de recomendação com base no desempenho:
  // o nível com melhor aproveitamento sugere o próximo passo adequado.
  const bestLevel: LevelId = LEVEL_ORDER.reduce<LevelId>((best, lvl) => {
    const correctHere = questions.filter((q) => q.level === lvl && state.questionResults[q.id]?.correct).length
    const correctBest = questions.filter((q) => q.level === best && state.questionResults[q.id]?.correct).length
    return correctHere >= correctBest ? lvl : best
  }, 'iniciante')

  const course = awsCoursesByLevel(bestLevel)[0] ?? awsCoursesByLevel('iniciante')[0]

  const correctCount = questions.filter((q) => state.questionResults[q.id]?.correct).length

  return (
    <div>
      <h1 className="section-title">Meu Próximo Passo na Cloud</h1>
      <p className="section-sub">
        Recomendação de curso oficial AWS a partir de um catálogo validado, conforme seu desempenho.
      </p>

      <div className="notice" style={{ marginBottom: '1rem' }}>
        Esta seleção é feita por uma regra local baseada no seu desempenho, usando apenas cursos reais do catálogo
        validado. A justificativa personalizada pela Cloud Sisters AI será adicionada quando a integração de IA estiver
        conectada (ver tela Cloud Sisters AI).
      </div>

      <div className="card">
        <span className="tag">{course.area} · {course.level}</span>
        <h2 style={{ margin: '0.3rem 0' }}>{course.name}</h2>
        <p style={{ color: 'var(--cs-texto-suave)' }}>
          Baseado no seu desempenho ({correctCount}/30 acertos, {levelXp(state, bestLevel)} XP no nível de melhor
          aproveitamento), este curso ajuda a avançar na área de {course.area.toLowerCase()}.
        </p>
        <h3>Competências a desenvolver</h3>
        <ul>
          {course.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <a className="btn btn-primary" href={course.url} target="_blank" rel="noopener noreferrer">
          Acessar curso oficial AWS ↗
        </a>
      </div>

      <p style={{ marginTop: '1rem' }}>
        <Link className="inline-link" to="/dashboard">Voltar ao dashboard</Link>
      </p>
    </div>
  )
}
