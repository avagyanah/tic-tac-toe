const vo: any = {
  name: 'Guest',
  skill: SkillType.Beginner,
  gamesPlayed: 0,
  rating: 200,
  player: PlayerType.X,
  gameSize: 3,
  soundState: SwitcherState.ON,
  musicState: SwitcherState.OFF,
  getSavableData: () => {
    return {
      name: vo.name,
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
    vo.name = data.name;
    vo.skill = data.skill;
    vo.gamesPlayed = data.gamesPlayed;
    vo.rating = data.rating;
    vo.player = data.player;
    vo.gameSize = data.gameSize;
    vo.soundState = data.soundState;
    vo.musicState = data.musicState;
  },
};
const playerProxy: IPlayerProxy = generateProxy(vo);

export { playerProxy, IPlayerProxy };
//
import { PlayerType, SkillType, SwitcherState } from '../constants/Collections';
import { IPlayerProxy, IStoredPlayerData } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
