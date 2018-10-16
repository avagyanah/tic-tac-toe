export function PopupShowCommand(popupClass: any): void {
  window.TTT.sceneManager.wake(POPUP_SCENE);
  //
  viewProxy.popup.queue = [...viewProxy.popup.queue, popupClass];
}
//
import { POPUP_SCENE } from '../../../constants/Constants';
import { viewProxy } from '../../../vo/ViewProxy';
