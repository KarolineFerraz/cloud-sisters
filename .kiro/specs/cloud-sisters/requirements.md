# Requisitos — Cloud Sisters

> Plataforma desenvolvida pelo grupo **Cloud Sisters**.
> Slogan: "Aprenda, jogue e evolua na carreira em Cloud."

O **Cloud Sisters** é uma plataforma web de aprendizagem gamificada, desenvolvimento profissional e networking, com foco em mulheres interessadas em iniciar ou desenvolver uma carreira em tecnologia, especialmente Cloud Computing. O objetivo é incentivar o aprendizado contínuo, acompanhar a evolução das participantes, oferecer orientação profissional personalizada por IA generativa real e sustentar-se por um modelo de negócio freemium.

### Nomenclatura oficial
- **Plataforma e jogo:** Cloud Sisters.
- **Comunidade:** Cloud Sisters Community.
- **Mentora de IA:** Cloud Sisters AI.
- **Grupo desenvolvedor:** Cloud Sisters.
- **Slogan:** "Aprenda, jogue e evolua na carreira em Cloud."

### Pilares da plataforma
1. **APRENDER** — Jornada gamificada (jogo de conhecimentos) + minicursos de Cloud Computing.
2. **EVOLUIR** — Cloud Sisters AI (IA real), recomendação final de curso AWS e acompanhamento de competências.
3. **CONECTAR** — Cloud Sisters Community e desenvolvimento de carreira (Career Match).

### Identidade do projeto
- Nome da plataforma: Cloud Sisters.
- Grupo desenvolvedor: Cloud Sisters.
- Público-alvo: mulheres interessadas em iniciar ou evoluir em tecnologia, com foco em Cloud Computing.
- Idioma: português brasileiro.
- Identidade visual: roxo, lilás, azul e branco, com proposta moderna, tecnológica, acolhedora e profissional.
- Interface moderna, intuitiva, acessível e responsiva para computadores e celulares.

## 1. Problema e público-alvo

### Problema
Mulheres iniciantes ou em transição para a área de Cloud Computing enfrentam barreiras para começar e para manter a evolução: conteúdo fragmentado, falta de um caminho claro, pouca orientação personalizada, dificuldade em encontrar cursos confiáveis, ausência de uma rede de apoio e de mecanismos que sustentem o aprendizado contínuo.

### Público-alvo
- Mulheres iniciantes em tecnologia com interesse em Cloud Computing.
- Mulheres em evolução profissional buscando reforçar fundamentos de IA e Cloud.
- Mulheres que buscam networking, troca de experiências e visibilidade profissional.

### Proposta de valor
Uma plataforma responsiva e gamificada que ensina Cloud Computing (independente de fornecedor) por meio de uma jornada progressiva de jogos e minicursos, analisa dificuldades com IA generativa real (Cloud Sisters AI), recomenda cursos reais da AWS conforme o desempenho, conecta participantes na Cloud Sisters Community e apoia o desenvolvimento de carreira, com um modelo de negócio freemium sustentável.

## 2. Histórias de usuário

### Conta e perfil
- **US01** — Como visitante, quero me cadastrar e fazer login de forma segura, para acessar o Cloud Sisters e salvar minha evolução.
- **US02** — Como participante, quero criar e editar meu perfil (nome de exibição, foto opcional, conhecimento inicial, interesses, objetivos de carreira, competências a desenvolver e LinkedIn opcional), para personalizar minha experiência e me apresentar à comunidade.
- **US03** — Como participante, quero encerrar a sessão e controlar meus dados, para proteger minha conta e minha privacidade.

### Pilar APRENDER — Jornada progressiva (jogos + minicursos)
- **US04** — Como participante, quero informar meu conhecimento inicial (Iniciante, Intermediário ou Avançado), para que explicações, recomendações e revisões sejam personalizadas.
- **US05** — Como participante, quero percorrer uma jornada obrigatória e sequencial (jogo Iniciante → minicursos básicos → jogo Intermediário → minicursos intermediários → jogo Expert → minicursos avançados), para evoluir de forma estruturada.
- **US06** — Como participante, quero responder perguntas de múltipla escolha com duas tentativas, para testar e fixar conhecimentos de Cloud.
- **US07** — Como participante, quero ver a resposta correta e uma explicação educativa após dois erros, para entender o conteúdo mesmo sem acertar.
- **US08** — Como participante, quero ganhar XP ao acertar e acompanhar meu progresso, para me manter motivada.
- **US09** — Como participante, quero desbloquear os minicursos ao concluir cada nível do jogo e precisar concluí-los para liberar o próximo nível, para aprofundar antes de avançar.
- **US10** — Como participante, quero ver claramente o que está bloqueado, disponível, em andamento e concluído, e os requisitos de desbloqueio, para saber como progredir.
- **US11** — Como participante, quero iniciar cada minicurso quando decidir, concluir antecipadamente ou continuar após o prazo sem perder progresso, para estudar no meu ritmo.

