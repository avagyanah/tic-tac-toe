export function UIFameButtonClickCommand(): void {
  window.TTT.sceneManager.sleep(UI_SCENE);
  PopupShowCommand(FamePopup);
}
//
import { UI_SCENE } from '../../../constants/Constants';
import FamePopup from '../../../view/components/popups/FamePopup';
import { PopupShowCommand } from '../popup/PopupShowCommand';
