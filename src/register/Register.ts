const STARTUP: string = 'Startup';

export default class Register {
  public static emit(_name: string, ..._args: any[]): void {
    const command: any = Register.eventsMap.get(_name);
    if (!command) {
      console.log(
        `%c ${_name}  |  ${_args}`,
        `background: #3a702a; color: #ffffff; font-size: 11.5px; font-family: "Arial"; font-weight: bold`,
      );
      return;
    }
    console.log(
      `%c ${_name}${_args.length ? `  |  ${_args}` : ''} `,
      `background: #685e1c; color: #ffffff; font-size: 13.5px; font-family: "Arial"; font-weight: bold`,
    );
    if (Array.isArray(command)) {
      command.forEach((obj: any) => {
        obj(..._args);
      });
    } else {
      command(..._args);
    }
  }

  private static _instance: Register;
  private static eventsMap: Map<string, any | any[]> = new Map();

  public static get Instance(): Register {
    return this._instance || (this._instance = new Register());
  }

  public init(): void {
    this.registerCommands();
    Register.emit(STARTUP);
  }

  private registerCommands(): void {
    Register.eventsMap.set(STARTUP, StartupCommand);
    Register.eventsMap.set(
      PRELOAD_SCENE_LOAD_PROGRESS,
      PreloadSceneLoadProgressCommand,
    );
    Register.eventsMap.set(
      PRELOAD_SCENE_LOAD_COMPLETE,
      PreloadSceneLoadCompleteCommand,
    );
    Register.eventsMap.set(BACKGROUND_SCENE_START, BackgroundSceneStartCommand);
    Register.eventsMap.set(LOBBY_SCENE_START, LobbySceneStartCommand);
    Register.eventsMap.set(
      UI_SCENE_SETTING_CLICK,
      UISettingsButtonClickCommand,
    );
    Register.eventsMap.set(UI_SCENE_FAME_CLICK, UIFameButtonClickCommand);
    Register.eventsMap.set(UI_SCENE_PROFILE_CLICK, UIProfileButtonClickCommand);
    Register.eventsMap.set(LOBBY_SCENE_PLAY_CLICK, LobbyPlayButtonClickCommand);
    Register.eventsMap.set(LOBBY_SCENE_WAKE, LobbyWakeCompleteCommand);
    Register.eventsMap.set(LOBBY_SCENE_SLEEP, LobbySleepCompleteCommand);
    Register.eventsMap.set(GAME_SCENE_START, GameSceneStartCommand);
    Register.eventsMap.set(SQUARE_CLICK, PlayerMoveCommand);
    Register.eventsMap.set(POPUP_HIDE_COMPLETE, PopupHideCompleteCommand);
    Register.eventsMap.set(
      SETTINGS_POPUP_PLAYER_OPTION,
      DefaultPlayerChangeCommand,
    );
    Register.eventsMap.set(
      SETTINGS_POPUP_SOUND_OPTION,
      SoundStateChangeCommand,
    );
    Register.eventsMap.set(
      SETTINGS_POPUP_MUSIC_OPTION,
      MusicStateChangeCommand,
    );
    Register.eventsMap.set(
      SETTINGS_POPUP_SIZE_OPTION,
      DefaultGameSizeChangeCommand,
    );
  }
}
//
import { PlayerMoveCommand } from '../command/game/PlayerMoveCommand';
import { DefaultGameSizeChangeCommand } from '../command/player/DefaultGameSizeChangeCommand';
import { DefaultPlayerChangeCommand } from '../command/player/DefaultPlayerChangeCommand';
import { MusicStateChangeCommand } from '../command/player/MusicStateChangeCommand';
import { SoundStateChangeCommand } from '../command/player/SoundStateChangeCommand';
import { BackgroundSceneStartCommand } from '../command/scenes/background/BackgroundSceneStartCommand';
import { GameSceneStartCommand } from '../command/scenes/game/GameSceneStartCommand';
import { LobbyPlayButtonClickCommand } from '../command/scenes/lobby/LobbyPlayButtonClickCommand';
import { LobbySceneStartCommand } from '../command/scenes/lobby/LobbySceneStartCommand';
import { LobbySleepCompleteCommand } from '../command/scenes/lobby/LobbySleepCompleteCommand';
import { LobbyWakeCompleteCommand } from '../command/scenes/lobby/LobbyWakeCompleteCommand';
import { PopupHideCompleteCommand } from '../command/scenes/popup/PopupHideCompleteCommand';
import { PreloadSceneLoadCompleteCommand } from '../command/scenes/prelaod/PreloadSceneLoadCompleteCommand';
import { PreloadSceneLoadProgressCommand } from '../command/scenes/prelaod/PreloadSceneLoadProgressCommand';
import { UIFameButtonClickCommand } from '../command/scenes/ui/UIFameButtonClickCommand';
import { UIProfileButtonClickCommand } from '../command/scenes/ui/UIProfileButtonClickCommand';
import { UISettingsButtonClickCommand } from '../command/scenes/ui/UISettingsButtonClickCommand';
import { StartupCommand } from '../command/StartupCommand';
import {
  SETTINGS_POPUP_MUSIC_OPTION,
  SETTINGS_POPUP_PLAYER_OPTION,
  SETTINGS_POPUP_SIZE_OPTION,
  SETTINGS_POPUP_SOUND_OPTION,
} from '../view/components/popups/settings/SettingsPopup';
import { SQUARE_CLICK } from '../view/components/Square';
import { BACKGROUND_SCENE_START } from '../view/scenes/BackgroundScene';
import { GAME_SCENE_START } from '../view/scenes/GameScene';
import {
  LOBBY_SCENE_PLAY_CLICK,
  LOBBY_SCENE_SLEEP,
  LOBBY_SCENE_START,
  LOBBY_SCENE_WAKE,
} from '../view/scenes/LobbyScene';
import { POPUP_HIDE_COMPLETE } from '../view/scenes/PopupScene';
import {
  PRELOAD_SCENE_LOAD_COMPLETE,
  PRELOAD_SCENE_LOAD_PROGRESS,
} from '../view/scenes/PreloadScene';
import {
  UI_SCENE_FAME_CLICK,
  UI_SCENE_PROFILE_CLICK,
  UI_SCENE_SETTING_CLICK,
} from '../view/scenes/UIScene';
