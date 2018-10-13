import { FirestoreInitializeCommand } from './FirestoreInitializeCommand';
import { PlayerInitializeCommand } from './player/PlayerInitializeCommand';

export function StartupCommand(): void {
  FirestoreInitializeCommand();
  PlayerInitializeCommand();
}
//
