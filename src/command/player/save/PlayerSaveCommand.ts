export async function PlayerSaveCommand(): Promise<void> {
  PlayerSaveLocalCommand();
  await PlayerSaveRemoteCommand();
}
//
import { PlayerSaveLocalCommand } from './PlayerSaveLocalCommand';
import { PlayerSaveRemoteCommand } from './PlayerSaveRemoteCommand';