### Pilar EVOLUIR — Cloud Sisters AI e recomendação AWS
- **US12** — Como participante, quero que a Cloud Sisters AI (IA real) me oriente durante toda a jornada, analisando desempenho, dificuldades, interesses e objetivos, para evoluir com apoio.
- **US13** — Como participante, quero, após concluir toda a jornada obrigatória, uma recomendação personalizada de curso oficial da AWS na tela "Meu Próximo Passo na Cloud", para saber como avançar.

### Pilar CONECTAR — Comunidade e carreira
- **US14** — Como participante autenticada, quero publicar, comentar, buscar participantes e participar de grupos de estudo na Cloud Sisters Community, para construir conexões e colaborar.
- **US15** — Como participante, quero denunciar conteúdo inadequado, para ajudar a manter um ambiente respeitoso.
- **US16** — Como administradora, quero moderar conteúdo e analisar denúncias com permissões específicas, para garantir a segurança da comunidade.
- **US17** — Como participante, quero recomendações de desenvolvimento profissional (projetos, trilhas de certificação, grupos de estudo e oportunidades verificadas), para evoluir na carreira.

### Gamificação, retenção e painel
- **US18** — Como participante, quero missões diárias curtas, conquistas, histórico de XP, sequência de estudos e novas trilhas, para manter o aprendizado contínuo.
- **US19** — Como participante, quero um dashboard com minha evolução completa e o estado da jornada, para acompanhar tudo em um só lugar.

### Transversais
- **US20** — Como participante, quero usar o Cloud Sisters no celular ou desktop, com navegação por teclado e boa legibilidade, para usá-lo de forma acessível.

## 3. Requisitos funcionais

### 3.1 Conta, perfil e privacidade

#### RF01 — Cadastro e autenticação
A plataforma permite cadastro e login com autenticação segura, preferencialmente por serviço gerenciado. Senhas nunca são armazenadas em texto puro. A participante pode encerrar a sessão.

#### RF02 — Perfil da participante
Cada participante pode criar e editar um perfil com: nome de exibição; foto opcional; conhecimento inicial (Iniciante, Intermediário ou Avançado); interesses profissionais; objetivos de carreira; competências que deseja desenvolver; LinkedIn opcional.

#### RF03 — Segurança dos dados e LGPD
Os dados são armazenados com segurança e tratados conforme a LGPD, com consentimento, minimização, finalidade clara, controle de visibilidade e direito de editar/excluir dados e conta.

#### RF04 — Proteção de funcionalidades autenticadas
Funcionalidades que exigem autenticação têm autorização aplicada no backend, não apenas na interface.

### 3.2 Pilar APRENDER — Jogo de conhecimentos

#### RF05 — Tela inicial
A aplicação exibe uma tela inicial com o nome da plataforma (Cloud Sisters), o slogan, a apresentação dos pilares e um ponto de entrada para iniciar a jornada.

#### RF06 — Conhecimento inicial e personalização
A participante informa seu conhecimento inicial (Iniciante, Intermediário ou Avançado). Essa escolha é usada para **personalizar explicações, recomendações e revisões**, mas **não permite pular etapas obrigatórias** nesta versão.

#### RF07 — Estrutura dos níveis e perguntas
O jogo possui três níveis, cada um com 10 perguntas de múltipla escolha, 3 alternativas e apenas 1 correta:
- **Iniciante**: 10 perguntas, 10 XP por acerto, máximo 100 XP.
- **Intermediário**: 10 perguntas, 20 XP por acerto, máximo 200 XP.
- **Expert**: 10 perguntas, 30 XP por acerto, máximo 300 XP.

Total: 30 perguntas e 600 XP possíveis.

#### RF08 — Tentativas, explicação e XP
Cada pergunta permite duas tentativas:
- Acerto na 1ª ou na 2ª tentativa concede o XP completo do nível.
- Após dois erros, a aplicação apresenta a resposta correta e uma explicação educativa; dois erros não concedem XP.

#### RF09 — Conclusão de pergunta
Uma pergunta é considerada **concluída** quando a participante a acerta OU quando utiliza as duas tentativas e visualiza a explicação educativa. **Não é necessário acertar todas as perguntas** para concluir um nível e avançar.

#### RF10 — Integridade da pontuação
Uma mesma pergunta concede XP no máximo uma vez (sem pontuação duplicada).

#### RF11 — Salvamento automático
A aplicação salva automaticamente o progresso da jornada, tentativas, acertos e dificuldades por assunto.

### 3.3 Pilar APRENDER — Minicursos de Cloud Computing

