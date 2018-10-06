const vo: any = {
  player: PlayerType.X,
  gameSize: 3,
  soundState: SwitcherState.ON,
  musicState: SwitcherState.OFF,
  getSavableData: () => {
    return {
      player: vo.player,
      gameSize: vo.gameSize,
      soundState: vo.soundState,
      musicState: vo.musicState,
    };
  },
  sync: (data: IStoredPlayerData) => {
    vo.player = data.player;
    vo.gameSize = data.gameSize;
    vo.soundState = data.soundState;
    vo.musicState = data.musicState;
  },
};
const playerProxy: IPlayerProxy = generateProxy(vo);

export { playerProxy, IPlayerProxy };
//
import { PlayerType, SwitcherState } from '../constants/Collections';
import { IPlayerProxy, IStoredPlayerData } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
