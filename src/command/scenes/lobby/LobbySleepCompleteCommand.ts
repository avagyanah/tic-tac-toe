export function LobbySleepCompleteCommand(): void {
  window.TTT.sceneManager.sleep(BACKGROUND_SCENE);
  window.TTT.sceneManager.start(GAME_SCENE);
}
//
import { BACKGROUND_SCENE, GAME_SCENE } from '../../../constants/Constants';
