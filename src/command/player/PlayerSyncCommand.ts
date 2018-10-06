export function PlayerSyncCommand(): void {
  playerProxy.sync(store.get('tic_tac_toe_playerData'));
}
//
import store from 'store';
import { playerProxy } from '../../vo/PlayerProxy';
