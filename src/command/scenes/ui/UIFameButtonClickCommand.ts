export function UIFameButtonClickCommand(): void {
  window.TTT.sceneManager.sleep(UI_SCENE);
  PopupShowCommand(FamePopup);
  PopupShowCommand(SettingsPopup);
}
//
import { UI_SCENE } from '../../../constants/Constants';
import FamePopup from '../../../view/components/popups/FamePopup';
import SettingsPopup from '../../../view/components/popups/settings/SettingsPopup';
import { PopupShowCommand } from '../popup/PopupShowCommand';
