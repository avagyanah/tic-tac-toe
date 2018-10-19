export const BACKGROUND_SCENE_START: string = 'BackgroundSceneStart';
//
export class BackgroundScene extends BaseScene {
  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    this.setBackground();
    //
    super.create();
  }

  private setBackground(): void {
    const bg: PIXI.Sprite = new PIXI.Sprite(GENERAL_ASSETS['bg.jpg']);
    bg.anchor.set(0.5);
    bg.position.set(CENTER.x, CENTER.y);
    this.addChild(bg);
  }
}
//
import { CENTER } from '../../constants/Constants';
import { IGame } from '../../constants/Types';
import BaseScene from './BaseScene';
import { GENERAL_ASSETS } from './PreloadScene';
