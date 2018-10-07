export function MusicStateChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(
    getEnumValues(SwitcherState),
    'musicState',
    increment,
  );
}
//
import { SwitcherState } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
