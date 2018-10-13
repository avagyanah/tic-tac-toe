export function PlayerMoveCommand(i: number): void {
  PlaySound(Audios.Sounds.ClickSound.Name, {
    volume: 1,
  });
  //
  gameProxy.board[i] = playerProxy.settings.player;
  const state: IState = LB.move(gameProxy.board);
  gameProxy.board = state.board;
  gameProxy.resolved = state.resolved;
}
//
import { Audios } from '../../assets';
import { PlaySound } from '../../utils/Utils';
import { gameProxy } from '../../vo/GameProxy';
import LB, { IState } from '../../vo/LB';
import { playerProxy } from '../../vo/PlayerProxy';
