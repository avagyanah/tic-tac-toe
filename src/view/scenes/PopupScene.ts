export const POPUP_HIDE_COMPLETE: string = 'PopupHideComplete';

export class PopupScene extends BaseScene {
  constructor(game: IGame) {
    super(game);
    popupProxy.registerObserver(this);
  }

  protected updateView(key: string, value: any, receiver: IPopupProxy): void {
    switch (receiver) {
      case popupProxy:
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
    popupProxy.removeObserver(this);
    const popup: BasePopup = new popupClass();
    popup.on('hideComplete', () => {
      Register.emit(POPUP_HIDE_COMPLETE, popupClass.name);
    });
    this.addChild(popup);
    await popup.show();
    popupProxy.registerObserver(this);
  }
}
//
import { IGame, IPopupProxy } from '../../constants/Types';
import Register from '../../register/Register';
import { popupProxy } from '../../vo/ViewProxy';
import BasePopup from '../components/popups/BasePopup';
import BaseScene from './BaseScene';
