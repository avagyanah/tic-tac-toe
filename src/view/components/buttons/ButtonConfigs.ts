const settingsBtn: IButtonConfig = {
  upFrame: 'settings-icon.png',
  clickSound: {
    alias: Audios.Sounds.ClickSound.Name,
    options: {
      volume: 0.5,
    },
  },
};
const fameBtn: IButtonConfig = {
  upFrame: 'fame-icon.png',
  clickSound: {
    alias: Audios.Sounds.ClickSound.Name,
    options: {
      volume: 0.5,
    },
  },
};
const profileBtn: IButtonConfig = {
  upFrame: Images.ProfileIcon.Name,
  clickSound: {
    alias: Audios.Sounds.ClickSound.Name,
    options: {
      volume: 0.5,
    },
  },
};
const playBtn: IButtonConfig = {
  upFrame: 'transparent-pixel.png',
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
  upFrame: 'arrow.png',
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
  profileBtn,
  playBtn,
  settingsPreviousBtn,
  IButtonConfig,
  IClickSound,
};
//
import { Audios, Images } from '../../../assets';
