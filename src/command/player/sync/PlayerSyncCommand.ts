export function PlayerSyncCommand(data: IStoredPlayerData): void {
  playerProxy.sync(data);
}
//
import { IStoredPlayerData } from '../../../constants/Types';
import { playerProxy } from '../../../vo/PlayerProxy';
