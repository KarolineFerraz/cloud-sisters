import { LEVEL_ORDER, XP_BY_LEVEL, questionsByLevel } from '../data/questions'
import type { LevelId } from '../data/questions'
import { GROUP_BY_LEVEL, minicoursesByGroup } from '../data/minicourses'
import type { GameState, StageStatus } from './types'

// ---- Perguntas / jogo ----

export function levelCompletedCount(state: GameState, level: LevelId): number {
  return questionsByLevel(level).filter((q) => state.questionResults[q.id]?.completed).length
}

export function isGameLevelComplete(state: GameState, level: LevelId): boolean {
  const total = questionsByLevel(level).length
  return levelCompletedCount(state, level) === total
}

export function levelXp(state: GameState, level: LevelId): number {
  const xpEach = XP_BY_LEVEL[level]
  return questionsByLevel(level).filter((q) => state.questionResults[q.id]?.xpAwarded).length * xpEach
}

export function totalXp(state: GameState): number {
  return LEVEL_ORDER.reduce((sum, lvl) => sum + levelXp(state, lvl), 0)
}

// ---- Minicursos ----

export function isMinicourseComplete(state: GameState, minicourseId: string): boolean {
  return state.minicourseProgress[minicourseId]?.completedAt != null
}

export function groupCompletedCount(state: GameState, level: LevelId): number {
  const group = GROUP_BY_LEVEL[level]
  return minicoursesByGroup(group).filter((m) => isMinicourseComplete(state, m.id)).length
}

export function isGroupComplete(state: GameState, level: LevelId): boolean {
  const group = GROUP_BY_LEVEL[level]
  const list = minicoursesByGroup(group)
  return list.length > 0 && list.every((m) => isMinicourseComplete(state, m.id))
}

// ---- Regras de desbloqueio (progressão obrigatória e sequencial) ----
// Iniciante jogo -> minicursos básicos -> Intermediário jogo -> minicursos intermediários
// -> Expert jogo -> minicursos avançados -> jornada finalizada -> recomendação AWS.

export function isGameLevelUnlocked(state: GameState, level: LevelId): boolean {
  if (level === 'iniciante') return true
  if (level === 'intermediario') return isGroupComplete(state, 'iniciante')
  if (level === 'expert') return isGroupComplete(state, 'intermediario')
  return false
}

export function isMinicourseGroupUnlocked(state: GameState, level: LevelId): boolean {
  // Os minicursos de um nível desbloqueiam ao concluir o jogo daquele nível
  return isGameLevelComplete(state, level)
}

export function gameStageStatus(state: GameState, level: LevelId): StageStatus {
  if (!isGameLevelUnlocked(state, level)) return 'bloqueado'
  if (isGameLevelComplete(state, level)) return 'concluido'
  if (levelCompletedCount(state, level) > 0) return 'em_andamento'
  return 'disponivel'
}

export function minicourseGroupStatus(state: GameState, level: LevelId): StageStatus {
  if (!isMinicourseGroupUnlocked(state, level)) return 'bloqueado'
  if (isGroupComplete(state, level)) return 'concluido'
  if (groupCompletedCount(state, level) > 0) return 'em_andamento'
  return 'disponivel'
}

export function minicourseStatus(state: GameState, level: LevelId, minicourseId: string): StageStatus {
  if (!isMinicourseGroupUnlocked(state, level)) return 'bloqueado'
  if (isMinicourseComplete(state, minicourseId)) return 'concluido'
  if ((state.minicourseProgress[minicourseId]?.stepsDone.length ?? 0) > 0) return 'em_andamento'
  return 'disponivel'
}

// Jornada completa: todos os 3 jogos e os 12 minicursos concluídos
export function isJourneyComplete(state: GameState): boolean {
  return LEVEL_ORDER.every((lvl) => isGameLevelComplete(state, lvl) && isGroupComplete(state, lvl))
}

export const STATUS_LABELS: Record<StageStatus, string> = {
  bloqueado: 'Bloqueado',
  disponivel: 'Disponível',
  em_andamento: 'Em andamento',
  concluido: 'Concluído',
}
