//
export class TestScene extends BaseScene {
  private ball3d: PIXI.projection.Sprite3d;

  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    this.setBackground();
    //
    super.create();
    //
    this.setListeners();
    this.init3D();
    this.startTicker();
  }

  private init3D(): void {
    const camera: PIXI.projection.Camera3d = new PIXI.projection.Camera3d();
    camera.position.set(CENTER.x, CENTER.y);
    camera.setPlanes(1000, 10, 10000, false);
    this.game.stage.addChild(camera);
    //
    const dynamicLayer: PIXI.projection.Container3d = new PIXI.projection.Container3d();
    const staticLayer: PIXI.projection.Container3d = new PIXI.projection.Container3d();
    //
    camera.addChild(staticLayer);
    camera.addChild(dynamicLayer);
    //
    const sprite3d: PIXI.projection.Sprite3d = new PIXI.projection.Sprite3d(
      PIXI.loader.resources['profile-icon'].texture,
    );
    sprite3d.visible = false;
    this.ball3d = new PIXI.projection.Sprite3d(
      PIXI.loader.resources['ball'].texture,
    );
    // const ball3d: PIXI.projection.Sprite3d = new PIXI.projection.Sprite3d(
    //   PIXI.loader.resources['ball'].texture,
    // );
    this.ball3d.anchor.set(0.5);
    this.ball3d.position3d.y += 200;
    this.ball3d.position3d.z += 300;
    //
    dynamicLayer.addChild(sprite3d);
    staticLayer.addChild(this.ball3d);
    //

    // TweenMax.to(staticLayer.euler, 2, {
    //   repeatDelay: 0.2,
    //   repeat: -1,
    //   z: Math.PI * 2,
    // });
    // TweenMax.to(staticLayer.position3d, 2, {
    //   repeatDelay: 0.2,
    //   repeat: -1,
    //   z: 1000,
    // });
  }

  private createWall(): void {}

  private startTicker(): void {
    setInterval(() => {
      this.createWall();
    }, 1000);
  }

  private setListeners(): void {
    this.game.stage.interactive = true;
    this.game.stage.on('pointerdown', this.onTouchDown, this);
    this.game.stage.on('pointerup', this.onTouchUp, this);
  }

  private onTouchDown(e: interaction.InteractionEvent): void {
    this.game.stage.on('pointermove', this.onTouchMove, this);
  }
  private onTouchUp(e: interaction.InteractionEvent): void {
    this.game.stage.off('pointermove', this.onTouchMove, this);
  }
  private onTouchMove(e: interaction.InteractionEvent): void {
    // @ts-ignore
    const moveX: number = e.data.originalEvent.movementX;
    TweenLite.to(this.ball3d, 0.15, {
      rotation: this.ball3d.rotation - moveX * 0.05,
    });
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
