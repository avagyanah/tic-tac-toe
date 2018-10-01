export function PopupHideCompleteCommand(popupClassName: string): void {
  popupProxy.queue.shift();
  popupProxy.queue = [...popupProxy.queue];
  if (popupProxy.queue.length) {
    return;
  }
  //
  window.TTT.sceneManager.sleep(POPUP_SCENE);
  //
  switch (popupClassName) {
    case 'SettingsPopup':
    case 'FamePopup':
      window.TTT.sceneManager.wake(UI_SCENE);
      break;
    default:
      break;
  }
}
//
import { POPUP_SCENE, UI_SCENE } from '../../../constants/Constants';
import { popupProxy } from '../../../vo/ViewProxy';
