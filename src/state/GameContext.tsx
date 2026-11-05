import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { XP_BY_LEVEL, questions } from '../data/questions'
import { minicourses } from '../data/minicourses'
import { EMPTY_STATE, type GameState, type KnowledgeLevel, type MinicourseProgress } from './types'

const STORAGE_KEY = 'cloud-sisters-state-v1'

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return structuredClone(EMPTY_STATE)
    const parsed = JSON.parse(raw) as GameState
    return { ...structuredClone(EMPTY_STATE), ...parsed }
  } catch {
    return structuredClone(EMPTY_STATE)
  }
}

interface GameContextValue {
  state: GameState
  startJourney: (displayName: string, knowledgeLevel: KnowledgeLevel) => void
  answerQuestion: (questionId: string, optionIndex: number) => { correct: boolean; revealed: boolean }
  startMinicourse: (minicourseId: string) => void
  completeMinicourseStep: (minicourseId: string, stepNo: number) => void
  resetProgress: () => void
}

const GameContext = createContext<GameContextValue | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignora falhas de armazenamento (ex.: modo privado)
    }
  }, [state])

  const value = useMemo<GameContextValue>(() => {
    function startJourney(displayName: string, knowledgeLevel: KnowledgeLevel) {
      setState((s) => ({
        ...s,
        startedJourney: true,
        profile: { displayName: displayName.trim().slice(0, 60), knowledgeLevel },
      }))
    }

    function answerQuestion(questionId: string, optionIndex: number) {
      const question = questions.find((q) => q.id === questionId)
      if (!question) return { correct: false, revealed: false }

      let correct = false
      let revealed = false

      setState((s) => {
        const prev = s.questionResults[questionId] ?? {
          attempts: 0,
          correct: false,
          xpAwarded: false,
          completed: false,
        }
        if (prev.completed) {
          correct = prev.correct
          revealed = !prev.correct
          return s
        }

        const attempts = prev.attempts + 1
        const isCorrect = optionIndex === question.correctIndex
        correct = isCorrect

        let next = { ...prev, attempts }
        if (isCorrect) {
          // concede XP apenas uma vez (sem duplicidade)
          next = { ...next, correct: true, completed: true, xpAwarded: prev.xpAwarded ? true : true }
          revealed = false
        } else if (attempts >= 2) {
          next = { ...next, correct: false, completed: true }
          revealed = true // mostra a resposta correta + explicação
        } else {
          revealed = false // permite segunda tentativa
        }

        return { ...s, questionResults: { ...s.questionResults, [questionId]: next } }
      })

      return { correct, revealed }
    }

    function startMinicourse(minicourseId: string) {
      setState((s) => {
        const prev: MinicourseProgress = s.minicourseProgress[minicourseId] ?? {
          startedAt: null,
          stepsDone: [],
          completedAt: null,
        }
        if (prev.startedAt != null) return s
        return {
          ...s,
          minicourseProgress: {
            ...s.minicourseProgress,
            [minicourseId]: { ...prev, startedAt: Date.now() },
          },
        }
      })
    }

    function completeMinicourseStep(minicourseId: string, stepNo: number) {
      const mc = minicourses.find((m) => m.id === minicourseId)
      if (!mc) return
      setState((s) => {
        const prev: MinicourseProgress = s.minicourseProgress[minicourseId] ?? {
          startedAt: Date.now(),
          stepsDone: [],
          completedAt: null,
        }
        if (prev.stepsDone.includes(stepNo)) return s
        const stepsDone = [...prev.stepsDone, stepNo].sort((a, b) => a - b)
        const completedAt = stepsDone.length === mc.steps.length ? Date.now() : prev.completedAt
        return {
          ...s,
          minicourseProgress: {
            ...s.minicourseProgress,
            [minicourseId]: { ...prev, startedAt: prev.startedAt ?? Date.now(), stepsDone, completedAt },
          },
        }
      })
    }

    function resetProgress() {
      setState(structuredClone(EMPTY_STATE))
    }

    return { state, startJourney, answerQuestion, startMinicourse, completeMinicourseStep, resetProgress }
  }, [state])

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGame(): GameContextValue {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame deve ser usado dentro de GameProvider')
  return ctx
}

export { XP_BY_LEVEL }
