export default class ProgressBar extends PIXI.Container {
  private static: PIXI.Graphics;
  private fill: PIXI.Graphics;
  private text: PIXI.Text;

  constructor() {
    super();
    const staticConf: any = {
      thickness: 4,
      y: 2,
      width: GAME_WIDTH,
    };

    this.addChild((this.static = this.createEmpty(staticConf)));
    this.addChild((this.fill = this.createEmpty({})));
    this.addChild((this.text = this.createText()));
  }

  public update(progress: number): void {
    this.fill.clear();
    this.fill
      .lineStyle(8, 0x6d6d6d)
      .moveTo(0, 4 + this.static.height)
      .lineTo(this.static.width / (100 / progress), 8);
  }

  private createEmpty(options: any): PIXI.Graphics {
    return new PIXI.Graphics()
      .lineStyle(options.thickness, 0x6d6d6d)
      .moveTo(0, options.y)
      .lineTo(options.width, options.y);
  }

  private createText(): PIXI.Text {
    const style: PIXI.TextStyleOptions = {
      letterSpacing: 10,
      fontSize: 20,
    };
    const txt: PIXI.Text = new PIXI.Text('LOADING', style);
    txt.position.set(this.static.width / 2, 50);
    txt.anchor.set(0.5);
    return txt;
  }
}
//
import { GAME_WIDTH } from '../../constants/Constants';