#### RF12 — Catálogo de minicursos
A plataforma oferece 12 minicursos, agrupados por etapa:
- **Básicos (nível Iniciante):** 1) Introdução à Computação em Nuvem; 2) Como a Nuvem Funciona; 3) Modelos de Serviço: IaaS, PaaS e SaaS; 4) Nuvem Pública, Privada e Híbrida.
- **Intermediários (nível Intermediário):** 5) Redes e Conectividade na Nuvem; 6) Armazenamento em Nuvem; 7) Máquinas Virtuais e Contêineres; 8) Bancos de Dados em Nuvem.
- **Avançados (nível Expert):** 9) Segurança e Proteção de Dados; 10) Escalabilidade e Alta Disponibilidade; 11) Monitoramento e Custos em Nuvem; 12) Projeto Prático de Cloud Computing.

#### RF13 — Estrutura de 5 etapas
Cada minicurso tem 5 etapas educativas: Etapa 1 introdução; Etapa 2 fundamentos técnicos; Etapa 3 aplicações profissionais; Etapa 4 atividade prática; Etapa 5 avaliação final. A conclusão de um minicurso exige finalizar as cinco etapas, incluindo a avaliação final.

#### RF14 — Ordem dos minicursos
Os quatro minicursos de um mesmo nível podem ser realizados na ordem escolhida pela participante, com sugestões de ordem da Cloud Sisters AI.

#### RF15 — Prazo e conclusão
O prazo individual de 5 dias de um minicurso inicia somente quando a participante aciona "Iniciar minicurso". A participante pode concluir antecipadamente, salvar progresso e continuar após o prazo sem perder o progresso; ao ultrapassar o prazo, não recebe a conquista de conclusão dentro do prazo, mas mantém o progresso e a possibilidade de concluir.

#### RF16 — Significado dos 60 dias
Os 60 dias representam a quantidade total de conteúdo educativo (12 minicursos × 5 dias), e não um prazo obrigatório de 60 dias corridos.

#### RF17 — Neutralidade de fornecedor
Os minicursos ensinam Cloud Computing de forma independente de fornecedor, usando AWS, Azure e Google Cloud apenas como exemplos quando apropriado.

### 3.4 Pilar APRENDER — Progressão obrigatória e sequencial

#### RF18 — Sequência da jornada principal
A jornada principal é **obrigatória e sequencial**, na seguinte ordem:
1. Jogo **Iniciante** (10 perguntas).
2. **4 minicursos básicos**.
3. Jogo **Intermediário** (10 perguntas).
4. **4 minicursos intermediários**.
5. Jogo **Expert** (10 perguntas).
6. **4 minicursos avançados**.

#### RF19 — Regras de desbloqueio
- Concluir as 10 perguntas do nível **Iniciante** desbloqueia os **4 minicursos básicos**.
- Concluir os **4 minicursos básicos** desbloqueia o jogo **Intermediário**.
- Concluir as 10 perguntas do nível **Intermediário** desbloqueia os **4 minicursos intermediários**.
- Concluir os **4 minicursos intermediários** desbloqueia o jogo **Expert**.
- Concluir as 10 perguntas do nível **Expert** desbloqueia os **4 minicursos avançados**.
- Concluir os **4 minicursos avançados** finaliza a jornada principal.

#### RF20 — Estados visíveis e requisitos de desbloqueio
A plataforma mostra claramente, para cada jogo e minicurso, o estado — **bloqueado, disponível, em andamento ou concluído** — e os requisitos necessários para desbloqueio.

#### RF21 — Integridade da progressão
A aplicação salva automaticamente o progresso da jornada e impede desbloqueios indevidos (uma etapa só é liberada quando seus pré-requisitos foram realmente concluídos).

### 3.5 Pilar EVOLUIR — Cloud Sisters AI

#### RF22 — IA generativa real
A plataforma integra a **Cloud Sisters AI**, IA generativa real, de forma segura, que: analisa resultados dos jogos; identifica dificuldades; avalia desempenho nos minicursos; considera interesses e objetivos profissionais; recomenda revisões, próximos desafios e ordem dos minicursos; oferece orientação personalizada de carreira; explica conceitos de Cloud; e acompanha a evolução ao longo de toda a jornada.

#### RF23 — Autenticidade e segurança da IA
Não apresentar respostas fixas como se fossem geradas por IA. Credenciais protegidas no backend e nunca expostas no frontend. Dados privados e pessoais não alimentam a IA sem autorização apropriada. Falhas de IA são tratadas com mensagem clara, sem fallback que finja ser IA.

### 3.6 Pilar EVOLUIR — Recomendação final de curso AWS

#### RF24 — Liberação da recomendação final
A recomendação final de curso oficial AWS é liberada **somente após a conclusão dos três níveis do jogo e dos 12 minicursos** (toda a jornada obrigatória). A Cloud Sisters AI pode orientar durante toda a jornada, mas a recomendação final só aparece ao término das etapas obrigatórias.

#### RF25 — Critérios da recomendação
A recomendação considera: nível de conhecimento; acertos e dificuldades; desempenho nos minicursos; interesses profissionais; objetivos de carreira; competências desenvolvidas.

