//
export class TestScene extends BaseScene {
  private ball3d: PIXI.projection.Sprite3d;
  private cam3D: PIXI.projection.Camera3d;
  private staticLayer: PIXI.projection.Container3d;
  private dynamicLayer: PIXI.projection.Container3d;
  private downPoint: number;

  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    super.create();
    //
    this.setBackground();
    this.initCamera();
    this.createBall();
    this.setListeners();
    this.startTicker();
    //
    this.game.ticker.add(this.update, this);
  }

  private update(): void {
    this.dynamicLayer.position3d.z -= 20;
  }

  private initCamera(): void {
    this.cam3D = new PIXI.projection.Camera3d();
    this.cam3D.position.set(CENTER.x, CENTER.y);
    this.cam3D.setPlanes(1000, 100, 1000, false);
    this.game.stage.addChild(this.cam3D);
    //
    this.dynamicLayer = new PIXI.projection.Container3d();
    this.cam3D.addChild(this.dynamicLayer);
  }

  private createBall(): void {
    this.ball3d = new PIXI.projection.Sprite3d(
      PIXI.loader.resources['ball'].texture,
    );
    this.ball3d.anchor.set(0.5);
    this.ball3d.position3d.y += 200;
    this.ball3d.position3d.z += 300;
    //
    this.staticLayer = new PIXI.projection.Container3d();
    this.cam3D.addChild(this.staticLayer);
    this.staticLayer.addChild(this.ball3d);
    //
  }

  private createWall(count: number): void {
    for (let i: number = 0; i < count; ++i) {
      const sprite3d: PIXI.projection.Sprite3d = new PIXI.projection.Sprite3d(
        PIXI.loader.resources['profile-icon'].texture,
      );
      // sprite3d.rotation = i;
      sprite3d.anchor.set(0.5);
      sprite3d.position3d.y = 75;
      sprite3d.position3d.z =
        this.ball3d.position3d.z + 1000 - this.dynamicLayer.position3d.z;
      this.dynamicLayer.addChild(sprite3d);
    }
  }

  private createCircle(): void {
    const sprite3d: PIXI.projection.Sprite3d = new PIXI.projection.Sprite3d(
      PIXI.loader.resources['circle'].texture,
    );
    sprite3d.alpha = 0.7;
    sprite3d.anchor.set(0.5);
    sprite3d.position3d.z =
      this.ball3d.position3d.z + 1000 - this.dynamicLayer.position3d.z;
    this.dynamicLayer.addChild(sprite3d);
  }

  private startTicker(): void {
    setInterval(() => {
      this.createCircle();
    }, 500);
    setInterval(() => {
      this.createWall(Math.random() * 10);
    }, 1000);
  }

  private setListeners(): void {
    this.game.stage.interactive = true;
    this.game.stage.on('touchstart', this.onTouchDown, this);
    this.game.stage.on('touchend', this.onTouchUp, this);
  }

  private onTouchDown(e: interaction.InteractionEvent): void {
    this.game.stage.on('touchmove', this.onTouchMove, this);
    this.downPoint = e.data.global.x;
  }
  private onTouchUp(e: interaction.InteractionEvent): void {
    this.game.stage.off('touchmove', this.onTouchMove, this);
  }
  private onTouchMove(e: interaction.InteractionEvent): void {
    TweenLite.to(this.ball3d, 0.05, {
      rotation:
        this.ball3d.rotation - (e.data.global.x - this.downPoint) * 0.03,
    });
    this.downPoint = e.data.global.x;
  }

  private setBackground(): void {
    const bg: PIXI.Sprite = new PIXI.Sprite(GENERAL_ASSETS['square.png']);
    bg.scale.set(10);
    bg.anchor.set(0.5);
    bg.position.set(CENTER.x, CENTER.y);
    bg.interactive = true;
    this.addChild(bg);
  }
}

//
// import 'pixi-display';
import 'pixi-projection';
import { CENTER } from '../../constants/Constants';
import { IGame } from '../../constants/Types';
import BaseScene from './BaseScene';
import { GENERAL_ASSETS } from './PreloadScene';
import { WebGLRenderer, interaction } from 'pixi.js';
import { TweenLite, Back, TweenMax } from 'gsap';
