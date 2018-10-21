export function PlayerMoveCommand(i: number): void {
  playSound({
    alias: Audios.Sounds.ClickSound.Name,
    options: { volume: 1 },
  });
  //
  gameProxy.board[i] = playerProxy.settings.player;
  const state: IGameState = LB.minimax(gameProxy.board);
  console.warn(state);
  gameProxy.board = state.board;
  gameProxy.resolvedLine = state.state.line;
  gameProxy.winner = state.state.winner;

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
import { Node, Leaf } from '../../utils/Tree';
import { minimax } from '../../utils/Minimax';
import Board from '../../utils/Borad';
import Player from '../../utils/Player';
//
