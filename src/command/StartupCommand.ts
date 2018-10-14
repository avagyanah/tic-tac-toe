export async function StartupCommand(): Promise<void> {
  FirestoreInitializeCommand();
  PlayerInitializeCommand();
}
//
import { FirestoreInitializeCommand } from './FirestoreInitializeCommand';
import { PlayerInitializeCommand } from './player/initialize/PlayerInitializeCommand';
