import type { GameKey } from '../../shared/types/app'

/** リプレイファイル名の作品別の名前規則 */
export const REPLAY_FILE_NAME_PATTERNS: Record<GameKey, RegExp> = {
  th6: /^th6_.*\.rpy$/,
  th7: /^th7_.*\.rpy$/,
  th8: /^th8_.*\.rpy$/,
  th10: /^th10_.*\.rpy$/,
  th11: /^th11_.*\.rpy$/,
  th12: /^th12_.*\.rpy$/,
  th128: /^th128_.*\.rpy$/,
  th13: /^th13_.*\.rpy$/,
  th14: /^th14_.*\.rpy$/,
  th15: /^th15_.*\.rpy$/,
  th16: /^th16_.*\.rpy$/,
  th17: /^th17_.*\.rpy$/,
  th18: /^th18_.*\.rpy$/,
}
