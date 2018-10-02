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
  bg: { frame: Images.PopupBg.Name, offsetX: CENTER.x, offsetY: CENTER.y },
  closeButton: { frame: Images.Close.Name },
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
  bg: { frame: Images.PopupBg.Name, offsetX: CENTER.x, offsetY: CENTER.y },
  closeButton: { frame: Images.Close.Name },
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
  bg: { frame: Images.PopupBg.Name, offsetX: CENTER.x, offsetY: CENTER.y },
  closeButton: { frame: Images.Close.Name },
};
//
export { famePopup, settingsPopup, profilePopup };

export interface IPopupConfig {
  title?: ITitleConfig;
  blocker?: IBlockerConfig;
  bg?: IBgConfig;
  closeButton?: ICloseButtonConfig;
}
export interface ITitleConfig {
  text?: string;
  style?: PIXI.TextStyleOptions;
  offsetX?: number;
  offsetY?: number;
}
export interface IBlockerConfig {
  color?: number;
  alpha?: number;
}
export interface IBgConfig {
  frame: string;
  offsetX?: number;
  offsetY?: number;
  width?: number;
  height?: number;
}
export interface ICloseButtonConfig {
  frame: string;
  offsetX?: number;
  offsetY?: number;
}
//
import { Images } from '../../../assets';
import { CENTER } from '../../../constants/Constants';
