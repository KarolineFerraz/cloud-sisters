# Design — Cloud Sisters

> Plataforma desenvolvida pelo grupo **Cloud Sisters**.
> Slogan: "Aprenda, jogue e evolua na carreira em Cloud."

Este documento descreve o design técnico da plataforma **Cloud Sisters**, derivado do `requirements.md`. Ele não altera as regras de progressão já aprovadas; detalha como implementá-las. Nenhum código é gerado nesta etapa.

Convenções de nomes usadas no produto:
- **Cloud Sisters** — plataforma e jogo.
- **Cloud Sisters Community** — comunidade.
- **Cloud Sisters AI** — mentora de IA generativa real.

---

## 1. Arquitetura geral da aplicação web

A plataforma adota uma arquitetura cliente-servidor em três camadas, com um frontend SPA (Single Page Application), um backend de API e serviços gerenciados para autenticação, banco de dados e IA.

```
┌──────────────────────────────────────────────────────────────┐
│                         NAVEGADOR                              │
│  Frontend SPA (Cloud Sisters)                                  │
│  - Jornada (jogos + minicursos)   - Dashboard                  │
│  - Cloud Sisters Community        - Perfil / Career Match      │
│  - Estado da jornada e UI de bloqueio/disponível/concluído     │
└───────────────┬──────────────────────────────────┬───────────┘
                │ HTTPS (JSON)                       │ Auth (token/JWT)
                ▼                                    ▼
┌──────────────────────────────┐        ┌───────────────────────┐
│   BACKEND API (BFF)          │        │  Serviço de Auth       │
│   - Regras de progressão     │        │  gerenciado            │
│   - Validação de desbloqueio │◀──────▶│  (ex.: Cognito/        │
│   - XP e integridade         │        │   Supabase Auth)       │
│   - Proxy seguro p/ IA       │        └───────────────────────┘
│   - CRUD comunidade/perfil   │
│   - Autorização por papel    │        ┌───────────────────────┐
└──────┬────────────────┬──────┘        │  Banco de dados        │
       │                │               │  compartilhado         │
       │                └──────────────▶│  (relacional ou        │
       │                                │   serverless)          │
       │ chamada server-to-server       └───────────────────────┘
       ▼ (credencial no backend)
┌──────────────────────────────┐
│  Provedor de IA generativa    │
│  (Cloud Sisters AI)           │
│  ex.: Amazon Bedrock /        │
│  API de LLM via backend       │
└──────────────────────────────┘
```

Princípios:
- **Toda regra crítica no backend**: progressão/desbloqueio, concessão de XP, propriedade de conteúdo e papéis são validados no servidor (RF04, RF21, RNF06).
- **Segredos somente no backend**: chaves de IA e credenciais nunca chegam ao frontend (RF23, RNF05).
- **Frontend declarativo de estado**: a UI reflete o estado retornado pela API (bloqueado/disponível/em andamento/concluído), sem decidir desbloqueios por conta própria.

---

## 2. Tecnologias recomendadas (simplicidade, segurança, baixo custo)

As escolhas abaixo são **recomendações** a validar com a equipe (ver seção 15 e pontos de aprovação).

### Frontend
- **React + Vite** (JavaScript/TypeScript) para SPA responsiva e componentização.
- **CSS moderno** com variáveis de tema (tokens de cor) + utilitários; opcional **Tailwind CSS** para velocidade.
- **React Router** para navegação entre páginas.
- Acessibilidade com HTML semântico e ARIA quando necessário.

### Backend
- **Node.js** com **Fastify** ou **Express** (TypeScript) como API/BFF — simples, popular e de baixo custo.
- Validação de entrada com **Zod** (ou Joi).
- Sanitização/escape de conteúdo de usuárias para prevenção de XSS.

### Opção alternativa de menor operação (BaaS)
- **Supabase** (Postgres gerenciado + Auth + Row Level Security) reduz a necessidade de backend próprio para CRUD, mantendo um backend fino apenas para o **proxy de IA** e regras sensíveis de progressão.
- Vantagem: camada gratuita generosa e RLS para autorização por linha.

### Hospedagem
- Frontend: hospedagem estática (ex.: Amazon S3 + CloudFront, Vercel ou Netlify).
- Backend: função serverless (ex.: AWS Lambda + API Gateway) ou container pequeno; serverless favorece custo baixo em uso intermitente.

