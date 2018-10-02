export const SETTINGS_POPUP_PLAYER_OPTION: string = 'SettingsPopupPlayerOption';
export const SETTINGS_POPUP_SIZE_OPTION: string = 'SettingsPopupSizeOption';
export const SETTINGS_POPUP_SOUND_OPTION: string = 'SettingsPopupSoundOption';
export const SETTINGS_POPUP_MUSIC_OPTION: string = 'SettingsPopupMusicOption';

export default class SettingsPopup extends BasePopup {
  constructor() {
    super(settingsPopup);

    //
    this.createOptions();
  }

  private createOptions(): void {
    const deviance: number = 45;
    const centerY: number = this.bg.y + this.title.height / 2;

    const playerOption: PlayerOption = new PlayerOption(playerProxy.player);
    playerOption.position.set(CENTER.x - 30, centerY - 3 * deviance);
    //
    const sizeOption: SizeOption = new SizeOption(playerProxy.gameSize);
    sizeOption.position.set(CENTER.x - 30, centerY - 1 * deviance);
    //
    const soundOption: SoundOption = new SoundOption(playerProxy.soundState);
    soundOption.position.set(CENTER.x - 30, centerY + 1 * deviance);
    //
    const musicOption: MusicOption = new MusicOption(playerProxy.musicState);
    musicOption.position.set(CENTER.x - 30, centerY + 3 * deviance);
    //
    this.addChild(playerOption, sizeOption, soundOption, musicOption);
  }
}
//
import { CENTER } from '../../../../constants/Constants';
import { PlayerType } from '../../../../constants/Enums';
import { playerProxy } from '../../../../vo/PlayerProxy';
import BasePopup from '../BasePopup';
import { settingsPopup } from '../PopupConfigs';
import { BaseOption } from './BaseOption';

//
class PlayerOption extends BaseOption {
  constructor(active: number) {
    super('player', ['X', 'O'], active === PlayerType.X ? 'X' : 'O');
    //
    playerProxy.registerObserver(this);
  }

  public destroy(options?: boolean | PIXI.DestroyOptions): void {
    playerProxy.removeObserver(this);
    //
    super.destroy(options);
  }
  // protected next(): PIXI.Text {
  //   const next: PIXI.Text = super.next();
  //   next && Register.emit(SETTINGS_POPUP_PLAYER_OPTION, next.text);
  //   return next;
  // }

  // protected previous(): PIXI.Text {
  // const previous: PIXI.Text = super.previous();
  // previous && Register.emit(SETTINGS_POPUP_PLAYER_OPTION, previous.text);
  // return previous;
  // }

  private updateView(key: string, value: any): void {
    // organize settings popup update based on playerProxy, not based on self logic
  }
}

//
class SizeOption extends BaseOption {
  constructor(active: number) {
    super('size', ['3', '4'], active.toString());
  }
}

//
class SoundOption extends BaseOption {
  constructor(active: string) {
    super('sound', ['on', 'off'], active);
  }
}

//
class MusicOption extends BaseOption {
  constructor(active: string) {
    super('music', ['on', 'off'], active);
  }
}
