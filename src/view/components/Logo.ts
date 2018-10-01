export default class Logo extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.fromImage(Images.LogoImage.FileURL));
    this.anchor.set(0.5);
  }
}
//
import { Images } from '../../assets';
