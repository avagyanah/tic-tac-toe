//
export class TestScene extends BaseScene {
  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    this.setBackground();
    //
    super.create();
    //
    this.init3D();
  }

  private init3D(): void {
    const camera: PIXI.projection.Camera3d = new PIXI.projection.Camera3d();
    camera.setPlanes(300, 10, 1000, false);
    // camera.position3d.y = -500; // camera is above the ground
    //

    this.game.stage.addChild(camera);
    const groundLayer: PIXI.projection.Container3d = new PIXI.projection.Container3d();
    camera.addChild(groundLayer);
    //
    const sprite3d: PIXI.projection.Sprite3d = new PIXI.projection.Sprite3d(
      GENERAL_ASSETS['fame-icon.png'],
    );
    TweenMax.to(sprite3d.position3d, 1, {
      repeatDelay: 0.2,
      z: 200,
      repeat: -1,
      yoyo: true,
    });
    groundLayer.addChild(sprite3d);
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
import { WebGLRenderer } from 'pixi.js';
import { TweenLite, Back, TweenMax } from 'gsap';
