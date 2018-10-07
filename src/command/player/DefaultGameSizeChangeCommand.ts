export function DefaultGameSizeChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(GAME_SIZES, 'gameSize', increment);
}
//
import { GAME_SIZES } from '../../constants/Collections';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
