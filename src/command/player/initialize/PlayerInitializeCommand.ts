export async function PlayerInitializeCommand(): Promise<void> {
  await PlayerInitializeByUUIDCommand();
  await PlayerInitializeBySyncIDSCommand();
  await PlayerSubscribeSnapshotCommand();
}
//
import { PlayerSubscribeSnapshotCommand } from '../sync/PlayerSubscribeSnapshotCommand';
import { PlayerInitializeBySyncIDSCommand } from './PlayerInitializeBySyncIDSCommand';
import { PlayerInitializeByUUIDCommand } from './PlayerInitializeByUUIDCommand';