#### RF26 — Tela "Meu Próximo Passo na Cloud"
A recomendação é apresentada em uma tela dedicada com: nome do curso AWS recomendado; área de conhecimento; nível de dificuldade; justificativa personalizada; competências a desenvolver; link oficial do curso.

#### RF27 — Catálogo validado
Utilizar exclusivamente um catálogo validado de cursos AWS. Não inventar cursos, links ou certificações.

### 3.7 Gamificação e retenção

#### RF28 — Engajamento contínuo
Além da jornada principal, a plataforma oferece: missões diárias personalizadas (~5 min); exercícios de revisão; conquistas e medalhas digitais; histórico de XP; painel de evolução; sequência de dias de estudo; novas trilhas de aprendizagem; desafios práticos progressivos; e recomendações contínuas da Cloud Sisters AI.

#### RF29 — Recompensas saudáveis
As recompensas incentivam aprendizagem real, sem penalizações excessivas por ausência.

### 3.8 Pilar CONECTAR — Cloud Sisters Community

#### RF30 — Comunidade com backend real
A Cloud Sisters Community usa autenticação e armazenamento compartilhado real (não apenas dados locais do navegador) e oferece: perfis profissionais; feed de publicações; criação e edição de posts; comentários; busca de participantes; conexões profissionais; grupos de estudo; compartilhamento voluntário de conquistas; denúncia de conteúdo inadequado; moderação e controle de acesso.

#### RF31 — Feed e propriedade de conteúdo
O feed exibe autora, data e conteúdo, ordenado das publicações mais recentes para as mais antigas, com paginação. Cada participante edita/exclui apenas o próprio conteúdo; alterar/remover conteúdo de terceiros exige papel administrativo.

#### RF32 — Moderação e convivência
A plataforma oferece denúncias, moderação por função administrativa com permissões específicas, proteção básica contra spam e abuso e regras de convivência respeitosa. Não é permitida exposição não autorizada de dados pessoais.

### 3.9 Pilar CONECTAR — Career Match

#### RF33 — Desenvolvimento profissional
Com base nos interesses e competências da participante, a plataforma recomenda: projetos para portfólio; trilhas de certificação; atividades de desenvolvimento profissional; grupos de estudo; e oportunidades profissionais verificadas, quando houver integração com fontes confiáveis.

#### RF34 — Transparência de carreira
O Career Match não promete contratação nem inventa vagas. Oportunidades só aparecem quando verificadas por fontes confiáveis.

### 3.10 Dashboard da participante

#### RF35 — Painel consolidado
O dashboard exibe: progresso nos jogos; XP acumulado; estado da jornada (bloqueado/disponível/em andamento/concluído); minicursos disponíveis e concluídos; missões diárias; conquistas; evolução das competências; recomendações da Cloud Sisters AI; acesso à comunidade; e próximo passo profissional.

### 3.11 Modelo de negócio (proposta, sem cobrança nesta etapa)

#### RF36 — Arquitetura preparada para freemium
A arquitetura é preparada para um modelo freemium. Nesta etapa, preços, pagamentos e funcionalidades comerciais são tratados como proposta de negócio, sem ativar cobranças reais.

#### RF37 — Planos
- **Gratuito:** jogos educativos; os 12 minicursos; comunidade; acompanhamento básico; recomendação final de curso AWS.
- **Cloud Sisters Plus:** recursos ampliados da Cloud Sisters AI; simulados personalizados; projetos avançados; relatórios detalhados de evolução; trilhas profissionais adicionais.
- **Cloud Sisters Pro:** recursos do Plus; preparação profissional avançada; recursos adicionais de carreira; possibilidade futura de mentorias em grupo.
- **Parcerias corporativas:** programas de capacitação patrocinados; turmas de aprendizagem; relatórios agregados e autorizados; iniciativas de desenvolvimento de talentos.

#### RF38 — Natureza da cobrança
A cobrança refere-se aos serviços adicionais do Cloud Sisters, não à revenda de cursos oficiais gratuitos de terceiros.

## 4. Requisitos não funcionais

