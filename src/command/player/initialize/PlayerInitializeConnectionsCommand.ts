export async function PlayerInitializeConnectionsCommand(): Promise<void> {
  playerProxy.syncIDs = [];
}
//
import { playerProxy } from '../../../vo/PlayerProxy';
