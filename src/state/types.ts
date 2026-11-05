import type { LevelId } from '../data/questions'

export type KnowledgeLevel = 'iniciante' | 'intermediario' | 'avancado'

export interface QuestionResult {
  attempts: number
  correct: boolean
  xpAwarded: boolean
  completed: boolean
}

export interface MinicourseProgress {
  startedAt: number | null
  stepsDone: number[] // números das etapas concluídas (1..5)
  completedAt: number | null
}

export interface Profile {
  displayName: string
  knowledgeLevel: KnowledgeLevel | null
}

export interface GameState {
  startedJourney: boolean
  profile: Profile
  // resultados por id de pergunta
  questionResults: Record<string, QuestionResult>
  // progresso por id de minicurso
  minicourseProgress: Record<string, MinicourseProgress>
}

export const EMPTY_STATE: GameState = {
  startedJourney: false,
  profile: { displayName: '', knowledgeLevel: null },
  questionResults: {},
  minicourseProgress: {},
}

export type StageStatus = 'bloqueado' | 'disponivel' | 'em_andamento' | 'concluido'

export interface GameStageView {
  level: LevelId
  status: StageStatus
  completedQuestions: number
  totalQuestions: number
  xp: number
}
