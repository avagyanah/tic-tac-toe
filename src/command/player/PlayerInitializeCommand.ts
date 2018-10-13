export async function PlayerInitializeCommand(): Promise<void> {
  const data: IStoredPlayerData = store.get(STORAGE_PLAYER_NAME);
  await PlayerInitializeConnectionsCommand();
  if (!data) {
    if (playerProxy.syncIDs.length) {
      syncRemoteBySyncIDs();
    } else {
      PlayerSaveCommand();
    }
  } else {
    if (playerProxy.syncIDs.length) {
      syncRemoteBySyncIDs();
    } else {
      PlayerSyncLocalCommand();
      syncRemoteByUUID();
    }
  }
}

function syncRemoteBySyncIDs(): void {
  PlayerSyncRemoteBySyncIDsCommand().then((remoteData: IStoredPlayerData) => {
    remoteData ? PlayerSaveLocalCommand() : PlayerSaveCommand();
  });
}
function syncRemoteByUUID(): void {
  PlayerSyncRemoteByUUIDCommand().then(() => {
    PlayerSaveLocalCommand();
  });
}
//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../constants/Constants';
import { IStoredPlayerData } from '../../constants/Types';
import { playerProxy } from '../../vo/PlayerProxy';
import { PlayerInitializeConnectionsCommand } from './PlayerInitializeConnectionsCommand';
import { PlayerSaveCommand } from './save/PlayerSaveCommand';
import { PlayerSaveLocalCommand } from './save/PlayerSaveLocalCommand';
import { PlayerSyncLocalCommand } from './sync/PlayerSyncLocalCommand';
import { PlayerSyncRemoteBySyncIDsCommand } from './sync/PlayerSyncRemoteBySyncIDsCommand';
import { PlayerSyncRemoteByUUIDCommand } from './sync/PlayerSyncRemoteByUUIDCommand';
