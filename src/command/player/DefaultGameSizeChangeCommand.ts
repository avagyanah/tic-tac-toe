export function DefaultGameSizeChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(GAME_SIZES, playerProxy, 'gameSize', increment);
}
//
import { GAME_SIZES } from '../../constants/Collections';
import { playerProxy } from '../../vo/PlayerProxy';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