> Trade-off principal: **Backend próprio (Node) + Postgres** dá controle total; **Supabase** acelera o MVP e reduz operação. Recomenda-se decidir conforme familiaridade da equipe e metas de custo.

---

## 3. Autenticação e banco de dados compartilhado

### Autenticação
- Serviço **gerenciado** (ex.: **Amazon Cognito** ou **Supabase Auth**), com e-mail/senha e, opcionalmente, provedores sociais.
- Senhas **nunca** em texto puro (o serviço gerenciado cuida do hashing). O backend recebe **tokens** (JWT) e valida a cada requisição (RF01, SEG01).
- Papéis: `participante` e `administradora` (claim/registro de papel), base para moderação (RG23, SEG02).
- Sessão encerrável (logout invalida o token no cliente e, quando aplicável, via revogação) (CA03).

### Banco de dados compartilhado (modelo lógico)
Entidades principais (nomes ilustrativos):

- **users**: id, display_name, photo_url (opcional), initial_level (`iniciante|intermediario|avancado`), interests[], career_goals, skills_to_develop[], linkedin_url (opcional), role, profile_visibility, created_at.
- **journey_progress**: user_id, current_stage, total_xp, status por etapa (jogo/minicurso), timestamps. Fonte da verdade da progressão.
- **game_levels**: id (`iniciante|intermediario|expert`), xp_per_correct, max_xp.
- **questions**: id, level_id, enunciado, alternativas[3], correct_index, explanation, subject.
- **question_results**: user_id, question_id, attempts, correct (bool), xp_awarded (bool), completed_at — garante **XP único por pergunta** (RF10, RG19).
- **minicourses**: id, level_group (`basico|intermediario|avancado`), titulo, ordem_sugerida.
- **minicourse_steps**: minicourse_id, step_no (1..5), tipo (intro/fundamentos/aplicacoes/pratica/avaliacao).
- **minicourse_progress**: user_id, minicourse_id, started_at, steps_done[], completed_at, within_deadline (bool).
- **aws_catalog**: id, nome, area, nivel, url_oficial, competencias[] — **catálogo validado** (RF27).
- **recommendations**: user_id, aws_course_id, justificativa, generated_at — resultado da Cloud Sisters AI.
- **posts**: id, author_id, content, created_at, updated_at.
- **comments**: id, post_id, author_id, content, created_at, updated_at.
- **study_groups**: id, nome, descricao, membros[].
- **reports** (denúncias): id, target_type (post/comment/profile), target_id, reporter_id, reason, status.
- **achievements** / **xp_history** / **daily_missions** / **streaks**: gamificação e retenção.

Separação pública/privada: e-mail e dados sensíveis ficam restritos; perfil público expõe apenas campos marcados como públicos (RF32, PRIV02, SEG03).

---

## 4. Estrutura das páginas e navegação

Navegação principal organizada pelos três pilares + conta:

- **Início** — apresentação da Cloud Sisters, slogan e entrada na jornada.
- **Aprender (Jornada)** — mapa da jornada com jogos e minicursos e seus estados (bloqueado/disponível/em andamento/concluído).
  - Tela de jogo (pergunta, alternativas, tentativas, explicação).
  - Tela de minicurso (5 etapas, botão "Iniciar minicurso", progresso).
- **Evoluir**
  - Dashboard (progresso, XP, competências, recomendações da Cloud Sisters AI).
  - "Meu Próximo Passo na Cloud" (recomendação AWS — liberada ao final).
- **Conectar (Cloud Sisters Community)**
  - Feed, criar/editar publicação, comentários.
  - Explorar participantes (busca), grupos de estudo.
  - Career Match.
- **Perfil** — edição de dados, visibilidade, privacidade/LGPD, logout.
- **Admin** (apenas administradora) — fila de denúncias e moderação.

Fluxo da jornada (resumo): Início → Cadastro/Login → (Perfil/conhecimento inicial) → Jogo Iniciante → Minicursos básicos → Jogo Intermediário → Minicursos intermediários → Jogo Expert → Minicursos avançados → "Meu Próximo Passo na Cloud".

---

## 5. Identidade visual responsiva

