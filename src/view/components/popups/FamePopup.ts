export default class FamePopup extends BasePopup {
  constructor() {
    super(famePopup);
    //
    fameProxy.registerObserver(this);
    this.createUsersList(fameProxy.users);
  }

  public destroy(options?: boolean | PIXI.DestroyOptions): void {
    fameProxy.removeObserver(this);
    //
    super.destroy(options);
  }

  protected updateView(key: string, value: any, receiver: any): void {
    switch (receiver) {
      case fameProxy:
        switch (key) {
          case 'users':
            console.warn('USERS CHANGED');
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  private createUsersList(users: IUserVO[]): void {
    const style: any = {
      fill: 0xa5927d,
      fontFamily: 'Octavio',
      fontSize: 50,
      fontWeight: 'bold',
    };
    users.forEach((user: IUserVO, index: number) => {
      const fameUser: FameUser = new FameUser(user.name, user.rating, style);
      fameUser.position.set(
        this.bg.x - this.bg.width / 2 + 50,
        this.bg.y - this.bg.height / 2 + 120 + 42 * index,
      );
      this.addChild(fameUser);
    });
  }
}

class FameUser extends PIXI.Container {
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
    const nameLabel: PIXI.Text = new PIXI.Text(this.__name, style);
    nameLabel.anchor.set(1, 0);
    nameLabel.x += 100;
    this.addChild(nameLabel);
  }

  private createRating(style: PIXI.TextStyleOptions): void {
    const ratingLabel: PIXI.Text = new PIXI.Text(`${this.__rating}`, style);
    ratingLabel.x += 200;
    this.addChild(ratingLabel);
  }
}
//
import { IUserVO } from '../../../constants/Types';
import { fameProxy } from '../../../vo/FameProxy';
import BasePopup from './BasePopup';
import { famePopup } from './PopupConfigs';
