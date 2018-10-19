export const SQUARE_CLICK: string = 'SquareClick';
//
export default class Square extends PIXI.Sprite {
  private _type: number;

  constructor() {
    super(PIXI.loader.resources['general'].textures['square.png']);
    this.anchor.set(0.5);
  }

  public shake(): void {
    TweenLite.fromTo(
      this,
      0.3,
      { x: '-=1' },
      {
        x: '+=1',
        // @ts-ignore
        ease: RoughEase.ease.config({
          strength: 15,
          points: 20,
          template: Linear.easeNone,
          randomize: false,
        }),
        clearProps: 'x',
      },
    );
  }

  public get type(): number {
    return this._type;
  }

  public set type(value: number) {
    this.clear();
    this._type = value;
    switch (value) {
      case PlayerType.X:
        this.drawX();
        break;
      case PlayerType.O:
        this.draw0();
        break;
      default:
        this.clear();
        break;
    }
  }

  private drawX(): void {
    this.addChild(this.getImage('x.png'));
  }
  private draw0(): void {
    this.addChild(this.getImage('o.png'));
  }
  private clear(): void {
    while (this.children.length) {
      let child: DisplayObject = this.children[0];
      child.destroy();
      child = null;
    }
  }
  private getImage(key: string): PIXI.Sprite {
    const image: PIXI.Sprite = new PIXI.Sprite(
      PIXI.loader.resources['general'].textures[key],
    );
    image.anchor.set(0.5);
    return image;
  }
}
//
import { Linear, TweenLite } from 'gsap';
import { DisplayObject } from 'pixi.js';
import { PlayerType } from '../../constants/Collections';
