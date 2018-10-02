export const SQUARE_CLICK: string = 'SquareClick';
//
export default class Square extends PIXI.Sprite {
  private _type: number;

  constructor() {
    super(PIXI.Texture.fromImage(Images.Square.FileURL));
    this.anchor.set(0.5);
  }

  public get type(): number {
    return this._type;
  }

  public set type(value: number) {
    this.clear();
    this._type = value;
    switch (value) {
      case 1:
        this.drawX();
        break;
      case 2:
        this.draw0();
        break;
      default:
        this.clear();
        break;
    }
  }

  private drawX(): void {
    this.addChild(this.getImage(Images.X.Name));
  }
  private draw0(): void {
    this.addChild(this.getImage(Images.O.Name));
  }
  private clear(): void {
    while (this.children.length) {
      let child: DisplayObject = this.children[0];
      child.destroy();
      child = null;
    }
  }
  private getImage(key: string): PIXI.Sprite {
    const image: PIXI.Sprite = PIXI.Sprite.fromFrame(key);
    image.anchor.set(0.5);
    return image;
  }
}
//
import { DisplayObject } from 'pixi.js';
import { Images } from '../../assets';