### 5.1 Conceito e homenagem
A identidade visual do Cloud Sisters tem o **roxo como cor principal e predominante**, como homenagem ao **Women in Cloud** e à representatividade feminina na tecnologia. A composição deve transmitir **protagonismo feminino, colaboração, conhecimento e evolução profissional**, com aparência moderna, tecnológica, elegante, acolhedora e acessível.

> Importante: a homenagem é inspiracional. O Cloud Sisters mantém **identidade própria** e **não** utiliza logotipos oficiais do Women in Cloud nem sugere parceria ou vínculo institucional.

### 5.2 Paleta oficial
| Cor | Hex | Uso principal |
|-----|-----|---------------|
| **Roxo principal** | `#6A0DAD` | Cor predominante: logotipo, botões principais, elementos de destaque, indicadores de progresso e identidade dos jogos. |
| **Roxo escuro** | `#4B0082` | Variação para contraste: cabeçalhos, estados ativos/hover de botões roxos, textos sobre áreas claras, profundidade. |
| **Lilás** | `#B57EDC` | Cor de apoio: fundos suaves, destaques secundários, badges, estados leves. |
| **Azul tecnológico** | `#4169E1` | Acento tecnológico: links, foco de teclado, ícones e elementos interativos secundários. |
| **Branco** | `#FFFFFF` | Superfícies, cartões e respiro visual. |

Tokens sugeridos (a refinar com a equipe de design):
```
--cs-roxo-principal: #6A0DAD;  /* predominante */
--cs-roxo-escuro:    #4B0082;  /* contraste / profundidade */
--cs-lilas:          #B57EDC;  /* apoio / destaques suaves */
--cs-azul-tec:       #4169E1;  /* acento / foco / links */
--cs-branco:         #FFFFFF;  /* superfícies */
/* Neutros de apoio (derivados, para texto e fundos) */
--cs-fundo:          #F5F0FB;  /* lilás muito claro para fundo de tela */
--cs-texto:          #1E1333;  /* texto principal, alto contraste sobre branco */
```

### 5.3 Diretrizes de aplicação do roxo (predominante)
O roxo deve estar presente principalmente em:
- **Logotipo** do Cloud Sisters.
- **Botões principais** (ações primárias/CTAs).
- **Elementos de destaque** (títulos de seção, selos, ênfases).
- **Indicadores de progresso** (barras de XP, progresso da jornada e dos minicursos).
- **Identidade visual dos jogos** (telas de pergunta, níveis, medalhas).

Lilás, azul e branco **complementam** a composição:
- **Lilás**: fundos e áreas de apoio, destaques secundários, estados suaves.
- **Azul tecnológico**: links, foco e elementos interativos de apoio (reforça a sensação tecnológica).
- **Branco**: superfícies e espaçamento, garantindo leveza e legibilidade.

### 5.4 Diretrizes gerais
- **Moderno, tecnológico, acolhedor e profissional**: cantos arredondados, cartões com leve sombra, ícones consistentes, tipografia legível.
- **Gamificação visível**: barras de progresso em roxo, cartões de missões, selos/medalhas, badge de XP e **indicadores de estado** (bloqueado/disponível/em andamento/concluído) comunicados por **cor + ícone + texto** (não apenas cor, por acessibilidade).
- **Responsividade**: layout mobile-first; grid flexível; navegação colapsável em telas pequenas.
- **Contraste e acessibilidade das cores**: usar roxo escuro (`#4B0082`) para texto/ícones sobre fundos claros quando o roxo principal não atingir contraste suficiente; texto sobre roxo deve ser branco. Validar as combinações para contraste mínimo (ver seção 13).

---

## 6. Estrutura dos jogos, perguntas, tentativas e XP

- **Três níveis**: Iniciante (10 XP/acerto, máx. 100), Intermediário (20, máx. 200), Expert (30, máx. 300); total 600 XP (RF07, RG17).
- **Pergunta**: enunciado + 3 alternativas + 1 correta + explicação educativa + assunto.
- **Tentativas** (RF08, RG18):
  1. 1ª tentativa correta → XP completo, pergunta concluída.
  2. 1ª errada → 2ª tentativa.
  3. 2ª correta → XP completo, concluída.
  4. 2ª errada → 0 XP, exibe correta + explicação, concluída.
