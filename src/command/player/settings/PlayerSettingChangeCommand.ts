export function PlayerSettingChangeCommand(
  collection: any[],
  property: string,
  increment: number,
): void {
  const values: number[] = collection;
  const currentIndex: number = values.indexOf(
    (playerProxy.settings as any)[property],
  );
  const index: number = currentIndex + increment;
  if (values[index]) {
    (playerProxy.settings as any)[property] = values[index];
    PlayerSaveCommand();
  }
}
//
import { playerProxy } from '../../../vo/PlayerProxy';
import { PlayerSaveCommand } from '../save/PlayerSaveCommand';
