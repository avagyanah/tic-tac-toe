export function GameSceneStartCommand(): void {
  PlaySound(Audios.Sounds.WelcomeSound.Name, {
    volume: 1,
  });
  //
  gameProxy.size = playerProxy.settings.gameSize;
  gameProxy.board = new Array(Math.pow(playerProxy.settings.gameSize, 2)).fill(
    0,
  );
  gameProxy.difficulty = 1;
  //
  LB.initialize(gameProxy.size);
}
//
import { Audios } from '../../../assets';
import { PlaySound } from '../../../utils/Utils';
import { gameProxy } from '../../../vo/GameProxy';
import LB from '../../../vo/LB';
import { playerProxy } from '../../../vo/PlayerProxy';
