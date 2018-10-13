export function PlayerSaveCommand(): void {
  const data: IStoredPlayerData = playerProxy.getSavableData();
  setLocalStorageData(STORAGE_PLAYER_NAME, data);
  setFirebaseDataAsync(
    `${FIRESTORE_PLAYERS_COLLECTION_NAME}/${data.user.id}`,
    serialize(data),
  );
}
//
import {
  FIRESTORE_PLAYERS_COLLECTION_NAME,
  STORAGE_PLAYER_NAME,
} from '../../constants/Constants';
import { IStoredPlayerData } from '../../constants/Types';
import {
  serialize,
  setFirebaseDataAsync,
  setLocalStorageData,
} from '../../utils/Utils';
import { playerProxy } from '../../vo/PlayerProxy';
