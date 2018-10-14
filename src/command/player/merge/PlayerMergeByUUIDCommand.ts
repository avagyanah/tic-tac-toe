export function PlayerMergeByUUIDCommand(): Promise<void> {
  return PlayerSyncRemoteByUUIDCommand().then(() => {
    PlayerSaveLocalCommand();
  });
}
//
import { PlayerSaveLocalCommand } from '../save/PlayerSaveLocalCommand';
import { PlayerSyncRemoteByUUIDCommand } from '../sync/PlayerSyncRemoteByUUIDCommand';
