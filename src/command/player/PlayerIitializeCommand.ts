export function PlayerInitializeCommand(): void {
  const data: IStoredPlayerData = store.get('playerData');
  if (!data) {
    store.set('playerData', playerProxy.getSavableData());
  } else {
    playerProxy.sync(store.get('playerData'));
  }
}
//
import store from 'store';
import { IStoredPlayerData } from '../../constants/Types';
import { playerProxy } from '../../vo/PlayerProxy';