- **Conclusão** (RF09): acertar OU esgotar as 2 tentativas e ver a explicação. Não exige acerto para avançar.
- **XP único** (RF10): `question_results.xp_awarded` impede duplicidade; o backend recusa concessão repetida.
- **Salvamento automático** (RF11): cada resposta persiste resultado e dificuldades (por assunto) imediatamente.

Pseudofluxo de avaliação (lado servidor):
```
responder(questao, alternativa):
  registro = buscar question_results(user, questao)
  se registro.completed: retornar estado (sem novo XP)
  registro.attempts += 1
  se alternativa == correta:
     se not registro.xp_awarded:
        aplicar XP do nível ; registro.xp_awarded = true
     registro.correct = true ; registro.completed = true
  senão se registro.attempts >= 2:
     registro.completed = true   # sem XP; revelar explicação
  salvar(registro)
```

---

## 7. Regras de progressão e desbloqueio dos minicursos

Progressão **obrigatória e sequencial** (RF18–RF21, RG01–RG16), validada no backend:

```
Jogo Iniciante (10/10 concluídas)
   └─> desbloqueia 4 minicursos BÁSICOS
         └─(4/4 concluídos)─> desbloqueia Jogo Intermediário
Jogo Intermediário (10/10)
   └─> desbloqueia 4 minicursos INTERMEDIÁRIOS
         └─(4/4)─> desbloqueia Jogo Expert
Jogo Expert (10/10)
   └─> desbloqueia 4 minicursos AVANÇADOS
         └─(4/4)─> jornada principal FINALIZADA
                     └─> libera "Meu Próximo Passo na Cloud" (AWS)
```

- **Concluir nível de jogo** = 10/10 perguntas concluídas (acerto ou 2 tentativas + explicação).
- **Concluir minicurso** = 5/5 etapas finalizadas, incluindo avaliação final (RF13, RG11).
- **Minicursos de um nível**: ordem livre, com sugestão da Cloud Sisters AI (RF14, RG12).
- **Conhecimento inicial não pula etapas** nesta versão (RF06, RG15).
- **Integridade** (RF21, CA24): o endpoint de desbloqueio só libera quando `journey_progress` confirma os pré-requisitos; o frontend nunca decide sozinho.
- **Recomendação AWS** só após 3 jogos + 12 minicursos (RF24, CA33).

Máquina de estados por etapa: `bloqueado → disponível → em_andamento → concluído`.

---

## 8. Organização dos 12 minicursos e suas 5 etapas

Agrupamento por nível (RF12), neutro de fornecedor (RF17):

**Básicos (Iniciante)**
1. Introdução à Computação em Nuvem
2. Como a Nuvem Funciona
3. Modelos de Serviço: IaaS, PaaS e SaaS
4. Nuvem Pública, Privada e Híbrida

**Intermediários**
5. Redes e Conectividade na Nuvem
6. Armazenamento em Nuvem
7. Máquinas Virtuais e Contêineres
8. Bancos de Dados em Nuvem

**Avançados (Expert)**
9. Segurança e Proteção de Dados
10. Escalabilidade e Alta Disponibilidade
11. Monitoramento e Custos em Nuvem
12. Projeto Prático de Cloud Computing

**Cinco etapas por minicurso** (RF13):
1. Introdução
2. Fundamentos técnicos
3. Aplicações profissionais
4. Atividade prática
5. Avaliação final

Prazo/retenção (RF15, RF16, RG13, RG14): o contador de 5 dias inicia ao acionar "Iniciar minicurso"; conclusão antecipada é permitida; continuar após o prazo preserva progresso (sem a conquista "dentro do prazo"); os 60 dias são o total de conteúdo, não um prazo corrido. AWS, Azure e Google Cloud aparecem apenas como exemplos.

---

## 9. Integração segura com IA generativa real (Cloud Sisters AI)

