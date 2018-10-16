export const POPUP_HIDE_COMPLETE: string = 'PopupHideComplete';

export class PopupScene extends BaseScene {
  constructor(game: IGame) {
    super(game);
    viewProxy.popup.registerObserver(this);
  }

  protected updateView(key: string, value: any, receiver: IPopupProxy): void {
    switch (receiver) {
      case viewProxy.popup:
        switch (key) {
          case 'queue':
            value.length && this.showPopup(value[0]);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  private async showPopup(popupClass: new () => BasePopup): Promise<void> {
    viewProxy.popup.removeObserver(this);
    const popup: BasePopup = new popupClass();
    popup.on('hideComplete', () => {
      Register.emit(POPUP_HIDE_COMPLETE, popupClass.name);
    });
    this.addChild(popup);
    await popup.show();
    viewProxy.popup.registerObserver(this);
  }
}
//
import { IGame, IPopupProxy } from '../../constants/Types';
import Register from '../../register/Register';
import { viewProxy } from '../../vo/ViewProxy';
import BasePopup from '../components/popups/BasePopup';
import BaseScene from './BaseScene';
