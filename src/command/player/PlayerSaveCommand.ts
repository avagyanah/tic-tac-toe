export function PlayerSaveCommand(): void {
  store.set(`${STORAGE_PLAYER_NAME}`, playerProxy.getSavableData());
}
//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../constants/Constants';
import { playerProxy } from '../../vo/PlayerProxy';
