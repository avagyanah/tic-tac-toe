export async function PlayerSyncRemoteByUUIDCommand(): Promise<void> {
  const data: IStoredPlayerData = await getFirebaseDataAsync(
    `${FIRESTORE_PLAYERS_COLLECTION_NAME}/${playerProxy.user.id}`,
  );
  PlayerSyncCommand(data);
}
//
// tslint:disable-next-line
import { FIRESTORE_PLAYERS_COLLECTION_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { getFirebaseDataAsync } from '../../../utils/Utils';
import { playerProxy } from '../../../vo/PlayerProxy';
import { PlayerSyncCommand } from './PlayerSyncCommand';
