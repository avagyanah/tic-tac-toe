export default class FamePopup extends BasePopup {
  constructor() {
    super(famePopup);
    //
    this.createUsersList(fameProxy.users);
  }

  public destroy(options?: boolean | PIXI.DestroyOptions): void {
    super.destroy(options);
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
        this.bg.x,
        this.bg.y - this.bg.height / 2 + 120 + 42 * index,
      );
      this.addChild(fameUser);
    });
  }
}
//
import { IUserVO } from '../../../../constants/Types';
import { fameProxy } from '../../../../vo/FameProxy';
import BasePopup from '../BasePopup';
import { famePopup } from '../PopupConfigs';
import { FameUser } from './components/FameUser';
