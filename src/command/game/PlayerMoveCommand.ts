export function PlayerMoveCommand(i: number): void {
  PIXI.sound.play(Audios.Sounds.ClickSound.Name, {
    volume: 1,
  });
  //
  gameProxy.board[i] = playerProxy.player;
  const state: IState = LB.move(gameProxy.board);
  gameProxy.board = state.board;
  gameProxy.resolved = state.resolved;
}
//
import { Audios } from '../../assets';
import { gameProxy } from '../../vo/GameProxy';
import LB, { IState } from '../../vo/LB';
import { playerProxy } from '../../vo/PlayerProxy';
