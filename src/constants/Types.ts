import { PlayerType, SkillType } from './Collections';
declare global {
  // tslint:disable-next-line
  interface Window {
    TTT: IGame;
  }
}
//
interface IGame extends PIXI.Application {
  config: IGameConfig;
  sceneManager: ISceneManager;
}
//
interface IScene {
  create: () => void;
  destroy: () => void;
  wake: () => void;
  sleep: () => void;
}
//
interface IVO {
  observers: any[];
  removeObserver: (observer: any) => void;
  registerObserver: (observer: any) => void;
}
//
interface ISceneManager {
  add: (key: string, scene: any) => void;
  start: (key: string) => void;
  destroy: (key: string) => void;
  wake: (key: string) => void;
  sleep: (key: string) => void;
}
//
interface IGameConfig {
  width: number;
  height: number;
  backgroundColor?: number;
  forceCanvas?: boolean;
  roundPixels?: boolean;
  autoResize?: boolean;
  transparent?: boolean;
}
//
interface IViewProxy extends IVO {
  popup: IPopupProxy;
}

interface IPopupProxy extends IVO {
  queue: any[];
}
//
interface IPlayerProxy extends IVO {
  name: string;
  id: string;
  skill: SkillType;
  gamesPlayed: number;
  rating: number;
  player: PlayerType;
  gameSize: number;
  soundState: number;
  musicState: number;
  getSavableData: () => IStoredPlayerData;
  sync: (data: IStoredPlayerData) => void;
}
//
interface IStoredPlayerData {
  name: string;
  id: string;
  skill: SkillType;
  gamesPlayed: number;
  rating: number;
  player: PlayerType;
  gameSize: number;
  soundState: string;
  musicState: string;
}
//
interface IGameProxy extends IVO {
  difficulty: number;
  board: number[];
  resolved: boolean;
  size: number;
}
//

export {
  IGame,
  IScene,
  IGameConfig,
  ISceneManager,
  IVO,
  IViewProxy,
  IPopupProxy,
  IPlayerProxy,
  IStoredPlayerData,
  IGameProxy,
};
