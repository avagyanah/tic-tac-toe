const settingsBtn: IButtonConfig = {
  upFrame: Images.SettingsIcon.Name,
  clickSound: {
    alias: Audios.Sounds.ClickSound.Name,
    options: {
      volume: 0.5,
    },
  },
};
const fameBtn: IButtonConfig = {
  upFrame: Images.FameIcon.Name,
  clickSound: {
    alias: Audios.Sounds.ClickSound.Name,
    options: {
      volume: 0.5,
    },
  },
};
const playBtn: IButtonConfig = {
  upFrame: Images.TransparentPixel.Name,
  anchor: new PIXI.Point(0.5, 0.5),
  clickSound: {
    alias: Audios.Sounds.ClickSound.Name,
    options: {
      volume: 0.5,
    },
  },
  content: new PIXI.Text('Play', {
    fontFamily: 'Octavio',
    fontSize: 150,
  }),
  alpha: 0,
};
const settingsPreviousBtn: IButtonConfig = {
  upFrame: Images.Arrow.Name,
  clickSound: {
    alias: Audios.Sounds.ClickSound.Name,
    options: {
      volume: 0.5,
    },
  },
};

interface IButtonConfig {
  content?: PIXI.Text | PIXI.Sprite;
  upFrame?: string;
  downFrame?: string;
  anchor?: PIXI.Point;
  alpha?: number;
  clickSound?: IClickSound;
  offsetX?: number;
  offsetY?: number;
}

interface IClickSound {
  alias: string;
  options: PIXI.sound.PlayOptions;
}

export {
  settingsBtn,
  fameBtn,
  playBtn,
  settingsPreviousBtn,
  IButtonConfig,
  IClickSound,
};
//
import { Audios, Images } from '../../../assets';
