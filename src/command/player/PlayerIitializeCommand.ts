export function PlayerInitializeCommand(): void {
  const data: IStoredPlayerData = store.get('tic_tac_toe_playerData');
  if (!data) {
    store.set('tic_tac_toe_playerData', playerProxy.getSavableData());
  } else {
    playerProxy.sync(store.get('tic_tac_toe_playerData'));
  }
}
//
import store from 'store';
import { IStoredPlayerData } from '../../constants/Types';
import { playerProxy } from '../../vo/PlayerProxy';
