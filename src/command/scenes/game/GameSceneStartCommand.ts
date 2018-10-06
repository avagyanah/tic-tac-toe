export function GameSceneStartCommand(): void {
  PIXI.sound.play(Audios.Sounds.WelcomeSound.Name, {
    volume: 1,
  });
  //
  gameProxy.size = playerProxy.gameSize;
  gameProxy.board = new Array(Math.pow(playerProxy.gameSize, 2)).fill(0);
  gameProxy.difficulty = 1;
  //
  LB.initialize(gameProxy.size);
}
//
import { Audios } from '../../../assets';
import { gameProxy } from '../../../vo/GameProxy';
import LB from '../../../vo/LB';
import { playerProxy } from '../../../vo/PlayerProxy';
