export function PlayerMoveCommand(i: number): void {
  playSound({
    alias: Audios.Sounds.ClickSound.Name,
    options: { volume: 1 },
  });
  //
  gameProxy.board[i] = playerProxy.settings.player;
  const state: IGameState = LB.move(gameProxy.board);
  gameProxy.board = state.board;
  gameProxy.resolvedLine = state.resolvedState.line;
  gameProxy.winner = state.resolvedState.winner;
}
//
import { Audios } from '../../assets';
import { playSound } from '../../utils/Utils';
import { gameProxy } from '../../vo/GameProxy';
import LB, { IGameState } from '../../vo/LB';
import { playerProxy } from '../../vo/PlayerProxy';
