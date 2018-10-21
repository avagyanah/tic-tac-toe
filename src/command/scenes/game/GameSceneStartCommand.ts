export function GameSceneStartCommand(): void {
  playSound({
    alias: Audios.Sounds.WelcomeSound.Name,
    options: { volume: 1 },
  });
  //
  gameProxy.size = playerProxy.settings.gameSize;
  gameProxy.board = new Array(Math.pow(playerProxy.settings.gameSize, 2)).fill(
    0,
  );
  gameProxy.difficulty = 1;
  LB.initialize(gameProxy.board);
}
//
import { Audios } from '../../../assets';
import { playSound } from '../../../utils/Utils';
import { gameProxy } from '../../../vo/GameProxy';
import LB from '../../../vo/LB';
import { playerProxy } from '../../../vo/PlayerProxy';
