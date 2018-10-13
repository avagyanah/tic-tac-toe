import { CompleteCallback, PlayOptions } from 'pixi-sound';
import { PlayerType, SkillType, SwitcherState } from './Collections';
declare global {
  // tslint:disable-next-line
  interface Window {
    TTT: IGame;
  }
}
//
export interface IGame extends PIXI.Application {
  config: IGameConfig;
  sceneManager: ISceneManager;
}
//
export interface IScene {
  create: () => void;
  destroy: () => void;
  wake: () => void;
  sleep: () => void;
}
//
export interface IVO {
  observers: any[];
  removeObserver: (observer: any) => void;
  registerObserver: (observer: any) => void;
}
//
export interface ISceneManager {
  add: (key: string, scene: any) => void;
  start: (key: string) => void;
  destroy: (key: string) => void;
  wake: (key: string) => void;
  sleep: (key: string) => void;
}
//
export interface IGameConfig {
  width: number;
  height: number;
  backgroundColor?: number;
  forceCanvas?: boolean;
  roundPixels?: boolean;
  autoResize?: boolean;
  transparent?: boolean;
}
//
export interface IViewProxy extends IVO {
  popup: IPopupProxy;
}

export interface IPopupProxy extends IVO {
  queue: any[];
}
//
export interface IPlayerProxy extends IVO {
  user: IUserVO;
  settings: ISettingsVO;
  gamesPlayed: number;
  syncIDs: string[];
  getSavableData: () => IStoredPlayerData;
  sync: (data: IStoredPlayerData) => void;
}
//
export interface IUserVO extends IVO {
  id: string;
  name: string;
  rating: number;
  skill: SkillType;
  timescale: number;
}
export interface ISettingsVO extends IVO {
  player: PlayerType;
  gameSize: number;
  soundState: SwitcherState;
  musicState: SwitcherState;
}
export interface IStoredPlayerData {
  user: IUserVO;
  settings: ISettingsVO;
  syncIDs: string[];
  gamesPlayed: number;
}
//
export interface IGameProxy extends IVO {
  difficulty: number;
  board: number[];
  resolved: boolean;
  size: number;
}
//
export interface IAudioConfig {
  alias: string;
  options?: string | PlayOptions | CompleteCallback;
}
//
