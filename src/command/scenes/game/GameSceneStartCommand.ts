export function GameSceneStartCommand(): void {
  playSound({
    alias: Audios.Sounds.WelcomeSound.Name,
    options: { volume: 1 },
  });
  //
  gameProxy.size = playerProxy.settings.gameSize;
  gameProxy.board = new Array(Math.pow(gameProxy.size, 2)).fill(0);
  const board: number[] = [...gameProxy.board];
  board[0] = PlayerType.X;
  board[1] = PlayerType.O;
  board[2] = PlayerType.X;
  board[3] = PlayerType.O;
  board[5] = PlayerType.O;
  board[7] = PlayerType.X;
  gameProxy.board = [...board];
  gameProxy.difficulty = 4;
  LB.initialize(gameProxy.size, gameProxy.difficulty);
}
//
import { Audios } from '../../../assets';
import { PlayerType } from '../../../constants/Collections';
import { playSound } from '../../../utils/Utils';
import { gameProxy } from '../../../vo/GameProxy';
import LB from '../../../vo/LB';
import { playerProxy } from '../../../vo/PlayerProxy';
