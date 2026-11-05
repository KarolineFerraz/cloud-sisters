export type LevelId = 'iniciante' | 'intermediario' | 'expert'

export interface Question {
  id: string
  level: LevelId
  subject: string
  statement: string
  options: [string, string, string]
  correctIndex: 0 | 1 | 2
  explanation: string
}

export const XP_BY_LEVEL: Record<LevelId, number> = {
  iniciante: 10,
  intermediario: 20,
  expert: 30,
}

export const LEVEL_LABELS: Record<LevelId, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  expert: 'Expert',
}

export const LEVEL_ORDER: LevelId[] = ['iniciante', 'intermediario', 'expert']

export const questions: Question[] = [
  // ===================== INICIANTE =====================
  {
    id: 'ini-1',
    level: 'iniciante',
    subject: 'Fundamentos de nuvem',
    statement: 'O que é Computação em Nuvem?',
    options: [
      'Entrega de recursos de TI (servidores, armazenamento, software) sob demanda pela internet',
      'Um tipo de cabo de rede usado apenas em data centers',
      'Um programa que roda somente offline no seu computador',
    ],
    correctIndex: 0,
    explanation:
      'Computação em nuvem é a entrega de recursos de TI sob demanda pela internet, com pagamento conforme o uso, sem precisar manter a infraestrutura física.',
  },
  {
    id: 'ini-2',
    level: 'iniciante',
    subject: 'Modelos de serviço',
    statement: 'No modelo SaaS (Software as a Service), o que a pessoa usuária normalmente faz?',
    options: [
      'Gerencia o sistema operacional e os servidores físicos',
      'Usa o software pronto pela internet, sem gerenciar a infraestrutura',
      'Monta o próprio data center para rodar o aplicativo',
    ],
    correctIndex: 1,
    explanation:
      'Em SaaS, o provedor cuida de toda a infraestrutura e do software. A usuária apenas acessa a aplicação pronta (ex.: um webmail), sem gerenciar servidores.',
  },
  {
    id: 'ini-3',
    level: 'iniciante',
    subject: 'Benefícios da nuvem',
    statement: 'Qual é uma vantagem típica da computação em nuvem?',
    options: [
      'Custo fixo obrigatório independente do uso',
      'Elasticidade: aumentar ou reduzir recursos conforme a demanda',
      'Impossibilidade de acessar os dados remotamente',
    ],
    correctIndex: 1,
    explanation:
      'A elasticidade permite escalar recursos para cima ou para baixo conforme a necessidade, pagando pelo que se usa.',
  },
  {
    id: 'ini-4',
    level: 'iniciante',
    subject: 'Modelos de implantação',
    statement: 'O que caracteriza uma nuvem pública?',
    options: [
      'Infraestrutura dedicada a uma única organização, no local dela',
      'Recursos oferecidos por um provedor e compartilhados entre vários clientes pela internet',
      'Uma rede isolada sem qualquer acesso externo',
    ],
    correctIndex: 1,
    explanation:
      'Na nuvem pública, o provedor oferece recursos compartilhados a múltiplos clientes pela internet, como AWS, Azure e Google Cloud.',
  },
  {
    id: 'ini-5',
    level: 'iniciante',
    subject: 'Modelos de serviço',
    statement: 'IaaS (Infrastructure as a Service) oferece principalmente o quê?',
    options: [
      'Aplicações finais prontas para o usuário',
      'Blocos de infraestrutura como servidores, rede e armazenamento virtualizados',
      'Apenas planilhas e documentos online',
    ],
    correctIndex: 1,
    explanation:
      'IaaS entrega infraestrutura virtualizada (computação, rede, armazenamento), dando controle sobre o sistema operacional e as aplicações.',
  },
  {
    id: 'ini-6',
    level: 'iniciante',
    subject: 'Economia da nuvem',
    statement: 'O modelo "pague conforme o uso" (pay-as-you-go) significa:',
    options: [
      'Pagar somente pelos recursos efetivamente consumidos',
      'Pagar uma taxa única vitalícia por todos os serviços',
      'Nunca pagar nada pelos serviços de nuvem',
    ],
    correctIndex: 0,
    explanation:
      'No pay-as-you-go você paga apenas pelo que consome (tempo de computação, armazenamento etc.), evitando grandes gastos iniciais.',
  },
  {
    id: 'ini-7',
    level: 'iniciante',
    subject: 'Fundamentos de nuvem',
    statement: 'O que é um data center no contexto de nuvem?',
    options: [
      'Um aplicativo de edição de imagens',
      'Uma instalação física com servidores e equipamentos que hospedam os recursos de nuvem',
      'Um protocolo de criptografia de e-mails',
    ],
    correctIndex: 1,
    explanation:
      'Data centers são instalações físicas onde ficam os servidores e equipamentos que sustentam os serviços de nuvem.',
  },
  {
    id: 'ini-8',
    level: 'iniciante',
    subject: 'Modelos de serviço',
    statement: 'PaaS (Platform as a Service) é mais útil para quem quer:',
    options: [
      'Focar em desenvolver aplicações sem gerenciar servidores e sistema operacional',
      'Comprar apenas hardware físico para o escritório',
      'Usar um editor de texto instalado localmente',
    ],
    correctIndex: 0,
    explanation:
      'PaaS fornece uma plataforma pronta (runtime, banco, ferramentas) para desenvolver e publicar aplicações sem gerenciar a infraestrutura subjacente.',
  },
  {
    id: 'ini-9',
    level: 'iniciante',
    subject: 'Disponibilidade',
    statement: 'Por que a nuvem costuma oferecer alta disponibilidade?',
    options: [
      'Porque usa um único servidor sempre ligado',
      'Porque distribui recursos em vários servidores e locais, com redundância',
      'Porque desliga os serviços à noite para descansar',
    ],
    correctIndex: 1,
    explanation:
      'A redundância e a distribuição em múltiplos servidores e regiões ajudam a manter os serviços disponíveis mesmo diante de falhas.',
  },
  {
    id: 'ini-10',
    level: 'iniciante',
    subject: 'Acesso',
    statement: 'Uma característica central da nuvem é o acesso:',
    options: [
      'Somente presencial, dentro do data center',
      'Amplo pela rede, de diferentes dispositivos e lugares',
      'Restrito a um único computador cadastrado',
    ],
    correctIndex: 1,
    explanation:
      'O acesso amplo pela rede permite usar os recursos de diversos dispositivos e locais, bastando conexão com a internet.',
  },

  // ===================== INTERMEDIÁRIO =====================
  {
    id: 'int-1',
    level: 'intermediario',
    subject: 'Redes',
    statement: 'O que é uma VPC (Virtual Private Cloud)?',
    options: [
      'Um antivírus para servidores',
      'Uma rede virtual isolada logicamente dentro da nuvem para seus recursos',
      'Um tipo de disco rígido físico',
    ],
    correctIndex: 1,
    explanation:
      'Uma VPC é uma rede virtual isolada logicamente onde você provisiona recursos com controle sobre sub-redes, rotas e segurança.',
  },
  {
    id: 'int-2',
    level: 'intermediario',
    subject: 'Armazenamento',
    statement: 'Armazenamento de objetos (object storage) é mais indicado para:',
    options: [
      'Guardar arquivos como imagens, vídeos e backups de forma escalável',
      'Substituir a memória RAM do servidor',
      'Executar diretamente o código da aplicação',
    ],
    correctIndex: 0,
    explanation:
      'O armazenamento de objetos (ex.: Amazon S3) é ideal para grandes volumes de arquivos não estruturados, com alta durabilidade e escalabilidade.',
  },
  {
    id: 'int-3',
    level: 'intermediario',
    subject: 'Contêineres',
    statement: 'Qual a principal diferença entre contêineres e máquinas virtuais?',
    options: [
      'Contêineres compartilham o kernel do sistema operacional e são mais leves',
      'Contêineres precisam sempre de mais recursos que uma VM',
      'Máquinas virtuais não podem rodar na nuvem',
    ],
    correctIndex: 0,
    explanation:
      'Contêineres compartilham o kernel do SO hospedeiro, sendo mais leves e rápidos de iniciar que VMs, que virtualizam um SO completo.',
  },
  {
    id: 'int-4',
    level: 'intermediario',
    subject: 'Bancos de dados',
    statement: 'Um banco de dados relacional gerenciado na nuvem tipicamente:',
    options: [
      'Elimina a necessidade de qualquer modelagem de dados',
      'Cuida de tarefas como backups, patches e alta disponibilidade por você',
      'Funciona apenas sem conexão com a internet',
    ],
    correctIndex: 1,
    explanation:
      'Serviços gerenciados (ex.: Amazon RDS) automatizam backups, atualizações e replicação, reduzindo o esforço operacional.',
  },
  {
    id: 'int-5',
    level: 'intermediario',
    subject: 'Redes',
    statement: 'Para que serve um balanceador de carga (load balancer)?',
    options: [
      'Distribuir o tráfego entre várias instâncias para melhorar disponibilidade e desempenho',
      'Aumentar o preço de cada requisição',
      'Armazenar senhas em texto puro',
    ],
    correctIndex: 0,
    explanation:
      'O balanceador distribui as requisições entre múltiplas instâncias, evitando sobrecarga e aumentando a disponibilidade.',
  },
  {
    id: 'int-6',
    level: 'intermediario',
    subject: 'Computação',
    statement: 'O que caracteriza a computação sem servidor (serverless)?',
    options: [
      'Não existem servidores em lugar nenhum',
      'Você executa código sem gerenciar servidores; o provedor escala automaticamente',
      'Você precisa manter servidores ligados 24h manualmente',
    ],
    correctIndex: 1,
    explanation:
      'Em serverless (ex.: funções como AWS Lambda), existem servidores, mas o provedor os gerencia e escala; você foca no código e paga pela execução.',
  },
  {
    id: 'int-7',
    level: 'intermediario',
    subject: 'Bancos de dados',
    statement: 'Bancos NoSQL são geralmente escolhidos quando se precisa de:',
    options: [
      'Esquema rígido e transações relacionais complexas sempre',
      'Flexibilidade de esquema e escala horizontal para grandes volumes',
      'Apenas armazenar um único registro para sempre',
    ],
    correctIndex: 1,
    explanation:
      'Bancos NoSQL oferecem esquemas flexíveis e escalam horizontalmente, sendo úteis para grandes volumes e dados variados.',
  },
  {
    id: 'int-8',
    level: 'intermediario',
    subject: 'Armazenamento',
    statement: 'O que é redundância de dados na nuvem?',
    options: [
      'Apagar cópias para economizar espaço',
      'Manter cópias dos dados em locais diferentes para evitar perdas',
      'Guardar dados somente em um pen drive',
    ],
    correctIndex: 1,
    explanation:
      'Redundância significa manter múltiplas cópias dos dados (muitas vezes em locais distintos) para garantir durabilidade e disponibilidade.',
  },
  {
    id: 'int-9',
    level: 'intermediario',
    subject: 'Redes',
    statement: 'Uma sub-rede pública dentro de uma VPC normalmente:',
    options: [
      'Tem rota para a internet por meio de um gateway de internet',
      'Nunca pode conter nenhum recurso',
      'É acessível apenas por cabo físico',
    ],
    correctIndex: 0,
    explanation:
      'Uma sub-rede pública possui rota para um internet gateway, permitindo que recursos nela (como um servidor web) sejam acessíveis pela internet.',
  },
  {
    id: 'int-10',
    level: 'intermediario',
    subject: 'Computação',
    statement: 'Escalar horizontalmente significa:',
    options: [
      'Adicionar mais instâncias para distribuir a carga',
      'Trocar o monitor do servidor',
      'Diminuir a quantidade de memória de uma única máquina',
    ],
    correctIndex: 0,
    explanation:
      'Escala horizontal (scale out) adiciona mais instâncias; escala vertical (scale up) aumenta os recursos de uma única instância.',
  },

  // ===================== EXPERT =====================
  {
    id: 'exp-1',
    level: 'expert',
    subject: 'Segurança',
    statement: 'O modelo de responsabilidade compartilhada na nuvem indica que:',
    options: [
      'O provedor é responsável por absolutamente tudo, inclusive seus dados',
      'Segurança "da" nuvem é do provedor; segurança "na" nuvem (dados, configs) é da cliente',
      'A cliente não tem nenhuma responsabilidade de segurança',
    ],
    correctIndex: 1,
    explanation:
      'No modelo de responsabilidade compartilhada, o provedor protege a infraestrutura (segurança da nuvem) e a cliente protege seus dados, acessos e configurações (segurança na nuvem).',
  },
  {
    id: 'exp-2',
    level: 'expert',
    subject: 'Alta disponibilidade',
    statement: 'Distribuir uma aplicação em múltiplas zonas de disponibilidade serve para:',
    options: [
      'Reduzir a durabilidade dos dados',
      'Tolerar falhas de um local físico sem derrubar a aplicação',
      'Aumentar a latência propositalmente',
    ],
    correctIndex: 1,
    explanation:
      'Zonas de disponibilidade são locais isolados dentro de uma região. Distribuir entre elas aumenta a tolerância a falhas de um data center específico.',
  },
  {
    id: 'exp-3',
    level: 'expert',
    subject: 'Segurança',
    statement: 'O princípio do menor privilégio (least privilege) recomenda:',
    options: [
      'Dar acesso de administrador a todas as usuárias',
      'Conceder apenas as permissões estritamente necessárias para cada tarefa',
      'Desativar toda a autenticação para facilitar o acesso',
    ],
    correctIndex: 1,
    explanation:
      'O menor privilégio reduz a superfície de ataque concedendo somente as permissões necessárias para cada identidade executar sua função.',
  },
  {
    id: 'exp-4',
    level: 'expert',
    subject: 'Custos',
    statement: 'Uma boa prática de otimização de custos (FinOps) é:',
    options: [
      'Ignorar recursos ociosos',
      'Monitorar uso, desligar recursos ociosos e usar modelos de preço adequados',
      'Superdimensionar tudo por precaução permanente',
    ],
    correctIndex: 1,
    explanation:
      'Otimizar custos envolve observar o uso, eliminar recursos ociosos e escolher modelos de preço (sob demanda, reservado, spot) adequados à carga.',
  },
  {
    id: 'exp-5',
    level: 'expert',
    subject: 'Escalabilidade',
    statement: 'Auto Scaling (escalonamento automático) permite:',
    options: [
      'Ajustar automaticamente a quantidade de instâncias conforme métricas de demanda',
      'Impedir qualquer mudança no número de servidores',
      'Apagar os dados quando o tráfego sobe',
    ],
    correctIndex: 0,
    explanation:
      'O Auto Scaling adiciona ou remove instâncias com base em métricas (CPU, requisições), equilibrando desempenho e custo.',
  },
  {
    id: 'exp-6',
    level: 'expert',
    subject: 'Monitoramento',
    statement: 'Observabilidade na nuvem geralmente combina:',
    options: [
      'Apenas o preço mensal da fatura',
      'Métricas, logs e rastreamento (traces) para entender o comportamento do sistema',
      'Somente o nome das instâncias',
    ],
    correctIndex: 1,
    explanation:
      'Observabilidade se apoia em métricas, logs e traces para diagnosticar desempenho e falhas em sistemas distribuídos.',
  },
  {
    id: 'exp-7',
    level: 'expert',
    subject: 'Segurança',
    statement: 'Criptografia "em repouso" (at rest) protege os dados quando eles estão:',
    options: [
      'Trafegando pela rede',
      'Armazenados em disco ou no serviço de armazenamento',
      'Sendo digitados pela usuária',
    ],
    correctIndex: 1,
    explanation:
      'Criptografia em repouso protege dados armazenados; criptografia em trânsito protege os dados enquanto trafegam pela rede.',
  },
  {
    id: 'exp-8',
    level: 'expert',
    subject: 'Resiliência',
    statement: 'RTO e RPO em um plano de recuperação de desastres referem-se, respectivamente, a:',
    options: [
      'Tempo aceitável para restaurar o serviço e quantidade aceitável de dados perdidos',
      'Nome de duas regiões de nuvem',
      'Tipos de cabos de rede',
    ],
    correctIndex: 0,
    explanation:
      'RTO (Recovery Time Objective) é o tempo máximo aceitável para restaurar o serviço; RPO (Recovery Point Objective) é a perda máxima aceitável de dados em termos de tempo.',
  },
  {
    id: 'exp-9',
    level: 'expert',
    subject: 'Infraestrutura como código',
    statement: 'Infraestrutura como Código (IaC) traz como principal benefício:',
    options: [
      'Provisionar e versionar a infraestrutura de forma automatizada e repetível',
      'Configurar tudo manualmente a cada vez',
      'Impedir qualquer automação',
    ],
    correctIndex: 0,
    explanation:
      'IaC descreve a infraestrutura em arquivos versionáveis, permitindo provisionamento automatizado, repetível e auditável.',
  },
  {
    id: 'exp-10',
    level: 'expert',
    subject: 'Arquitetura',
    statement: 'Uma arquitetura de microsserviços se caracteriza por:',
    options: [
      'Um único bloco de código monolítico que faz tudo',
      'Serviços pequenos e independentes que se comunicam por APIs',
      'Proibir qualquer comunicação entre componentes',
    ],
    correctIndex: 1,
    explanation:
      'Microsserviços dividem a aplicação em serviços pequenos, independentes e implantáveis separadamente, que se comunicam por APIs.',
  },
]

export function questionsByLevel(level: LevelId): Question[] {
  return questions.filter((q) => q.level === level)
}
