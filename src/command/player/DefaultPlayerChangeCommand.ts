import { playerProxy } from '../../vo/PlayerProxy';

export function DefaultPlayerChangeCommand(value: number): void {
  if (playerProxy.player !== value) {
    playerProxy.player = value;
  }
}
