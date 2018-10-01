export function UISettingsButtonClickCommand(): void {
  window.TTT.sceneManager.sleep(UI_SCENE);
  PopupShowCommand(SettingsPopup);
}
//
import { UI_SCENE } from '../../../constants/Constants';
import SettingsPopup from '../../../view/components/popups/settings/SettingsPopup';
import { PopupShowCommand } from '../popup/PopupShowCommand';
