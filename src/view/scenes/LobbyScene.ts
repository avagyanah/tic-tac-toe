export const LOBBY_SCENE_START: string = 'LobbySceneStart';
export const LOBBY_SCENE_WAKE: string = 'LobbySceneWake';
export const LOBBY_SCENE_SLEEP: string = 'LobbySceneSleep';
export const LOBBY_SCENE_PLAY_CLICK: string = 'LobbyScenePlayClick';
//
export class LobbyScene extends BaseScene {
  private playBtn: Button;

  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    this.createPlayText();
    //
    super.create();
  }

  public async sleep(): Promise<void> {
    await this.hide();
    super.sleep();
  }

  public async wake(): Promise<void> {
    super.wake();
    await this.show();
  }

  private createPlayText(): void {
    this.playBtn = new Button(playBtn);
    this.playBtn.position.set(GAME_WIDTH, GAME_HEIGHT * 0.737);
    this.playBtn.on('pointerup', this.onPlayBtnClick, this);
    //
    this.addChild(this.playBtn);
    this.interactiveChildren = false;
  }

  private async show(): Promise<{}> {
    return new Promise((resolve: any) => {
      TweenLite.to(this.playBtn, 0.5, {
        x: CENTER.x,
        alpha: 1,
        ease: Back.easeOut,
        onComplete: () => {
          resolve();
          this.interactiveChildren = true;
        },
      });
    });
  }

  private async hide(): Promise<{}> {
    return new Promise((resolve: any) => {
      TweenLite.to(this.playBtn, 0.5, {
        x: GAME_WIDTH + this.playBtn.width / 2,
        ease: Back.easeIn,
        alpha: 0,
        onStart: () => {
          this.interactiveChildren = false;
        },
        onComplete: resolve,
      });
    });
  }

  private onPlayBtnClick(): void {
    Register.emit(LOBBY_SCENE_PLAY_CLICK);
  }
}
//
import { Back, TweenLite } from 'gsap';
import { CENTER, GAME_HEIGHT, GAME_WIDTH } from '../../constants/Constants';
import { IGame } from '../../constants/Types';
import Register from '../../register/Register';
import { Button } from '../../utils/Button';
import { playBtn } from '../components/buttons/ButtonConfigs';
import BaseScene from './BaseScene';
