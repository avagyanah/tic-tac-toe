const vo: any = {
  ...userVO,
  gamesPlayed: 0,
  player: PlayerType.X,
  gameSize: 3,
  soundState: SwitcherState.ON,
  musicState: SwitcherState.OFF,
  getSavableData: () => {
    return {
      name: vo.name,
      id: vo.id,
      skill: vo.skill,
      gamesPlayed: vo.gamesPlayed,
      rating: vo.rating,
      player: vo.player,
      gameSize: vo.gameSize,
      soundState: vo.soundState,
      musicState: vo.musicState,
    };
  },
  sync: (data: IStoredPlayerData) => {
    vo.name = data.name || vo.id;
    vo.id = data.id || vo.id;
    vo.skill = data.skill || vo.skill;
    vo.gamesPlayed = data.gamesPlayed || vo.gamesPlayed;
    vo.rating = data.rating || vo.rating;
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
