export default class BasePopup extends PIXI.Container {
  public title: PIXI.Text;
  public blocker: PIXI.Graphics;
  protected bg: PIXI.Sprite;
  protected closeBtn: PIXI.Sprite;

  constructor(private config: IPopupConfig) {
    super();
    this.configure();
  }

  public show(): Promise<void> {
    return new Promise((resolve: any, reject: any) => {
      TweenLite.fromTo(
        this.blocker,
        0.1,
        {
          alpha: 0,
        },
        {
          alpha: this.config.blocker.alpha,
          ease: Linear.easeIn,
          onStart: () => {
            this.parent.addChildAt(this.blocker, 0);
            PlaySound(Audios.Sounds.WelcomeSound.Name, {
              volume: 1,
            });
          },
        },
      );
      TweenLite.fromTo(
        this,
        0.3,
        {
          x: this.width,
        },
        {
          x: 0,
          ease: Back.easeOut,
        },
      );
      TweenLite.fromTo(
        this,
        0.3,
        {
          alpha: 0.5,
        },
        {
          alpha: 1,
          onComplete: resolve,
        },
      );
    });
  }

  public hide(): Promise<void> {
    return new Promise((resolve: any, reject: any) => {
      TweenLite.to(this.blocker, 0.3, {
        alpha: 0,
        ease: Linear.easeIn,
        onStart: () => {
          PlaySound(Audios.Sounds.WelcomeSound.Name, {
            volume: 1,
          });
        },
      });
      TweenLite.to(this, 0.3, {
        x: this.width,
        ease: Back.easeIn,
      });
      TweenLite.to(this, 0.3, {
        alpha: 0.5,
        onComplete: () => {
          this.addChildAt(this.blocker, 0);
          resolve();
          this.emit('hideComplete');
          this.destroy({ children: true });
        },
      });
    });
  }

  protected createTitle(): PIXI.Text {
    const title: PIXI.Text = new PIXI.Text(
      this.config.title.text,
      this.config.title.style,
    );
    title.anchor.set(0.5, 0);
    title.position.set(
      this.bg.x + (this.config.title.offsetX || 0),
      this.bg.y - this.bg.height / 2 + (this.config.title.offsetY || 0),
    );
    return title;
  }

  protected createBlocker(): PIXI.Graphics {
    const blocker: PIXI.Graphics = new PIXI.Graphics();
    blocker.beginFill(this.config.blocker.color, this.config.blocker.alpha);
    blocker.drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    blocker.interactive = true;
    blocker.once('pointerdown', this.hide, this);
    return blocker;
  }

  protected createBg(): PIXI.Sprite {
    const bg: PIXI.Sprite = PIXI.Sprite.fromFrame(this.config.bg.frame);
    bg.anchor.set(0.5);
    bg.position.set(this.config.bg.offsetX, this.config.bg.offsetY);
    bg.interactive = true;
    return bg;
  }

  protected createCloseButton(): PIXI.Sprite {
    const btn: PIXI.Sprite = PIXI.Sprite.fromFrame(
      this.config.closeButton.frame,
    );
    btn.anchor.set(0.5);
    btn.position.set(
      CENTER.x +
        this.bg.width / 2 -
        btn.width +
        (this.config.closeButton.offsetX || 0),
      CENTER.y -
        this.bg.height / 2 +
        btn.height +
        (this.config.closeButton.offsetY || 0),
    );
    btn.tint = 0x626262;
    btn.interactive = true;
    btn.buttonMode = true;
    btn.once('pointerdown', this.hide, this);
    return btn;
  }

  private configure(): void {
    this.config.blocker && this.addChild((this.blocker = this.createBlocker()));
    this.config.bg && this.addChild((this.bg = this.createBg()));
    this.config.title && this.addChild((this.title = this.createTitle()));
    this.config.closeButton &&
      this.addChild((this.closeBtn = this.createCloseButton()));
  }
}
//
import { Back, Linear, TweenLite } from 'gsap';
import { Audios } from '../../../assets';
import { CENTER, GAME_HEIGHT, GAME_WIDTH } from '../../../constants/Constants';
import { PlaySound } from '../../../utils/Utils';
import { IPopupConfig } from './PopupConfigs';
