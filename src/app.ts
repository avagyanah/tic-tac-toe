export class TTTGame extends PIXI.Application implements IGame {
  public config: IGameConfig = gameConfig;
  public sceneManager: ISceneManager;
  public scaleManager: ScaleManager;

  constructor(config: IGameConfig) {
    super(config);
    this.config = config;
    //
    Register.Instance.init();
    //
    this.prepareView();
    this.prepareScenes();
  }

  private prepareScenes(): void {
    this.sceneManager = new SceneManager(this);
    this.sceneManager.add(PRELOAD_SCENE, PreloadScene);
    this.sceneManager.add(BACKGROUND_SCENE, BackgroundScene);
    this.sceneManager.add(GAME_SCENE, GameScene);
    this.sceneManager.add(UI_SCENE, UIScene);
    this.sceneManager.add(LOBBY_SCENE, LobbyScene);
    this.sceneManager.add(POPUP_SCENE, PopupScene);
    this.sceneManager.start(PRELOAD_SCENE);
  }

  private prepareView(): void {
    this.scaleManager = new ScaleManager(
      this.view,
      this.config.width,
      this.config.height,
    );
    document.body.appendChild(this.view);
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    window.TTT = new TTTGame(gameConfig);
  }
};

//
// tslint:disable-next-line
/// <reference path="../typings/pixi.js.d.ts" />
import * as PIXI from 'pixi.js';
import {
  BACKGROUND_SCENE,
  GAME_SCENE,
  LOBBY_SCENE,
  POPUP_SCENE,
  PRELOAD_SCENE,
  UI_SCENE,
} from './constants/Constants';
import { gameConfig } from './constants/GameConfig';
import { IGame, IGameConfig, ISceneManager } from './constants/Types';
import Register from './register/Register';
import ScaleManager from './utils/ScaleManager';
import { BackgroundScene } from './view/scenes/BackgroundScene';
import { GameScene } from './view/scenes/GameScene';
import { LobbyScene } from './view/scenes/LobbyScene';
import { PopupScene } from './view/scenes/PopupScene';
import { PreloadScene } from './view/scenes/PreloadScene';
import SceneManager from './view/scenes/SceneManager';
import { UIScene } from './view/scenes/UIScene';
