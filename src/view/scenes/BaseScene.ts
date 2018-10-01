export default class BaseScene extends PIXI.Container implements IScene {
  constructor(protected game: IGame) {
    super();
    this.game.stage.addChild(this);
  }

  public create(): void {
    Register.emit(`${this.constructor.name}Start`);
  }

  public destroy(): void {
    super.destroy(true);
    //
    Register.emit(`${this.constructor.name}Destroy`);
  }

  public wake(): void {
    this.renderable = true;
    //
    Register.emit(`${this.constructor.name}Wake`);
  }

  public sleep(): void {
    this.renderable = false;
    //
    Register.emit(`${this.constructor.name}Sleep`);
  }

  protected updateView(key: string, value: any): void {}
}
//
import { IGame, IScene } from '../../constants/Types';
import Register from '../../register/Register';
