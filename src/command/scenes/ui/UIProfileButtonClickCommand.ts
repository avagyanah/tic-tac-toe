export function UIProfileButtonClickCommand(): void {
  window.TTT.sceneManager.sleep(UI_SCENE);
  PopupShowCommand(ProfilePopup);
}
//
import { UI_SCENE } from '../../../constants/Constants';
import ProfilePopup from '../../../view/components/popups/ProfilePopup';
import { PopupShowCommand } from '../popup/PopupShowCommand';
