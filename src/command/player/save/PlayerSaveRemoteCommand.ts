export function PlayerSaveRemoteCommand(): Promise<IStoredPlayerData> {
  const data: IStoredPlayerData = playerProxy.getSavableData();
  return setFirebaseDataAsync(
    `${FIRESTORE_PLAYERS_COLLECTION_NAME}/${data.user.id}`,
    data,
  );
}
//
import { FIRESTORE_PLAYERS_COLLECTION_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { setFirebaseDataAsync } from '../../../utils/Utils';
import { playerProxy } from '../../../vo/PlayerProxy';
