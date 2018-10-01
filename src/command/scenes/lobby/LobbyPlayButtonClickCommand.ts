export function LobbyPlayButtonClickCommand(): void {
  window.TTT.sceneManager.sleep(LOBBY_SCENE);
  window.TTT.sceneManager.sleep(UI_SCENE);
}
//
import { LOBBY_SCENE, UI_SCENE } from '../../../constants/Constants';
