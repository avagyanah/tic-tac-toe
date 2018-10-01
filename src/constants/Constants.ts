export const PRELOAD_SCENE: string = 'PreloadScene';
export const BACKGROUND_SCENE: string = 'BackgroundScene';
export const GAME_SCENE: string = 'GameScene';
export const UI_SCENE: string = 'UIScene';
export const LOBBY_SCENE: string = 'LobbyScene';
export const POPUP_SCENE: string = 'PopupScene';
export const GAME_WIDTH: number = gameConfig.width;
export const GAME_HEIGHT: number = gameConfig.height;
export const CENTER: PIXI.Point = new PIXI.Point(
  GAME_WIDTH * 0.5,
  GAME_HEIGHT * 0.5,
);
//
import { gameConfig } from './GameConfig';
