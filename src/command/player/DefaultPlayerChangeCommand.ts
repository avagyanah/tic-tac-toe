import { PlayerType } from '../../constants/Enums';
import { playerProxy } from '../../vo/PlayerProxy';

export function DefaultPlayerChangeCommand(value: string): void {
  playerProxy.player = value === 'X' ? PlayerType.X : PlayerType.O;
}
