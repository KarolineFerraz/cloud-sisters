import type { LevelId } from './questions'

export type MinicourseGroup = 'basico' | 'intermediario' | 'avancado'

export interface MinicourseStep {
  no: number
  title: string
  kind: 'introducao' | 'fundamentos' | 'aplicacoes' | 'pratica' | 'avaliacao'
  content: string
}

export interface Minicourse {
  id: string
  group: MinicourseGroup
  title: string
  summary: string
  steps: MinicourseStep[]
}

// Mapeia o grupo de minicurso ao nível de jogo que o desbloqueia
export const GROUP_BY_LEVEL: Record<LevelId, MinicourseGroup> = {
  iniciante: 'basico',
  intermediario: 'intermediario',
  expert: 'avancado',
}

export const GROUP_LABELS: Record<MinicourseGroup, string> = {
  basico: 'Básicos',
  intermediario: 'Intermediários',
  avancado: 'Avançados',
}

function steps(topic: string): MinicourseStep[] {
  return [
    {
      no: 1,
      kind: 'introducao',
      title: 'Introdução',
      content: `Visão geral de "${topic}": por que o tema importa e onde ele aparece no dia a dia da Cloud.`,
    },
    {
      no: 2,
      kind: 'fundamentos',
      title: 'Fundamentos técnicos',
      content: `Conceitos essenciais de "${topic}", com definições e termos-chave explicados de forma acessível.`,
    },
    {
      no: 3,
      kind: 'aplicacoes',
      title: 'Aplicações profissionais',
      content: `Como "${topic}" é usado em projetos reais e em funções de Cloud no mercado.`,
    },
    {
      no: 4,
      kind: 'pratica',
      title: 'Atividade prática',
      content: `Exercício guiado para aplicar "${topic}" em um cenário simulado.`,
    },
    {
      no: 5,
      kind: 'avaliacao',
      title: 'Avaliação final',
      content: `Revisão e checagem de aprendizado sobre "${topic}" para concluir o minicurso.`,
    },
  ]
}

export const minicourses: Minicourse[] = [
  // Básicos (Iniciante)
  { id: 'mc-1', group: 'basico', title: 'Introdução à Computação em Nuvem', summary: 'O que é nuvem e por que ela transformou a TI.', steps: steps('Introdução à Computação em Nuvem') },
  { id: 'mc-2', group: 'basico', title: 'Como a Nuvem Funciona', summary: 'Data centers, virtualização e entrega sob demanda.', steps: steps('Como a Nuvem Funciona') },
  { id: 'mc-3', group: 'basico', title: 'Modelos de Serviço: IaaS, PaaS e SaaS', summary: 'Diferenças e quando usar cada modelo.', steps: steps('Modelos de Serviço: IaaS, PaaS e SaaS') },
  { id: 'mc-4', group: 'basico', title: 'Nuvem Pública, Privada e Híbrida', summary: 'Modelos de implantação e seus trade-offs.', steps: steps('Nuvem Pública, Privada e Híbrida') },

  // Intermediários
  { id: 'mc-5', group: 'intermediario', title: 'Redes e Conectividade na Nuvem', summary: 'VPC, sub-redes, rotas e conectividade.', steps: steps('Redes e Conectividade na Nuvem') },
  { id: 'mc-6', group: 'intermediario', title: 'Armazenamento em Nuvem', summary: 'Objetos, blocos, arquivos e durabilidade.', steps: steps('Armazenamento em Nuvem') },
  { id: 'mc-7', group: 'intermediario', title: 'Máquinas Virtuais e Contêineres', summary: 'VMs, contêineres e quando usar cada um.', steps: steps('Máquinas Virtuais e Contêineres') },
  { id: 'mc-8', group: 'intermediario', title: 'Bancos de Dados em Nuvem', summary: 'Relacional, NoSQL e serviços gerenciados.', steps: steps('Bancos de Dados em Nuvem') },

  // Avançados (Expert)
  { id: 'mc-9', group: 'avancado', title: 'Segurança e Proteção de Dados', summary: 'Responsabilidade compartilhada, IAM e criptografia.', steps: steps('Segurança e Proteção de Dados') },
  { id: 'mc-10', group: 'avancado', title: 'Escalabilidade e Alta Disponibilidade', summary: 'Auto scaling, zonas e tolerância a falhas.', steps: steps('Escalabilidade e Alta Disponibilidade') },
  { id: 'mc-11', group: 'avancado', title: 'Monitoramento e Custos em Nuvem', summary: 'Observabilidade e otimização de custos (FinOps).', steps: steps('Monitoramento e Custos em Nuvem') },
  { id: 'mc-12', group: 'avancado', title: 'Projeto Prático de Cloud Computing', summary: 'Integrando os conceitos em um projeto final.', steps: steps('Projeto Prático de Cloud Computing') },
]

export function minicoursesByGroup(group: MinicourseGroup): Minicourse[] {
  return minicourses.filter((m) => m.group === group)
}
