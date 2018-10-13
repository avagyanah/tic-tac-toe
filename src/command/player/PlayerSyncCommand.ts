export function PlayerSyncCommand(): void {
  playerProxy.sync(store.get(STORAGE_PLAYER_NAME));
}
//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../constants/Constants';
import { playerProxy } from '../../vo/PlayerProxy';
