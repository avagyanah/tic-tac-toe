export class BaseField extends PIXI.Container {
  protected titleLabel: PIXI.Text;
  protected valueLabel: PIXI.Text;

  constructor(title: string, value: any) {
    super();
    this.createTitle(title);
    this.createValue(value);
  }

  private createTitle(title: string): void {
    this.titleLabel = new PIXI.Text(`${title} : `, {
      fontFamily: 'Octavio',
      fontSize: 65,
      fill: 0x607272,
    });
    this.titleLabel.anchor.set(1, 0.5);
    this.addChild(this.titleLabel);
  }

  private createValue(value: any): void {
    this.valueLabel = new PIXI.Text(`${value}`, {
      fontFamily: 'Octavio',
      fontSize: 60,
      fontWeight: 'bold',
      fill: 0xa5927d,
    });
    this.valueLabel.anchor.set(0, 0.5);
    this.valueLabel.x = this.titleLabel.x + 50;
    this.addChild(this.valueLabel);
  }
}
