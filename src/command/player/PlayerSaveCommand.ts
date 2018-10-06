export function PlayerSaveCommand(): void {
  store.set('tic_tac_toe_playerData', playerProxy.getSavableData());
}
//
import store from 'store';
import { playerProxy } from '../../vo/PlayerProxy';
