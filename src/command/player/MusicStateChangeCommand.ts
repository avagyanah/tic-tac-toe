export function MusicStateChangeCommand(increment: number): void {
  PlayerOptionChangeCommand(
    getEnumValues(SwitcherState),
    playerProxy,
    'musicState',
    increment,
  );
}
//
import { SwitcherState } from '../../constants/Collections';
import { getEnumValues } from '../../utils/Utils';
import { playerProxy } from '../../vo/PlayerProxy';
import { PlayerOptionChangeCommand } from './PlayerOptionChangeCommand';
