export const POPUP_HIDE_COMPLETE: string = 'PopupHideComplete';

export class PopupScene extends BaseScene {
  constructor(game: IGame) {
    super(game);
    popupProxy.registerObserver(this);
  }

  protected updateView(key: string, value: any): void {
    switch (value) {
      case popupProxy.queue:
        const queue: any[] = popupProxy.queue;
        queue.length && this.showPopup(queue[0]);
        break;
      default:
        break;
    }
  }

  private async showPopup(popupClass: new () => BasePopup): Promise<void> {
    const popup: BasePopup = new popupClass();
    popup.on('hideComplete', () => {
      Register.emit(POPUP_HIDE_COMPLETE, popupClass.name);
    });
    this.addChild(popup);
    await popup.show();
  }
}
//
import { IGame } from '../../constants/Types';
import Register from '../../register/Register';
import { popupProxy } from '../../vo/ViewProxy';
import BasePopup from '../components/popups/BasePopup';
import BaseScene from './BaseScene';
