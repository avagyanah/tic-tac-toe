export async function PlayerInitializeCommand(): Promise<void> {
  await PlayerInitializeByUUIDCommand();
  await PlayerInitializeBySyncIDSCommand();
  await PlayerSubscribeSnapshotCommand();
  UpdateFameModelCommand();
}
//
import { UpdateFameModelCommand } from '../../UpdateFameModelCommand';
import { PlayerSubscribeSnapshotCommand } from '../sync/PlayerSubscribeSnapshotCommand';
import { PlayerInitializeBySyncIDSCommand } from './PlayerInitializeBySyncIDSCommand';
import { PlayerInitializeByUUIDCommand } from './PlayerInitializeByUUIDCommand';