- **RNF01 — Responsividade:** interface responsiva para desktop e celular em todas as seções.
- **RNF02 — Design:** visual moderno, tecnológico, acolhedor e profissional, com paleta roxo, lilás, azul e branco; barras de progresso, cartões/missões, ícones, indicadores de XP e indicadores de estado (bloqueado/disponível/em andamento/concluído); identidade mantida na comunidade.
- **RNF03 — Idioma:** interface em português brasileiro.
- **RNF04 — Tecnologia:** frontend web padrão; funcionalidades multiusuário (contas, comunidade, persistência compartilhada) exigem backend e armazenamento compartilhado reais, cujas escolhas serão justificadas no design.md.
- **RNF05 — Autenticação e segredos:** autenticação segura por serviço gerenciado a definir; senhas nunca em texto puro; credenciais de IA e segredos nunca no frontend.
- **RNF06 — Autorização no backend:** regras de propriedade de conteúdo, papéis e **desbloqueio da jornada** aplicadas/validadas no backend.
- **RNF07 — Privacidade/LGPD:** consentimento, minimização, finalidade, separação entre dados públicos e privados, direito de editar/excluir dados e conta.
- **RNF08 — Validação e proteção:** validação de todas as entradas; prevenção de XSS e injeção; conteúdo de usuárias e respostas de IA tratados como texto seguro.
- **RNF09 — Acessibilidade:** navegação por teclado, foco visível, contraste adequado, textos legíveis; estados de bloqueio comunicados de forma acessível.
- **RNF10 — Robustez:** tratamento de erros e de falhas de rede/IA sem quebrar a experiência.
- **RNF11 — Persistência:** persistência confiável de contas, perfis, progresso da jornada, publicações, comentários e denúncias.
- **RNF12 — Escalabilidade e custos:** arquitetura preparada para expansão, com controle de custos de infraestrutura e de IA e atenção a limites de camada gratuita.

## 5. Regras de negócio

### Progressão da jornada (definitivas)
- **RG01** — A jornada principal tem três níveis **obrigatórios e sequenciais**: Iniciante → Intermediário → Expert.
- **RG02** — Cada nível tem 10 perguntas (3 alternativas, 1 correta), mantendo as regras de tentativas, explicações e XP.
- **RG03** — Concluir as 10 perguntas do nível Iniciante desbloqueia os 4 minicursos básicos.
- **RG04** — Concluir os 4 minicursos básicos desbloqueia o jogo Intermediário.
- **RG05** — Concluir as 10 perguntas do nível Intermediário desbloqueia os 4 minicursos intermediários.
- **RG06** — Concluir os 4 minicursos intermediários desbloqueia o jogo Expert.
- **RG07** — Concluir as 10 perguntas do nível Expert desbloqueia os 4 minicursos avançados.
- **RG08** — Concluir os 4 minicursos avançados finaliza a jornada principal.
- **RG09** — A recomendação final de curso AWS é liberada somente após concluir os três níveis do jogo e os 12 minicursos.
- **RG10** — Concluir uma pergunta = acertá-la OU usar as duas tentativas e ver a explicação. Não é necessário acertar todas para avançar.
- **RG11** — Concluir um minicurso = finalizar as 5 etapas, incluindo a avaliação final.
- **RG12** — Os 4 minicursos de um nível podem ser feitos em qualquer ordem, com sugestões da Cloud Sisters AI.
- **RG13** — O prazo de 5 dias de um minicurso começa ao acionar "Iniciar minicurso"; é possível concluir antes ou continuar depois sem perder progresso (ultrapassar o prazo apenas não concede a conquista "dentro do prazo").
- **RG14** — Os 60 dias são o total de conteúdo (12 × 5), não um prazo corrido obrigatório.
- **RG15** — O conhecimento inicial personaliza explicações, recomendações e revisões, mas **não permite pular etapas obrigatórias** nesta versão.
- **RG16** — A plataforma impede desbloqueios indevidos; uma etapa só abre quando seus pré-requisitos foram concluídos.

### XP
- **RG17** — XP por acerto: Iniciante = 10 (máx. 100), Intermediário = 20 (máx. 200), Expert = 30 (máx. 300); total possível = 600 XP.
- **RG18** — Duas tentativas por pergunta; acerto na 1ª ou 2ª concede XP completo; dois erros concedem 0 XP.
- **RG19** — Cada pergunta concede XP no máximo uma vez.

### IA e cursos AWS
- **RG20** — A Cloud Sisters AI é real e pode orientar durante toda a jornada; nenhum texto fixo é apresentado como se fosse gerado por IA.
- **RG21** — A recomendação final usa apenas cursos do catálogo AWS validado; não inventar cursos, links ou certificações.

### Comunidade e carreira
- **RG22** — Publicar, comentar, editar perfil, denunciar e moderar exigem autenticação.
- **RG23** — Cada participante edita/exclui apenas o próprio conteúdo; moderar conteúdo de terceiros exige papel administrativo.
- **RG24** — O feed é ordenado do mais recente ao mais antigo, com paginação.
- **RG25** — Compartilhamento de conquistas e exibição do LinkedIn são voluntários e controlados pela participante.
- **RG26** — O Career Match não promete contratação nem inventa vagas; oportunidades só aparecem quando verificadas.

### Negócio
- **RG27** — Nesta etapa não há cobrança real; planos e preços são proposta de negócio.
- **RG28** — A cobrança incide sobre serviços adicionais do Cloud Sisters, não sobre revenda de cursos gratuitos de terceiros.

## 6. Requisitos de IA

