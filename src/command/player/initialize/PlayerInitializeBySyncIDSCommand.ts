export async function PlayerInitializeBySyncIDSCommand(): Promise<void> {
  await PlayerInitializeConnectionsCommand();
  //
  if (playerProxy.syncIDs.length) {
    PlayerMergeBySyncIDsCommand();
  }
}

//
import { playerProxy } from '../../../vo/PlayerProxy';
import { PlayerMergeBySyncIDsCommand } from '../merge/PlayerMergeBySyncIDsCommand';
import { PlayerInitializeConnectionsCommand } from './PlayerInitializeConnectionsCommand';
