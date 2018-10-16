export function PopupHideCompleteCommand(popupClassName: string): void {
  viewProxy.popup.queue.shift();
  viewProxy.popup.queue = [...viewProxy.popup.queue];
  if (viewProxy.popup.queue.length) {
    return;
  }
  //
  window.TTT.sceneManager.sleep(POPUP_SCENE);
  //
  switch (popupClassName) {
    case 'SettingsPopup':
    case 'FamePopup':
    case 'ProfilePopup':
      window.TTT.sceneManager.wake(UI_SCENE);
      break;
    default:
      break;
  }
}
//
import { POPUP_SCENE, UI_SCENE } from '../../../constants/Constants';
import { viewProxy } from '../../../vo/ViewProxy';
