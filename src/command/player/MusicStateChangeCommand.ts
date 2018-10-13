export function MusicStateChangeCommand(increment: number): void {
  PlayerSettingChangeCommand(
    getEnumValues(SwitcherState),
    'musicState',
    increment,
  );
}
//
import { SwitcherState } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { PlayerSettingChangeCommand } from './PlayerSettingChangeCommand';
