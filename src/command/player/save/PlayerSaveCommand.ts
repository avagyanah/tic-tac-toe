export function PlayerSaveCommand(): void {
  PlayerSaveLocalCommand();
  PlayerSaveRemoteCommand();
}
//
import { PlayerSaveLocalCommand } from './PlayerSaveLocalCommand';
import { PlayerSaveRemoteCommand } from './PlayerSaveRemoteCommand';
