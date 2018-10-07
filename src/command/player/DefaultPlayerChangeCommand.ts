export function DefaultPlayerChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(getEnumValues(PlayerType), 'player', increment);
}
//
import { PlayerType } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
