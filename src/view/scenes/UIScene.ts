export const UI_SCENE_SETTING_CLICK: string = 'UiSceneSettingClick';
export const UI_SCENE_FAME_CLICK: string = 'UiSceneFameClick';
//
export class UIScene extends BaseScene {
  private settingsBtn: Button;
  private fameBtn: Button;

  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    this.createUI();
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

  private createUI(): void {
    this.settingsBtn = new Button(settingsBtn);
    this.settingsBtn.position.set(GAME_WIDTH * 0.9, GAME_HEIGHT + 30);
    this.settingsBtn.on('pointerup', () => {
      Register.emit(UI_SCENE_SETTING_CLICK);
    });
    //
    this.fameBtn = new Button(fameBtn);
    this.fameBtn.position.set(GAME_WIDTH * 0.78, GAME_HEIGHT + 30);
    this.fameBtn.on('pointerup', () => {
      Register.emit(UI_SCENE_FAME_CLICK);
    });
    //
    this.addChild(this.settingsBtn, this.fameBtn);
    this.interactiveChildren = false;
  }

  private async show(): Promise<{}> {
    return new Promise((resolve: any, reject: any) => {
      TweenLite.killTweensOf(this.children);
      for (let i: number = 0; i < this.children.length; ++i) {
        TweenLite.to(this.children[i], 0.5, {
          y: GAME_HEIGHT - 50,
          delay: i * 0.1,
          ease: Back.easeOut,
          onComplete: () => {
            if (i === this.children.length - 1) {
              this.interactiveChildren = true;
              resolve();
            }
          },
        });
      }
      TweenLite.to(this.settingsBtn, 0.5, {
        rotation: Math.PI * 0.5,
        ease: Back.easeOut,
      });
    });
  }

  private async hide(): Promise<{}> {
    return new Promise((resolve: any, reject: any) => {
      TweenLite.killTweensOf(this.children);
      this.interactiveChildren = false;
      for (let i: number = 0; i < this.children.length; ++i) {
        TweenLite.to(this.children[i], 0.5, {
          y: GAME_HEIGHT + 50,
          delay: i * 0.1,
          ease: Back.easeIn,
          onComplete: () => {
            if (i === this.children.length - 1) {
              this.interactiveChildren = true;
              resolve();
            }
          },
        });
      }
      TweenLite.to(this.settingsBtn, 0.5, {
        rotation: 0,
        ease: Back.easeIn,
      });
    });
  }
}
//
import { Back, TweenLite } from 'gsap';
import { GAME_HEIGHT, GAME_WIDTH } from '../../constants/Constants';
import { IGame } from '../../constants/Types';
import Register from '../../register/Register';
import { Button } from '../../utils/Button';
import { fameBtn, settingsBtn } from '../components/buttons/ButtonConfigs';
import BaseScene from './BaseScene';