- **IA01** — Usar IA generativa real (Cloud Sisters AI) para análise de desempenho, identificação de dificuldades, orientação de carreira, sugestão de ordem dos minicursos e explicação de conceitos.
- **IA02** — A Cloud Sisters AI considera jogos, minicursos, interesses, objetivos e competências ao longo de toda a jornada.
- **IA03** — Credenciais protegidas no backend; nunca expostas no frontend.
- **IA04** — Não apresentar respostas fixas como se fossem de IA.
- **IA05** — Tratar falhas de IA com mensagem clara, sem fingir ser IA.
- **IA06** — Não usar dados privados/pessoais sem autorização apropriada.
- **IA07** — A recomendação final AWS só é liberada após concluir todas as etapas obrigatórias.
- **IA08** — Escolha de serviço, autenticação e arquitetura de IA a definir no design.md (segurança, disponibilidade, custos).

## 7. Segurança, privacidade e responsividade

- **SEG01** — Autenticação segura; senhas nunca em texto puro.
- **SEG02** — Controle de acesso por participante e por papel (participante/administradora), aplicado no backend, incluindo a validação de desbloqueios da jornada.
- **SEG03** — Proteção de dados pessoais; evitar exposição de e-mails, credenciais e informações privadas.
- **SEG04** — Validação de entradas; prevenção de XSS e injeção de código.
- **SEG05** — Segurança das integrações de IA (segredos no backend).
- **SEG06** — Proteção contra spam e abuso; regras de convivência.
- **SEG07** — Catálogo de cursos AWS validado; sem invenção de cursos/links/certificações.
- **PRIV01** — LGPD e consentimento; minimização e finalidade.
- **PRIV02** — Controle de visibilidade do perfil; LinkedIn opcional.
- **PRIV03** — Direito de editar/excluir dados pessoais e excluir a conta.
- **RESP01** — Layout responsivo para desktop e celular.
- **RESP02** — Acessibilidade básica e navegação por teclado.

## 8. Critérios de aceitação

Formato EARS (Easy Approach to Requirements Syntax).

### Conta e perfil
- **CA01** — QUANDO uma visitante se cadastra com dados válidos, O SISTEMA DEVE criar a conta com autenticação segura e NÃO DEVE armazenar a senha em texto puro.
- **CA02** — QUANDO uma participante faz login com credenciais válidas, O SISTEMA DEVE autenticá-la; SE inválidas, ENTÃO O SISTEMA DEVE recusar o acesso com mensagem clara.
- **CA03** — QUANDO a participante encerra a sessão, O SISTEMA DEVE invalidar a sessão e restringir o acesso às funcionalidades autenticadas.
- **CA04** — QUANDO a participante cria/edita o perfil com dados válidos, O SISTEMA DEVE salvar nome de exibição, foto opcional, conhecimento inicial, interesses, objetivos, competências e LinkedIn opcional.
- **CA05** — QUANDO a participante edita/exclui seus dados pessoais ou solicita exclusão da conta, O SISTEMA DEVE aplicar a ação e tratar adequadamente os dados associados.

### Jogo
- **CA06** — QUANDO a participante informa o conhecimento inicial, O SISTEMA DEVE registrá-lo e usá-lo para personalizar explicações, recomendações e revisões, SEM permitir pular etapas obrigatórias.
- **CA07** — ENQUANTO a participante está em um nível, O SISTEMA DEVE apresentar 10 perguntas, cada uma com 3 alternativas e 1 correta.
- **CA08** — QUANDO a participante erra uma pergunta pela primeira vez, O SISTEMA DEVE permitir uma segunda tentativa.
- **CA09** — QUANDO a participante acerta na 1ª ou 2ª tentativa, O SISTEMA DEVE conceder o XP completo do nível (10, 20 ou 30).
- **CA10** — QUANDO a participante erra as duas tentativas, O SISTEMA DEVE conceder 0 XP e exibir a resposta correta com explicação educativa.
- **CA11** — QUANDO a participante acerta ou esgota as duas tentativas e vê a explicação, O SISTEMA DEVE marcar a pergunta como concluída, sem exigir acerto para avançar.
- **CA12** — QUANDO uma pergunta já concedeu XP, O SISTEMA NÃO DEVE conceder XP novamente.
- **CA13** — QUANDO a participante responde, O SISTEMA DEVE salvar automaticamente progresso, tentativas, acertos e dificuldades.
- **CA14** — O SISTEMA DEVE respeitar o máximo de 100/200/300 XP por nível e 600 XP no total.

