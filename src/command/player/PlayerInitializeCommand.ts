export async function PlayerInitializeCommand(): Promise<void> {
  const data: IStoredPlayerData = store.get(STORAGE_PLAYER_NAME);
  if (!data) {
    await PlayerSaveCommand();
  } else {
    PlayerSyncLocalCommand();
    await PlayerSyncRemoteByUUIDCommand();
    PlayerSaveLocalCommand();
  }
}

//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../constants/Constants';
import { IStoredPlayerData } from '../../constants/Types';
import { PlayerSaveCommand } from './save/PlayerSaveCommand';
import { PlayerSaveLocalCommand } from './save/PlayerSaveLocalCommand';
import { PlayerSyncLocalCommand } from './sync/PlayerSyncLocalCommand';
import { PlayerSyncRemoteByUUIDCommand } from './sync/PlayerSyncRemoteByUUIDCommand';
