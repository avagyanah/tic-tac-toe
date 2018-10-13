export function DefaultGameSizeChangeCommand(increment: number): void {
  PlayerSettingChangeCommand(GAME_SIZES, 'gameSize', increment);
}
//
import { GAME_SIZES } from '../../constants/Collections';
import { PlayerSettingChangeCommand } from './PlayerSettingChangeCommand';