### Progressão e desbloqueio
- **CA15** — QUANDO a participante conclui as 10 perguntas do nível Iniciante, O SISTEMA DEVE desbloquear os 4 minicursos básicos.
- **CA16** — ENQUANTO os 4 minicursos básicos não estiverem concluídos, O SISTEMA NÃO DEVE desbloquear o jogo Intermediário.
- **CA17** — QUANDO a participante conclui os 4 minicursos básicos, O SISTEMA DEVE desbloquear o jogo Intermediário.
- **CA18** — QUANDO a participante conclui as 10 perguntas do nível Intermediário, O SISTEMA DEVE desbloquear os 4 minicursos intermediários.
- **CA19** — ENQUANTO os 4 minicursos intermediários não estiverem concluídos, O SISTEMA NÃO DEVE desbloquear o jogo Expert.
- **CA20** — QUANDO a participante conclui os 4 minicursos intermediários, O SISTEMA DEVE desbloquear o jogo Expert.
- **CA21** — QUANDO a participante conclui as 10 perguntas do nível Expert, O SISTEMA DEVE desbloquear os 4 minicursos avançados.
- **CA22** — QUANDO a participante conclui os 4 minicursos avançados, O SISTEMA DEVE marcar a jornada principal como finalizada.
- **CA23** — O SISTEMA DEVE exibir, para cada jogo e minicurso, o estado (bloqueado, disponível, em andamento ou concluído) e os requisitos de desbloqueio.
- **CA24** — O SISTEMA DEVE impedir desbloqueios indevidos, liberando uma etapa somente quando seus pré-requisitos foram concluídos, com validação no backend.
- **CA25** — O SISTEMA DEVE salvar automaticamente o progresso da jornada.

### Minicursos
- **CA26** — QUANDO a participante aciona "Iniciar minicurso", O SISTEMA DEVE iniciar a contagem do prazo de 5 dias a partir daquele momento.
- **CA27** — QUANDO a participante finaliza as 5 etapas de um minicurso (incluindo a avaliação final), O SISTEMA DEVE marcá-lo como concluído.
- **CA28** — QUANDO a participante conclui um minicurso dentro de 5 dias, O SISTEMA DEVE conceder a conquista de conclusão dentro do prazo.
- **CA29** — QUANDO a participante ultrapassa o prazo de 5 dias, O SISTEMA DEVE preservar o progresso e permitir concluir, mas NÃO DEVE conceder a conquista de conclusão dentro do prazo.
- **CA30** — O SISTEMA DEVE permitir realizar os 4 minicursos de um nível em qualquer ordem e DEVE apresentar as 5 etapas de forma independente de fornecedor.

### Cloud Sisters AI e recomendação AWS
- **CA31** — ENQUANTO a jornada ocorre, O SISTEMA DEVE permitir que a Cloud Sisters AI (IA real) ofereça orientações, com conteúdo efetivamente gerado por ela.
- **CA32** — SE a IA estiver indisponível, ENTÃO O SISTEMA DEVE exibir mensagem clara e NÃO DEVE apresentar texto fixo como se fosse da IA.
- **CA33** — ENQUANTO os três níveis do jogo e os 12 minicursos não estiverem concluídos, O SISTEMA NÃO DEVE liberar a recomendação final de curso AWS.
- **CA34** — QUANDO a participante conclui toda a jornada obrigatória, O SISTEMA DEVE exibir a tela "Meu Próximo Passo na Cloud" com nome do curso AWS, área, nível, justificativa personalizada, competências a desenvolver e link oficial.
- **CA35** — QUANDO uma recomendação de curso é gerada, O SISTEMA DEVE usar apenas cursos do catálogo AWS validado e NÃO DEVE inventar cursos, links ou certificações.

### Gamificação, retenção e dashboard
- **CA36** — QUANDO a participante acessa a plataforma em um novo dia, O SISTEMA DEVE oferecer missões diárias curtas e exercícios de revisão.
- **CA37** — QUANDO a participante cumpre atividades, O SISTEMA DEVE atualizar conquistas, histórico de XP, sequência de dias e evolução de competências.
- **CA38** — QUANDO a participante fica ausente, O SISTEMA NÃO DEVE aplicar penalizações excessivas.
- **CA39** — QUANDO a participante acessa o dashboard, O SISTEMA DEVE exibir progresso nos jogos, XP, estado da jornada, minicursos (disponíveis/concluídos), missões, conquistas, evolução de competências, recomendações da Cloud Sisters AI, acesso à comunidade e próximo passo profissional.

### Comunidade e carreira
- **CA40** — QUANDO uma usuária não autenticada tenta publicar, comentar, editar perfil, denunciar ou moderar, O SISTEMA NÃO DEVE permitir a ação e DEVE solicitar autenticação.
- **CA41** — QUANDO uma participante autenticada cria uma publicação válida, O SISTEMA DEVE registrá-la com autora, data e conteúdo e exibi-la no feed, ordenado do mais recente ao mais antigo e com paginação.
- **CA42** — QUANDO a autora edita/exclui o próprio post ou comentário, O SISTEMA DEVE aplicar a ação; QUANDO tenta alterar conteúdo de terceiros sem papel administrativo, O SISTEMA NÃO DEVE permitir.
- **CA43** — QUANDO uma participante denuncia conteúdo, O SISTEMA DEVE registrar a denúncia; e uma administradora DEVE poder analisá-la e moderar conforme suas permissões.
- **CA44** — QUANDO padrões de spam/abuso são detectados, O SISTEMA DEVE aplicar proteção básica (ex.: limitação de taxa).
- **CA45** — QUANDO o Career Match gera recomendações, O SISTEMA DEVE basear-se nos interesses/competências e NÃO DEVE prometer contratação nem inventar vagas; oportunidades só aparecem quando verificadas por fontes confiáveis.

