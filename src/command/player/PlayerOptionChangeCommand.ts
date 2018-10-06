export function PlayerOptionChangeCommand(
  collection: any[],
  proxy: any,
  property: string,
  increment: number,
): void {
  const values: number[] = collection;
  const currentIndex: number = values.indexOf(proxy[property]);
  const index: number = currentIndex + increment;
  if (values[index]) {
    proxy[property] = values[index];
    PlayerSaveCommand();
  }
}
//
import { PlayerSaveCommand } from './PlayerSaveCommand';
