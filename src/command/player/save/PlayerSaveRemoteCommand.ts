export function PlayerSaveRemoteCommand(): void {
  const data: IStoredPlayerData = playerProxy.getSavableData();

  setFirebaseDataAsync(
    `${FIRESTORE_PLAYERS_COLLECTION_NAME}/${data.user.id}`,
    serialize(data),
  );
}
//
import { FIRESTORE_PLAYERS_COLLECTION_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { serialize, setFirebaseDataAsync } from '../../../utils/Utils';
import { playerProxy } from '../../../vo/PlayerProxy';
