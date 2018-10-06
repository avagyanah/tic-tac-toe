export function BackgroundSceneStartCommand(): void {
  window.TTT.sceneManager.destroy(PRELOAD_SCENE);
  window.TTT.sceneManager.start(LOBBY_SCENE);
  window.TTT.sceneManager.start(UI_SCENE);
  window.TTT.sceneManager.wake(LOBBY_SCENE);
  //
  PlaySound(Audios.Sounds.WelcomeSound.Name, {
    volume: 1,
  });
}
//
import { Audios } from '../../../assets';
import {
  LOBBY_SCENE,
  PRELOAD_SCENE,
  UI_SCENE,
} from '../../../constants/Constants';
import { PlaySound } from '../../../utils/Utils';
