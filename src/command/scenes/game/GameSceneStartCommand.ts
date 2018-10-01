export function GameSceneStartCommand(): void {
  PIXI.sound.play(Audios.Sounds.WelcomeSound.Name, {
    volume: 1,
  });
  //
  playerProxy.player = _sample([PlayerType.X, PlayerType.O]);
  gameProxy.size = 3;
  gameProxy.board = new Array(Math.pow(gameProxy.size, 2)).fill(0);
  gameProxy.difficulty = 1;
  //
  LB.initialize(gameProxy.size);
}
//
import _sample from 'lodash.sample';
import { Audios } from '../../../assets';
import { PlayerType } from '../../../constants/Enums';
import { gameProxy } from '../../../vo/GameProxy';
import LB from '../../../vo/LB';
import { playerProxy } from '../../../vo/PlayerProxy';
