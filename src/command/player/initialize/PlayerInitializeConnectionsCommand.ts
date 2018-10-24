export async function PlayerInitializeConnectionsCommand(): Promise<void> {
  // await Facebook.initializeAsync();
  // console.warn('resolve');
  // console.warn(Facebook.getID());

  playerProxy.syncIDs = [];
}
//
import { playerProxy } from '../../../vo/PlayerProxy';
