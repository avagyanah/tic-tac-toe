export class BaseOption extends PIXI.Container {
  protected nextBtn: Button;
  protected previousBtn: Button;
  private options: PIXI.Text[] = [];
  private activeIndex: number = 0;
  private titleLabel: PIXI.Text;

  constructor(title: string, options: any[], active: any) {
    super();
    //
    this.createTitle(title);
    this.createControls();
    this.createOptions(options);
    this.createMask();
    this.setActiveValue(active, false);
  }

  protected next(): void {
    this.startButtonTween(this.nextBtn);
    //   const next: PIXI.Text = this.options[this.activeIndex + 1];
    //   next && this.setActiveValue(next.text);
    //   return next;
  }

  protected previous(): void {
    this.startButtonTween(this.previousBtn);
    //   const previous: PIXI.Text = this.options[this.activeIndex - 1];
    //   previous && this.setActiveValue(previous.text);
    //   return previous;
  }

  private createTitle(title: string): void {
    this.titleLabel = new PIXI.Text(`${title} : `, {
      fontFamily: 'Octavio',
      fontSize: 80,
      fill: 0x607272,
    });
    this.titleLabel.anchor.set(1, 0.5);
    this.addChild(this.titleLabel);
  }

  private createControls(): void {
    this.previousBtn = new Button(settingsPreviousBtn);
    this.previousBtn.scale.set(-1, 1);
    this.previousBtn.x = this.titleLabel.x + 30;
    this.previousBtn.on('pointerup', this.previous, this);
    this.previousBtn.alpha = 0.5;
    this.previousBtn.hitArea = new PIXI.Rectangle(-40, -40, 80, 80);

    this.nextBtn = new Button(settingsPreviousBtn);
    this.nextBtn.x = this.titleLabel.x + 160;
    this.nextBtn.on('pointerup', this.next, this);
    this.nextBtn.alpha = 0.5;
    this.nextBtn.hitArea = new PIXI.Rectangle(-40, -40, 80, 80);

    this.addChild(this.nextBtn, this.previousBtn);
  }

  private createMask(): void {
    const mask: PIXI.Graphics = new PIXI.Graphics();
    mask.drawRect(
      (this.previousBtn.x + this.nextBtn.x) / 2 - 25,
      this.previousBtn.y - this.previousBtn.height / 2,
      50,
      50,
    );
    this.addChild(mask);
    //
    this.options.forEach((opt: PIXI.Text) => {
      opt.mask = mask;
    });
  }

  private createOptions(options: string[]): void {
    options.forEach((opt: string, index: number) => {
      const option: PIXI.Text = new PIXI.Text(opt, {
        fontFamily: 'Octavio',
        fontSize: 70,
        fill: 0xa5927d,
        fontWeight: 'bold',
      });
      option.anchor.set(0.5);
      option.x = (this.previousBtn.x + this.nextBtn.x) / 2 + index * 60;
      //
      this.options.push(option);
      this.addChild(option);
    });
  }

  private setActiveValue(value: string, tween: boolean = true): void {
    const index: number = this.options.indexOf(
      this.options.find((opt: PIXI.Text) => opt.text === value),
    );

    const diff: number = Math.abs(index - this.activeIndex);
    if (index > this.activeIndex) {
      this.startOptionsTween(diff * -60, tween);
    } else if (index < this.activeIndex) {
      this.startOptionsTween(diff * 60, tween);
    }
    this.activeIndex = index;
  }

  private startOptionsTween(value: number, tween: boolean): void {
    // if (!tween) {
    //   this.options.forEach((opt: PIXI.Text) => {
    //     opt.x += value;
    //   });
    // } else {
    //   this.options.forEach((opt: PIXI.Text) => {
    //     TweenLite.to(opt, 0.2, {
    //       x: opt.x + value,
    //       ease: Back.easeIn,
    //     });
    //   });
    // }
  }

  private startButtonTween(button: Button): void {
    TweenMax.to(button, 0.1, {
      x: button.x + button.scale.x * 10,
      repeat: 1,
      yoyo: true,
      onStart: () => {
        button.interactive = false;
      },
      onComplete: () => {
        button.interactive = true;
      },
    });
  }
}
//
import { TweenMax } from 'gsap';
import { Button } from '../../../../utils/Button';
import { settingsPreviousBtn } from '../../buttons/ButtonConfigs';
