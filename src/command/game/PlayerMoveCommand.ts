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

  // TEMPORARY
  return;
  gameProxy.winner && PopupShowCommand(GameResolvedPopup);
}
//
import { Audios } from '../../assets';
import { playSound } from '../../utils/Utils';
import GameResolvedPopup from '../../view/components/popups/resolve/GameResolvedPopup';
import { gameProxy } from '../../vo/GameProxy';
import LB, { IGameState } from '../../vo/LB';
import { playerProxy } from '../../vo/PlayerProxy';
import { PopupShowCommand } from '../scenes/popup/PopupShowCommand';
