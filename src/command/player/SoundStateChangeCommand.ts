export function SoundStateChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(
    getEnumValues(SwitcherState),
    playerProxy,
    'soundState',
    increment,
  );
}
//
import { SwitcherState } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { playerProxy } from '../../vo/PlayerProxy';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
