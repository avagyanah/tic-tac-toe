const vo: any = {
  ...userVO,
  gamesPlayed: 0,
  player: PlayerType.X,
  gameSize: 3,
  soundState: SwitcherState.ON,
  musicState: SwitcherState.OFF,
  getSavableData: () => {
    return {
      id: vo.id,
      name: vo.name,
      rating: vo.rating,
      skill: vo.skill,
      timescale: vo.timescale,
      gamesPlayed: vo.gamesPlayed,
      player: vo.player,
      gameSize: vo.gameSize,
      soundState: vo.soundState,
      musicState: vo.musicState,
    };
  },
  sync: (data: IStoredPlayerData) => {
    vo.id = data.id || vo.id;
    vo.name = data.name || vo.id;
    vo.rating = data.rating || vo.rating;
    vo.skill = data.skill || vo.skill;
    vo.timescale = data.timescale || vo.timescale;
    vo.gamesPlayed = data.gamesPlayed || vo.gamesPlayed;
    vo.player = data.player || vo.player;
    vo.gameSize = data.gameSize || vo.gameSize;
    vo.soundState = data.soundState || vo.soundState;
    vo.musicState = data.musicState || vo.musicState;
  },
};
const playerProxy: IPlayerProxy = generateProxy(vo);

export { playerProxy, IPlayerProxy };
//
import { PlayerType, SwitcherState } from '../constants/Collections';
import { IPlayerProxy, IStoredPlayerData } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
import { userVO } from './UserVO';
