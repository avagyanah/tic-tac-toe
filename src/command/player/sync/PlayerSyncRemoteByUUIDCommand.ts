export function PlayerSyncRemoteByUUIDCommand(): Promise<void> {
  return getFirebaseDataAsync(
    `${FIRESTORE_PLAYERS_COLLECTION_NAME}/${playerProxy.user.id}`,
  ).then((data: IStoredPlayerData) => {
    PlayerSyncCommand(data);
  });
}
//
// tslint:disable-next-line
import { FIRESTORE_PLAYERS_COLLECTION_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { getFirebaseDataAsync } from '../../../utils/Utils';
import { playerProxy } from '../../../vo/PlayerProxy';
import { PlayerSyncCommand } from './PlayerSyncCommand';
