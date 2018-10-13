export function PlayerSyncCommand(): void {
  PlayerSyncLocalCommand();
  PlayerSaveRemoteCommand();
}
//
import { PlayerSaveRemoteCommand } from '../save/PlayerSaveRemoteCommand';
import { PlayerSyncLocalCommand } from './PlayerSyncLocalCommand';
