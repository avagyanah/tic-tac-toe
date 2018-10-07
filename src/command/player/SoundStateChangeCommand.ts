export function SoundStateChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(
    getEnumValues(SwitcherState),
    'soundState',
    increment,
  );
}
//
import { SwitcherState } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
