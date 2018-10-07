export function PlayerInitializeCommand(): void {
  const data: IStoredPlayerData = store.get(`${STORAGE_PLAYER_NAME}`);
  if (!data) {
    PlayerSaveCommand();
  } else {
    PlayerSyncCommand();
  }
}
//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../constants/Constants';
import { IStoredPlayerData } from '../../constants/Types';
import { PlayerSaveCommand } from './PlayerSaveCommand';
import { PlayerSyncCommand } from './PlayerSyncCommand';
