export function DefaultPlayerChangeCommand(increment: number): void {
  PlayerSettingChangeCommand(getEnumValues(PlayerType), 'player', increment);
}
//
import { PlayerType } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { PlayerSettingChangeCommand } from './PlayerSettingChangeCommand';
