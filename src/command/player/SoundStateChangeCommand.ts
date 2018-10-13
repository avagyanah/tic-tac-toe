export function SoundStateChangeCommand(increment: number): void {
  PlayerSettingChangeCommand(
    getEnumValues(SwitcherState),
    'soundState',
    increment,
  );
}
//
import { SwitcherState } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { PlayerSettingChangeCommand } from './PlayerSettingChangeCommand';
