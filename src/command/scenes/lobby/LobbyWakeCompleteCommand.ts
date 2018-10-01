export function LobbyWakeCompleteCommand(): void {
  setTimeout(() => {
    window.TTT.sceneManager.wake(UI_SCENE);
  }, 200);
}
//
import { UI_SCENE } from '../../../constants/Constants';
