export function PopupShowCommand(popupClass: any): void {
  window.TTT.sceneManager.wake(POPUP_SCENE);
  //
  popupProxy.queue = [...popupProxy.queue, popupClass];
}
//
import { POPUP_SCENE } from '../../../constants/Constants';
import { popupProxy } from '../../../vo/ViewProxy';
