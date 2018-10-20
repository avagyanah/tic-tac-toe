export class FameUser extends PIXI.Container {
  constructor(
    private __name: string,
    private __rating: number,
    style: PIXI.TextStyleOptions,
  ) {
    super();
    //
    this.createName(style);
    this.createRating(style);
  }

  private createName(style: PIXI.TextStyleOptions): void {
    const stylek: any = { ...style };
    stylek.fill = 0x626262;
    const nameLabel: PIXI.Text = new PIXI.Text(this.__name, stylek);
    nameLabel.anchor.set(1, 0);
    nameLabel.x -= 40;

    this.addChild(nameLabel);
  }

  private createRating(style: PIXI.TextStyleOptions): void {
    const ratingLabel: PIXI.Text = new PIXI.Text(`${this.__rating}`, style);
    ratingLabel.x += 40;
    this.addChild(ratingLabel);
  }
}
