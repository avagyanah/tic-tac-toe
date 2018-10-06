export function DefaultPlayerChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(
    getEnumValues(PlayerType),
    playerProxy,
    'player',
    increment,
  );
}
//
import { PlayerType } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { playerProxy } from '../../vo/PlayerProxy';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
