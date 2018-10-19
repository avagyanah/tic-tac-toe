const $blockerColor: number = 0x626262;

const famePopup: IPopupConfig = {
  title: {
    offsetY: 35,
    text: 'Hall of Fame',
    style: {
      fill: 0xa5927d,
      fontFamily: 'Octavio',
      fontSize: 80,
    },
  },
  blocker: { color: $blockerColor, alpha: 0.8 },
  bg: { frame: 'popup-bg.png', offsetX: CENTER.x, offsetY: CENTER.y },
  closeButton: { frame: 'close.png' },
};
//
const settingsPopup: IPopupConfig = {
  title: {
    offsetY: 35,
    text: 'Settings',
    style: {
      fill: 0xa5927d,
      fontFamily: 'Octavio',
      fontSize: 80,
    },
  },
  blocker: { color: $blockerColor, alpha: 0.8 },
  bg: { frame: 'popup-bg.png', offsetX: CENTER.x, offsetY: CENTER.y },
  closeButton: { frame: 'close.png' },
};
//
const profilePopup: IPopupConfig = {
  title: {
    offsetY: 35,
    text: 'Profile',
    style: {
      fill: 0xa5927d,
      fontFamily: 'Octavio',
      fontSize: 80,
    },
  },
  blocker: { color: $blockerColor, alpha: 0.8 },
  bg: { frame: 'popup-bg.png', offsetX: CENTER.x, offsetY: CENTER.y },
  closeButton: { frame: 'close.png' },
};
//
const gameResolvedPopup: IPopupConfig = {
  title: {
    offsetY: 100,
    text: ' ',
    style: {
      fill: 0xa5927d,
      fontFamily: 'Octavio',
      fontSize: 80,
    },
  },
  blocker: { color: $blockerColor, alpha: 0.8 },
  bg: { frame: 'popup-bg.png', offsetX: CENTER.x, offsetY: CENTER.y },
  closeButton: { frame: 'close.png' },
};
//

interface IPopupConfig {
  title?: ITitleConfig;
  blocker?: IBlockerConfig;
  bg?: IBgConfig;
  closeButton?: ICloseButtonConfig;
}
interface ITitleConfig {
  text?: string;
  style?: PIXI.TextStyleOptions;
  offsetX?: number;
  offsetY?: number;
}
interface IBlockerConfig {
  color?: number;
  alpha?: number;
}
interface IBgConfig {
  frame: string;
  offsetX?: number;
  offsetY?: number;
  width?: number;
  height?: number;
}
interface ICloseButtonConfig {
  frame: string;
  offsetX?: number;
  offsetY?: number;
}

export {
  famePopup,
  settingsPopup,
  profilePopup,
  gameResolvedPopup,
  IPopupConfig,
  ITitleConfig,
  IBlockerConfig,
  IBgConfig,
  ICloseButtonConfig,
};
//
import { CENTER } from '../../../constants/Constants';
