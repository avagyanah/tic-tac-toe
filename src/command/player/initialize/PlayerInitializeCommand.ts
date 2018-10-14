export async function PlayerInitializeCommand(): Promise<void> {
  await PlayerInitializeByUUIDCommand();
  await PlayerInitializeBySyncIDSCommand();
}
//
import { PlayerInitializeBySyncIDSCommand } from './PlayerInitializeBySyncIDSCommand';
import { PlayerInitializeByUUIDCommand } from './PlayerInitializeByUUIDCommand';
