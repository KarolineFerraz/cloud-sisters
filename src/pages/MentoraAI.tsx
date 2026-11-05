import { useGame } from '../state/GameContext'
import { questions } from '../data/questions'

export default function MentoraAI() {
  const { state } = useGame()

  // Resumo determinístico do desempenho (NÃO é IA — apenas dados locais)
  const weakSubjects = new Map<string, { wrong: number; total: number }>()
  for (const q of questions) {
    const res = state.questionResults[q.id]
    if (!res?.completed) continue
    const entry = weakSubjects.get(q.subject) ?? { wrong: 0, total: 0 }
    entry.total += 1
    if (!res.correct) entry.wrong += 1
    weakSubjects.set(q.subject, entry)
  }
  const difficulties = [...weakSubjects.entries()]
    .filter(([, v]) => v.wrong > 0)
    .sort((a, b) => b[1].wrong - a[1].wrong)
    .map(([subject, v]) => `${subject} (${v.wrong}/${v.total} erros)`)

  return (
    <div>
      <h1 className="section-title">Cloud Sisters AI</h1>
      <p className="section-sub">Mentora de IA generativa real — orientação personalizada de carreira.</p>

      <div className="notice" style={{ marginBottom: '1rem' }}>
        ⚠️ <strong>Integração de IA ainda não conectada.</strong> Nenhum texto desta tela é gerado por IA. A arquitetura
        já está preparada para integrar um provedor real de IA generativa por meio de um backend seguro (as credenciais
        nunca ficam no frontend). Enquanto a integração não existir, não exibimos respostas fingindo ser IA.
      </div>

      <div className="card">
        <h2 className="section-title">O que a Cloud Sisters AI fará (quando conectada)</h2>
        <ul>
          <li>Analisar seus resultados nos jogos e minicursos.</li>
          <li>Identificar dificuldades e sugerir revisões e próximos desafios.</li>
          <li>Considerar seus interesses e objetivos profissionais.</li>
          <li>Oferecer orientação personalizada de carreira em Cloud.</li>
          <li>Fundamentar a recomendação final de curso AWS.</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h2 className="section-title">Resumo do seu desempenho (dados locais, sem IA)</h2>
        {difficulties.length > 0 ? (
          <>
            <p>Assuntos em que você teve mais dificuldade até agora:</p>
            <ul>
              {difficulties.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p style={{ color: 'var(--cs-texto-suave)' }}>
              Este resumo é calculado localmente a partir das suas respostas — não é uma análise de IA.
            </p>
          </>
        ) : (
          <p className="notice">
            Ainda não há dificuldades registradas. Jogue algumas perguntas para ver este resumo (lembrando: isso é um
            cálculo local, não IA).
          </p>
        )}
      </div>
    </div>
  )
}
