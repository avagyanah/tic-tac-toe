export function PlayerSaveCommand(): void {
  const data: IStoredPlayerData = playerProxy.getSavableData();
  store.set(STORAGE_PLAYER_NAME, data);
  // setFirebaseDataAsync(
  //   `${FIRESTORE_PLAYERS_COLLECTION_NAME}/${data.user.id}`,
  //   data,
  // );
}
//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../constants/Constants';
import { IStoredPlayerData } from '../../constants/Types';
import { playerProxy } from '../../vo/PlayerProxy';
