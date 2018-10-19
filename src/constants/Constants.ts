const PRELOAD_SCENE: string = 'PreloadScene';
const BACKGROUND_SCENE: string = 'BackgroundScene';
const GAME_SCENE: string = 'GameScene';
const UI_SCENE: string = 'UIScene';
const LOBBY_SCENE: string = 'LobbyScene';
const POPUP_SCENE: string = 'PopupScene';
const GAME_WIDTH: number = gameConfig.width;
const GAME_HEIGHT: number = gameConfig.height;
const CENTER: PIXI.Point = new PIXI.Point(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.5);
const FIRESTORE_PLAYERS_COLLECTION_NAME: string = 'players';
const STORAGE_PLAYER_NAME: string = 'tic_tac_toe_playerData';

//
import { gameConfig } from './GameConfig';
//
export {
  PRELOAD_SCENE,
  BACKGROUND_SCENE,
  GAME_SCENE,
  UI_SCENE,
  LOBBY_SCENE,
  POPUP_SCENE,
  GAME_WIDTH,
  GAME_HEIGHT,
  CENTER,
  FIRESTORE_PLAYERS_COLLECTION_NAME,
  STORAGE_PLAYER_NAME,
};
