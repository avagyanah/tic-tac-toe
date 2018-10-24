export async function PlayerMergeByUUIDCommand(): Promise<void> {
  await PlayerSyncRemoteByUUIDCommand();
  PlayerSaveLocalCommand();
}
//
import { PlayerSaveLocalCommand } from '../save/PlayerSaveLocalCommand';
import { PlayerSyncRemoteByUUIDCommand } from '../sync/PlayerSyncRemoteByUUIDCommand';
