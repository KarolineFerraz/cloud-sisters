export default function Community() {
  const samplePosts = [
    {
      author: 'Exemplo (conteúdo fictício)',
      date: 'há 2 dias',
      content: 'Concluí os minicursos básicos e finalmente entendi a diferença entre IaaS, PaaS e SaaS! 🚀',
    },
    {
      author: 'Exemplo (conteúdo fictício)',
      date: 'há 4 dias',
      content: 'Alguém tem dicas de estudo para a certificação Cloud Practitioner? Estou começando agora.',
    },
  ]

  return (
    <div>
      <h1 className="section-title">Conectar · Cloud Sisters Community</h1>
      <p className="section-sub">Networking, troca de experiências e grupos de estudo entre participantes.</p>

      <div className="notice" style={{ marginBottom: '1rem' }}>
        ⚠️ Prévia visual. Esta comunidade <strong>ainda não é multiusuário</strong>: não há cadastro, login nem
        servidor compartilhado nesta versão. Os cartões abaixo são exemplos fictícios para ilustrar a interface. A
        versão real exigirá autenticação e armazenamento compartilhado (ver design.md).
      </div>

      <div className="grid cols-2">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Feed da comunidade (exemplo)</h3>
          {samplePosts.map((p, i) => (
            <div key={i} className="card" style={{ boxShadow: 'none', marginBottom: '0.75rem' }}>
              <strong>{p.author}</strong>
              <span style={{ color: 'var(--cs-texto-suave)', fontSize: '0.85rem' }}> · {p.date}</span>
              <p style={{ margin: '0.4rem 0 0' }}>{p.content}</p>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" disabled>
            Publicar (requer conta — não disponível nesta versão)
          </button>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Explorar participantes (exemplo)</h3>
          <p style={{ color: 'var(--cs-texto-suave)' }}>
            Aqui aparecerá o diretório de perfis públicos, com busca por nome, interesses e nível de conhecimento.
          </p>
          <h3>Grupos de estudo (exemplo)</h3>
          <p style={{ color: 'var(--cs-texto-suave)' }}>
            Grupos temáticos para estudar em conjunto. Recurso previsto para a versão com backend real.
          </p>
        </div>
      </div>
    </div>
  )
}
