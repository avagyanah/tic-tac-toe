export const SETTINGS_POPUP_PLAYER_OPTION: string = 'SettingsPopupPlayerOption';
export const SETTINGS_POPUP_SIZE_OPTION: string = 'SettingsPopupSizeOption';
export const SETTINGS_POPUP_SOUND_OPTION: string = 'SettingsPopupSoundOption';
export const SETTINGS_POPUP_MUSIC_OPTION: string = 'SettingsPopupMusicOption';

export default class SettingsPopup extends BasePopup {
  private playerOption: PlayerOption;
  private sizeOption: SizeOption;
  private soundOption: SoundOption;
  private musicOption: MusicOption;

  constructor() {
    super(settingsPopup);
    settingsProxy.registerObserver(this);
    //
    this.createOptions();
  }

  public destroy(options?: boolean | PIXI.DestroyOptions): void {
    settingsProxy.removeObserver(this);
    //
    super.destroy(options);
  }

  protected updateView(key: string, value: any): void {
    switch (key) {
      case 'player':
        this.playerOption.setActiveValue(getEnumKey(PlayerType, value), true);
        break;
      case 'gameSize':
        this.sizeOption.setActiveValue(value, true);
        break;
      case 'soundState':
        this.soundOption.setActiveValue(
          getEnumKey(SwitcherState, value).toLowerCase(),
          true,
        );
        break;
      case 'musicState':
        this.musicOption.setActiveValue(
          getEnumKey(SwitcherState, value).toLowerCase(),
          true,
        );
        break;
      default:
        break;
    }
  }

  private createOptions(): void {
    const deviance: { x: number; y: number } = {
      x: 30,
      y: 45,
    };
    const centerY: number = this.bg.y + this.title.height / 2;

    this.playerOption = new PlayerOption();
    this.playerOption.position.set(
      CENTER.x - deviance.x,
      centerY - 3 * deviance.y,
    );
    //
    this.sizeOption = new SizeOption();
    this.sizeOption.position.set(
      CENTER.x - deviance.x,
      centerY - 1 * deviance.y,
    );
    //
    this.soundOption = new SoundOption();
    this.soundOption.position.set(
      CENTER.x - deviance.x,
      centerY + 1 * deviance.y,
    );
    //
    this.musicOption = new MusicOption();
    this.musicOption.position.set(
      CENTER.x - deviance.x,
      centerY + 3 * deviance.y,
    );
    //
    this.addChild(
      this.playerOption,
      this.sizeOption,
      this.soundOption,
      this.musicOption,
    );
  }
}
//
import {
  GAME_SIZES,
  PlayerType,
  SwitcherState,
} from '../../../../constants/Collections';
import { CENTER } from '../../../../constants/Constants';
import {
  arrayToLowercase,
  arrayToUppercase,
  getEnumKey,
  getEnumKeys,
} from '../../../../utils/Utils';
import { playerProxy, settingsProxy } from '../../../../vo/PlayerProxy';
import BasePopup from '../BasePopup';
import { settingsPopup } from '../PopupConfigs';
import { BaseOption } from './BaseOption';

//
class PlayerOption extends BaseOption {
  constructor() {
    super(
      'player',
      arrayToUppercase(getEnumKeys(PlayerType)),
      getEnumKey(PlayerType, playerProxy.settings.player),
      SETTINGS_POPUP_PLAYER_OPTION,
    );
  }
}

//
class SizeOption extends BaseOption {
  constructor() {
    super(
      'size',
      GAME_SIZES,
      playerProxy.settings.gameSize,
      SETTINGS_POPUP_SIZE_OPTION,
    );
  }
}

//
class SoundOption extends BaseOption {
  constructor() {
    super(
      'sound',
      arrayToLowercase(getEnumKeys(SwitcherState)),
      getEnumKey(SwitcherState, playerProxy.settings.soundState).toLowerCase(),
      SETTINGS_POPUP_SOUND_OPTION,
    );
  }
}

//
class MusicOption extends BaseOption {
  constructor() {
    super(
      'music',
      arrayToLowercase(getEnumKeys(SwitcherState)),
      getEnumKey(SwitcherState, playerProxy.settings.musicState).toLowerCase(),
      SETTINGS_POPUP_MUSIC_OPTION,
    );
  }
}
