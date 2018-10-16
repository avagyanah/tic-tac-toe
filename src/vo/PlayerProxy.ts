// @ts-ignore
const vo: IPlayerProxy = {
  user: generateProxy({ ...userVO }),
  settings: generateProxy(settingsVO),
  gamesPlayed: 0,
  syncIDs: [],
  timescale: moment.utc().valueOf(),
  getSavableData: () => {
    return {
      user: vo.user,
      settings: vo.settings,
      gamesPlayed: vo.gamesPlayed,
      syncIDs: vo.syncIDs,
      timescale: vo.timescale,
    };
  },
  sync: (data: IStoredPlayerData) => {
    vo.user.id = data.user.id || vo.user.id;
    vo.user.name = data.user.name || vo.user.name;
    vo.user.rating = data.user.rating || vo.user.rating;
    vo.user.skill = data.user.skill || vo.user.skill;

    vo.settings.player = data.settings.player || vo.settings.player;
    vo.settings.gameSize = data.settings.gameSize || vo.settings.gameSize;
    vo.settings.soundState = data.settings.soundState || vo.settings.soundState;
    vo.settings.musicState = data.settings.musicState || vo.settings.musicState;

    vo.gamesPlayed = data.gamesPlayed || vo.gamesPlayed;
    vo.syncIDs = data.syncIDs || vo.syncIDs;
    vo.timescale = data.timescale || vo.timescale;
  },
};

const playerProxy: IPlayerProxy = generateProxy(vo);

export { playerProxy, IPlayerProxy };
//
import moment from 'moment';
import {
  IPlayerProxy,
  ISettingsVO,
  IStoredPlayerData,
  IUserVO,
} from '../constants/Types';
import { generateProxy } from '../utils/Utils';
import { settingsVO } from './SettingsVO';
import { userVO } from './UserVO';
