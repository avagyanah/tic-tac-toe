export function PlayerSyncLocalCommand(): void {
  PlayerSyncCommand(store.get(STORAGE_PLAYER_NAME));
}
//
import store from 'store';
import { STORAGE_PLAYER_NAME } from '../../../constants/Constants';
import { PlayerSyncCommand } from './PlayerSyncCommand';
