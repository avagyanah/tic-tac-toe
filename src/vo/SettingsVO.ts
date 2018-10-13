import { PlayerType, SwitcherState } from '../constants/Collections';
import { ISettingsVO } from '../constants/Types';

// @ts-ignore
const settingsVO: ISettingsVO = {
  player: PlayerType.X,
  gameSize: 3,
  soundState: SwitcherState.ON,
  musicState: SwitcherState.OFF,
};

export { settingsVO };
