export function PlayerSaveLocalCommand(): void {
  const data: IStoredPlayerData = playerProxy.getSavableData();

  setLocalStorageData(STORAGE_PLAYER_NAME, data);
}
//
import { STORAGE_PLAYER_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { setLocalStorageData } from '../../../utils/Utils';
import { playerProxy } from '../../../vo/PlayerProxy';
