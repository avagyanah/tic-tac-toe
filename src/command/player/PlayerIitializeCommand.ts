export function PlayerInitializeCommand(): void {
  const data: IStoredPlayerData = store.get('tic_tac_toe_playerData');
  if (!data) {
    PlayerSaveCommand();
  } else {
    PlayerSyncCommand();
  }
}
//
import store from 'store';
import { IStoredPlayerData } from '../../constants/Types';
import { PlayerSaveCommand } from './PlayerSaveCommand';
import { PlayerSyncCommand } from './PlayerSyncCommand';
