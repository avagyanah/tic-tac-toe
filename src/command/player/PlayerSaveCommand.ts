export function PlayerSaveCommand(): void {
  const data: IStoredPlayerData = playerProxy.getSavableData();
  store.set(STORAGE_PLAYER_NAME, data);
  setFirebaseDataAsync(`${FIRESTORE_PLAYERS_COLLECTION_NAME}/${data.id}`, data);
}
//
import store from 'store';
import {
  FIRESTORE_PLAYERS_COLLECTION_NAME,
  STORAGE_PLAYER_NAME,
} from '../../constants/Constants';
import { IStoredPlayerData } from '../../constants/Types';
import { setFirebaseDataAsync } from '../../utils/Utils';
import { playerProxy } from '../../vo/PlayerProxy';
