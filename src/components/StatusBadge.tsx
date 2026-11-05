import type { StageStatus } from '../state/types'
import { STATUS_LABELS } from '../state/progress'

export default function StatusBadge({ status }: { status: StageStatus }) {
  return <span className={`badge ${status}`}>{STATUS_LABELS[status]}</span>
}
