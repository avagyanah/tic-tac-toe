export function PlayerMoveCommand(i: number): void {
  playSound({
    alias: Audios.Sounds.ClickSound.Name,
    options: { volume: 1 },
  });
  //
  gameProxy.board[i] = playerProxy.settings.player;
  const gameState: IGameState = LB.minimax(gameProxy.board);
  gameProxy.board = gameState.board;
  gameProxy.resolvedLine = gameState.state.line;
  gameProxy.winner = gameState.state.winner;

  return;
  gameProxy.winner && PopupShowCommand(GameResolvedPopup);
}
//
import { Audios } from '../../assets';
import { IGameState } from '../../constants/Types';
import { playSound } from '../../utils/Utils';
import GameResolvedPopup from '../../view/components/popups/resolve/GameResolvedPopup';
import { gameProxy } from '../../vo/GameProxy';
import LB from '../../vo/LB';
import { playerProxy } from '../../vo/PlayerProxy';
import { PopupShowCommand } from '../scenes/popup/PopupShowCommand';
