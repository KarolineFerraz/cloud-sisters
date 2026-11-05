import type { LevelId } from './questions'

// Catálogo de cursos AWS. Os itens abaixo são cursos reais e gratuitos da AWS
// (AWS Skill Builder / AWS Educate). Os links apontam para páginas oficiais da AWS.
// Nenhum curso ou link deve ser inventado: edite este catálogo apenas com itens validados.
export interface AwsCourse {
  id: string
  name: string
  area: string
  level: LevelId
  url: string
  skills: string[]
}

export const awsCatalog: AwsCourse[] = [
  {
    id: 'aws-cloud-practitioner-essentials',
    name: 'AWS Cloud Practitioner Essentials',
    area: 'Fundamentos de Cloud',
    level: 'iniciante',
    url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
    skills: ['Fundamentos de nuvem', 'Modelos de serviço', 'Segurança básica', 'Precificação'],
  },
  {
    id: 'aws-educate-intro-cloud',
    name: 'AWS Educate: Introduction to Cloud 101',
    area: 'Introdução à Nuvem',
    level: 'iniciante',
    url: 'https://aws.amazon.com/education/awseducate/',
    skills: ['Conceitos de nuvem', 'Primeiros passos', 'Casos de uso'],
  },
  {
    id: 'aws-solutions-architect-associate',
    name: 'Exam Prep: AWS Certified Solutions Architect – Associate',
    area: 'Arquitetura de Soluções',
    level: 'intermediario',
    url: 'https://aws.amazon.com/training/learn-about/architect/',
    skills: ['Redes (VPC)', 'Armazenamento', 'Computação', 'Alta disponibilidade'],
  },
  {
    id: 'aws-developer-learning-plan',
    name: 'Developer Learning Plan (AWS Skill Builder)',
    area: 'Desenvolvimento em Nuvem',
    level: 'intermediario',
    url: 'https://skillbuilder.aws/',
    skills: ['Serverless', 'Contêineres', 'Bancos de dados gerenciados', 'APIs'],
  },
  {
    id: 'aws-security-learning-plan',
    name: 'Security Learning Plan (AWS Skill Builder)',
    area: 'Segurança',
    level: 'expert',
    url: 'https://skillbuilder.aws/',
    skills: ['IAM e menor privilégio', 'Criptografia', 'Responsabilidade compartilhada'],
  },
  {
    id: 'aws-solutions-architect-professional',
    name: 'Exam Prep: AWS Certified Solutions Architect – Professional',
    area: 'Arquitetura Avançada',
    level: 'expert',
    url: 'https://aws.amazon.com/training/learn-about/architect/',
    skills: ['Resiliência', 'Escalabilidade', 'Custos (FinOps)', 'Arquiteturas complexas'],
  },
]

export function awsCoursesByLevel(level: LevelId): AwsCourse[] {
  return awsCatalog.filter((c) => c.level === level)
}
