export async function PlayerInitializeByUUIDCommand(): Promise<void> {
  const data: IStoredPlayerData = store.get(STORAGE_PLAYER_NAME);
  if (!data) {
    await PlayerSaveCommand();
  } else {
    PlayerSyncLocalCommand();
    await PlayerMergeByUUIDCommand();
  }
}

//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { PlayerMergeByUUIDCommand } from '../merge/PlayerMergeByUUIDCommand';
import { PlayerSaveCommand } from '../save/PlayerSaveCommand';
import { PlayerSyncLocalCommand } from '../sync/PlayerSyncLocalCommand';
