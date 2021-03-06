export class Button extends PIXI.Sprite {
  constructor(private config: IButtonConfig) {
    super(GENERAL_ASSETS[config.upFrame]);
    // TEMPORARY
    if (!GENERAL_ASSETS[config.upFrame]) {
      this.texture = PIXI.loader.resources[config.upFrame].texture;
    }
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
import { GENERAL_ASSETS } from '../view/scenes/PreloadScene';
import { playSound } from './Utils';