### Negócio
- **CA46** — ENQUANTO o modelo comercial estiver em fase de proposta, O SISTEMA NÃO DEVE ativar cobranças reais; os planos são apresentados como proposta.

### Segurança, privacidade, acessibilidade e responsividade
- **CA47** — QUANDO conteúdo de usuárias ou respostas de IA são exibidos, O SISTEMA DEVE tratá-los como texto seguro, prevenindo XSS e injeção.
- **CA48** — O SISTEMA DEVE aplicar autorização no backend (incluindo desbloqueios da jornada), não apenas na interface.
- **CA49** — O SISTEMA NÃO DEVE expor e-mails, credenciais ou informações privadas a usuárias não autorizadas.
- **CA50** — O SISTEMA DEVE ser utilizável por teclado, com foco visível, e se adaptar a desktop e celular, mantendo a identidade visual (roxo, lilás, azul e branco) e a identidade Cloud Sisters.

## 9. Fases de implementação

- **Fase 1 — Plataforma educacional:** cadastro, perfis, jogos, XP, minicursos, progressão/desbloqueio e dashboard.
- **Fase 2 — Inteligência e comunidade:** Cloud Sisters AI, recomendação final AWS, Cloud Sisters Community e personalização.
- **Fase 3 — Engajamento e carreira:** missões diárias, conquistas avançadas, novas trilhas e Career Match.
- **Fase 4 — Monetização:** planos pagos, assinaturas, pagamentos e parcerias corporativas.

A visão completa do produto é preservada; os recursos essenciais (Fases 1–2) são distinguidos dos previstos para versões futuras (Fases 3–4).

## 10. Escopo essencial vs. futuro

### Essencial (MVP — Fases 1 e 2)
- Cadastro/login, perfil e privacidade/LGPD.
- Jogo de 3 níveis (10 perguntas cada), XP, tentativas, explicações e salvamento automático.
- 12 minicursos com 5 etapas e **progressão obrigatória e sequencial** (jogo → minicursos → próximo jogo).
- Estados de bloqueio/disponível/em andamento/concluído e requisitos de desbloqueio visíveis.
- Cloud Sisters AI real durante a jornada e recomendação final AWS (após concluir tudo) com catálogo validado.
- Cloud Sisters Community com backend real (perfis, feed, comentários, busca, denúncias, moderação básica).
- Dashboard consolidado.
- Segurança, acessibilidade e responsividade.

### Futuro (Fases 3 e 4)
- Missões diárias avançadas, conquistas avançadas, novas trilhas e desafios progressivos contínuos.
- Career Match completo (incluindo oportunidades verificadas por integração com fontes confiáveis).
- Conexões profissionais recomendadas por IA.
- Planos pagos (Plus/Pro), pagamentos e parcerias corporativas.
- Grupos de estudo avançados e mentorias em grupo.

## 11. Decisões de produto pendentes

Itens que ainda precisam de definição e NÃO foram assumidos neste documento:

1. **Avaliação final dos minicursos (Etapa 5):** formato (quiz, projeto prático, auto-avaliação), nota/critério mínimo de aprovação e se concede XP e/ou conquista próprios.
2. **Uso do conhecimento inicial:** como exatamente a personalização de explicações/revisões difere entre Iniciante, Intermediário e Avançado, já que nenhum pode pular etapas nesta versão.
3. **Visitante sem conta:** se, nesta versão, a jornada pode ser iniciada sem cadastro ou se o cadastro é obrigatório para jogar (e, em caso afirmativo, como sincronizar progresso local anterior).
4. **Conquistas e sequência (streak):** critérios de concessão de medalhas, o que conta como "dia de estudo" e comportamento da sequência em ausências.
5. **Conquista "dentro do prazo":** se há XP/medalha específicos e se afeta a conclusão da jornada (presume-se que não afeta o desbloqueio, apenas a conquista).
6. **Career Match:** quais fontes confiáveis de oportunidades verificadas e regras de exibição.
7. **Moderação:** quem recebe papel administrativo e o fluxo de análise de denúncias (automático vs. manual).
8. **Modelo de negócio:** limites exatos entre Gratuito/Plus/Pro, preços e gatilhos de upgrade (tratados como proposta).
9. **Serviços de infraestrutura:** autenticação gerenciada, banco de dados e serviço de IA (a justificar no design.md).
10. **Reinício/refazer:** se a participante pode refazer jogos/minicursos já concluídos e se isso afeta XP (que não é duplicado) ou conquistas.
