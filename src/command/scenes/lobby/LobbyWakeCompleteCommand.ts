export function LobbyWakeCompleteCommand(): void {
  setTimeout(() => {
    window.TTT.sceneManager.wake(UI_SCENE);
  }, 200);

  setTimeout(() => {
    window.TTT.sceneManager.start('TestScene');
  }, 220);
}
//
import { UI_SCENE } from '../../../constants/Constants';
