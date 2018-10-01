export function PreloadSceneLoadCompleteCommand(): void {
  window.TTT.sceneManager.start(BACKGROUND_SCENE);
}
//
import { BACKGROUND_SCENE } from '../../../constants/Constants';
