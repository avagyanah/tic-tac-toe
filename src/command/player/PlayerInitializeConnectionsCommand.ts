export async function PlayerInitializeConnectionsCommand(): Promise<void> {
  playerProxy.syncIDs = ['111'];
}
//
import { playerProxy } from '../../vo/PlayerProxy';
