const settingsProxy: ISettingsVO = generateProxy(settingsVO);
const userProxy: IUserVO = generateProxy({ ...userVO });

const vo: any = {
  user: userProxy,
  settings: settingsProxy,
  gamesPlayed: 0,
  getSavableData: () => {
    return {
      user: vo.user,
      settings: vo.settings,
      gamesPlayed: vo.gamesPlayed,
    };
  },
  sync: (data: IStoredPlayerData) => {
    vo.user.id = data.user.id || vo.user.id;
    vo.user.name = data.user.name || vo.user.name;
    vo.user.rating = data.user.rating || vo.user.rating;
    vo.user.skill = data.user.skill || vo.user.skill;
    vo.user.name = data.user.id || vo.user.id;
    vo.settings.player = data.settings.player || vo.settings.player;
    vo.settings.gameSize = data.settings.gameSize || vo.settings.gameSize;
    vo.settings.soundState = data.settings.soundState || vo.settings.soundState;
    vo.settings.musicState = data.settings.musicState || vo.settings.musicState;
    vo.gamesPlayed = data.gamesPlayed || vo.gamesPlayed;
  },
};

const playerProxy: IPlayerProxy = generateProxy(vo);

export { playerProxy, IPlayerProxy, settingsProxy, userProxy };
//
import {
  IPlayerProxy,
  ISettingsVO,
  IStoredPlayerData,
  IUserVO,
} from '../constants/Types';
import { generateProxy } from '../utils/Utils';
import { settingsVO } from './SettingsVO';
import { userVO } from './UserVO';
