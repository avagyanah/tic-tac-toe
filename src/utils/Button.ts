export class Button extends PIXI.Sprite {
  constructor(private config: IButtonConfig) {
    super(PIXI.Texture.fromImage(config.upFrame));
    //
    this.configure();
  }

  private configure(): void {
    this.alpha = this.config.alpha ? this.config.alpha : 1;
    this.interactive = true;
    this.cursor = 'pointer';
    this.on('pointerdown', this.onDown);
    this.anchor.set(0.5);
    if (this.config.content) {
      this.config.content.anchor.set(0.5);
      this.addChild(this.config.content);
    }
  }

  private onDown(): void {
    playSound({
      alias: this.config.clickSound.alias,
      options: this.config.clickSound.options,
    });
  }
}
//
import { IButtonConfig } from '../view/components/buttons/ButtonConfigs';
import { playSound } from './Utils';