- **Proxy no backend**: o frontend chama o backend; o backend chama o provedor de IA com a **credencial armazenada no servidor** (variáveis de ambiente/secret manager). A chave nunca vai ao cliente (RF23, IA03, RNF05, SEG05).
- **Provedor** (a validar): **Amazon Bedrock** (integra bem com AWS e controle de custos) ou outra API de LLM. Decisão na seção 15.
- **Dados enviados**: apenas métricas e contexto necessários (nível, acertos/erros por assunto, desempenho em minicursos, interesses/objetivos quando autorizados). **Não** enviar dados pessoais/privados sem autorização (IA06).
- **Autenticidade** (IA04, CA31): respostas exibidas como IA devem ser realmente geradas; nada de texto fixo disfarçado.
- **Falhas** (IA05, CA32): em erro/indisponibilidade, mostrar mensagem clara e NÃO simular IA; a jornada e o catálogo seguem utilizáveis.
- **Controle de custo**: limitar tamanho de prompt/resposta, aplicar rate limiting e cache de orientações quando fizer sentido.

---

## 10. Recomendação personalizada de cursos oficiais AWS

- **Catálogo validado** (`aws_catalog`): curadoria prévia com nome, área, nível, URL oficial e competências. Sem invenção de cursos/links (RF27, RG21, CA35).
- **Gatilho**: liberada só após a jornada completa (RF24).
- **Processo**:
  1. Backend reúne o desempenho (jogos, minicursos, interesses, objetivos, competências).
  2. A Cloud Sisters AI analisa e sugere **justificativa personalizada** e competências a desenvolver.
  3. O backend seleciona o curso **dentro do catálogo** (a IA justifica; a escolha é restrita ao catálogo para evitar alucinação de links).
  4. Exibição na tela **"Meu Próximo Passo na Cloud"** com: nome, área, nível, justificativa, competências e link oficial (RF26, CA34).

---

## 11. Estrutura da Cloud Sisters Community

Backend real e armazenamento compartilhado (RF30):

- **Perfis profissionais** com visibilidade controlável (RF02, RF32, PRIV02).
- **Feed**: publicações com autora, data e conteúdo; ordem do mais recente ao mais antigo; **paginação** (RF31, RG24, CA41).
- **Publicações e comentários**: CRUD com **propriedade** — editar/excluir só o próprio; moderar conteúdo de terceiros exige papel administrativo (RF31, RG23, CA42).
- **Busca de participantes** por nome, interesses e nível (apenas perfis públicos).
- **Grupos de estudo**: criação e participação (essencial básico; recursos avançados na Fase 3).
- **Denúncias e moderação**: fila de `reports`, ações administrativas e proteção contra spam/abuso (ex.: rate limiting) (RF32, CA43, CA44).
- **Autorização por linha/recurso** no backend (ou RLS, se Supabase).

---

## 12. Dashboard e acompanhamento de competências

Painel consolidado (RF35):
- Progresso nos jogos e **XP acumulado** (com histórico).
- **Estado da jornada** (bloqueado/disponível/em andamento/concluído) e próximos requisitos.
- Minicursos disponíveis e concluídos.
- **Missões diárias** (~5 min) e exercícios de revisão (RF28).
- **Conquistas/medalhas** e **sequência de estudos** (streak) — sem punição excessiva por ausência (RF29).
- **Evolução de competências**: derivada de assuntos acertados/errados e minicursos concluídos.
- **Recomendações contínuas da Cloud Sisters AI**.
- Acesso à comunidade e ao "Meu Próximo Passo na Cloud" (quando liberado).

Modelo de competências (sugestão): mapa assunto→competência, pontuado por desempenho, exibido como barras/radar, com destaque visual em roxo.

---

## 13. Segurança, LGPD e acessibilidade

### Segurança
- Autorização no backend para progressão, propriedade e papéis (RNF06, SEG02, CA48).
- Validação de entrada (Zod/Joi) e **sanitização/escape** de todo conteúdo de usuárias e respostas de IA para prevenir XSS/injeção (RNF08, CA47).
- Segredos (IA, DB, Auth) em variáveis de ambiente/secret manager, nunca no frontend (RNF05, SEG05).
- Rate limiting e proteção anti-spam/abuso (SEG06, CA44).
- Transporte via HTTPS.

### LGPD / Privacidade
- Consentimento no cadastro; informar quais dados são públicos (PRIV01).
- Minimização e finalidade: coletar só o necessário.
- Direito de **editar/excluir dados** e **excluir conta**, com tratamento dos dados associados (PRIV03, CA05).
- Separação público/privado; e-mail e credenciais nunca expostos (SEG03, CA49).
- Dados privados não alimentam a IA sem autorização (IA06).

