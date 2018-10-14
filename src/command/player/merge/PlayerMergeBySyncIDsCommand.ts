export function PlayerMergeBySyncIDsCommand(): void {
  PlayerSyncRemoteBySyncIDsCommand().then((remoteData: IStoredPlayerData) => {
    remoteData ? PlayerSaveLocalCommand() : PlayerSaveCommand();
  });
}
//
import { IStoredPlayerData } from '../../../constants/Types';
import { PlayerSaveCommand } from '../save/PlayerSaveCommand';
import { PlayerSaveLocalCommand } from '../save/PlayerSaveLocalCommand';
import { PlayerSyncRemoteBySyncIDsCommand } from '../sync/PlayerSyncRemoteBySyncIDsCommand';