### Acessibilidade
- HTML semântico, foco visível (em azul tecnológico `#4169E1`), navegação por teclado em toda a plataforma (RNF09, CA50).
- Estados comunicados por cor **+ ícone + texto** (não depender só de cor).
- Contraste adequado: texto sobre roxo em branco; texto roxo sobre fundos claros usando `#4B0082` quando necessário; validar combinações da paleta.
- Textos legíveis e redimensionáveis.
- Observação: conformidade WCAG completa exige testes manuais com tecnologias assistivas e revisão especializada.

---

## 14. Separação entre funcionalidades essenciais e futuras

### Essenciais (MVP — Fases 1 e 2)
- Cadastro/login, perfil, privacidade/LGPD.
- Jogos (3 níveis × 10 perguntas), XP, tentativas, explicações, salvamento automático.
- 12 minicursos (5 etapas) com progressão obrigatória e sequencial e estados visíveis.
- Cloud Sisters AI durante a jornada + recomendação final AWS (catálogo validado).
- Cloud Sisters Community (perfis, feed, comentários, busca, denúncias, moderação básica).
- Dashboard consolidado.
- Segurança, acessibilidade e responsividade.

### Futuras (Fases 3 e 4)
- Missões diárias avançadas, conquistas avançadas, novas trilhas, desafios progressivos.
- Career Match completo (oportunidades verificadas por integração com fontes confiáveis).
- Conexões profissionais recomendadas por IA.
- Grupos de estudo avançados e mentorias em grupo.
- Planos pagos (Plus/Pro), pagamentos e parcerias corporativas.

---

## 15. Dependências técnicas e possíveis custos

### Dependências
- Conta em provedor de nuvem para hospedagem e IA.
- Serviço de autenticação gerenciado (Cognito/Supabase Auth).
- Banco de dados (Postgres gerenciado/Supabase, ou DynamoDB se serverless).
- Provedor de IA generativa (Amazon Bedrock ou API de LLM).
- Catálogo AWS validado (curadoria manual inicial).
- Bibliotecas: React/Vite, roteador, validação (Zod), framework de API (Fastify/Express).

### Possíveis custos (ordem de grandeza, a confirmar)
- **Hospedagem estática + CDN**: baixo; frequentemente dentro de camada gratuita no início.
- **Backend serverless**: custo por requisição; baixo em tráfego inicial.
- **Banco de dados gerenciado**: camada gratuita em Supabase; em AWS, custo conforme uso.
- **Autenticação gerenciada**: Cognito e Supabase têm camadas gratuitas para volumes iniciais.
- **IA generativa**: **principal variável de custo**, cobrada por tokens/uso. Mitigar com limites de prompt/resposta, rate limiting, cache e uso pontual (ex.: orientações e recomendação final).

> Recomendação: começar com opção de **menor operação e custo** (ex.: Supabase + backend fino para IA) e evoluir para arquitetura AWS completa conforme a necessidade.

---

## Pontos que precisam de aprovação (decisões técnicas)

1. **Stack**: backend próprio (Node/Fastify + Postgres) **ou** BaaS (Supabase + backend fino só para IA)?
2. **Autenticação**: Amazon Cognito ou Supabase Auth? Login social (sim/não)?
3. **Provedor de IA**: Amazon Bedrock ou outra API de LLM? Modelo e limites de custo.
4. **Hospedagem**: AWS (S3/CloudFront + Lambda) ou plataformas como Vercel/Netlify?
5. **Banco**: relacional (Postgres) ou serverless (DynamoDB)?
6. **Linguagem do frontend**: JavaScript ou TypeScript (recomendo TypeScript).
7. **Visitante sem conta** (decisão de produto pendente nº 3 do requirements): permitir jogar sem cadastro nesta versão?
8. **Avaliação final dos minicursos** (pendência nº 1): formato e se concede XP/conquista.
9. **Competências**: confirmar o mapa assunto→competência para o dashboard.

As demais decisões de produto pendentes listadas no `requirements.md` (conquistas/streak, moderação, modelo de negócio, reinício/refazer) permanecem em aberto e serão incorporadas ao design conforme definidas.
