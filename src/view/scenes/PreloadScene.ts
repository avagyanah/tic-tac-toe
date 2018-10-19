export const PRELOAD_SCENE_LOAD_COMPLETE: string = 'PreloadSceneLoadComplete';
export const PRELOAD_SCENE_LOAD_PROGRESS: string = 'PreloadSceneLoadProgress';
export const PRELOAD_SCENE_LOAD_START: string = 'PreloadSceneLoadStart';
export let GENERAL_ASSETS: PIXI.loaders.TextureDictionary = null;
//
export class PreloadScene extends BaseScene {
  private progress: ProgressBar;

  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    this.addChild((this.progress = new ProgressBar()));
    const logo: Logo = new Logo();
    logo.position.set(CENTER.x, GAME_HEIGHT * 0.3);
    this.addChild(logo);
    this.startInitialAssetsLoad();
    //
    super.create();
  }

  private startInitialAssetsLoad(): void {
    const loader: PIXI.loaders.Loader = PIXI.loader;
    loader.add('general', 'assets/atlases/general.json');
    loader.add(Images.ProfileIcon.Name, Images.ProfileIcon.FileURL);
    //
    loader.add(Audios.Sounds.ClickSound.Name, Audios.Sounds.ClickSound.Mp3URL);
    loader.add(
      Audios.Sounds.WelcomeSound.Name,
      Audios.Sounds.WelcomeSound.Mp3URL,
    );
    //
    loader.load();
    loader.onLoad.add(this.onFileLoadComplete, this);
    loader.onComplete.add(this.onInitialAssetsLoadComplete, this);
  }

  private onFileLoadComplete(
    loader: PIXI.loaders.Loader,
    resource: PIXI.loaders.Resource,
  ): void {
    //
    this.progress.update(loader.progress);
    const total: number = Math.round(100 / resource.progressChunk);
    const progress: number = Math.round(loader.progress);
    Register.emit(PRELOAD_SCENE_LOAD_PROGRESS, total, progress);
    loadProgressInfo(resource.url, Math.round(total / (100 / progress)), total);
  }

  private onInitialAssetsLoadComplete(): void {
    this.initializeAtlasKeys();
    //
    Register.emit(PRELOAD_SCENE_LOAD_COMPLETE);
  }

  private initializeAtlasKeys(): void {
    GENERAL_ASSETS = PIXI.loader.resources[Atlases.General.Atlas.Name].textures;
  }
}
//
import 'pixi-sound';
import { Atlases, Audios, Images } from '../../assets';
import { CENTER, GAME_HEIGHT } from '../../constants/Constants';
import { IGame } from '../../constants/Types';
import Register from '../../register/Register';
import { loadProgressInfo } from '../../utils/LoadingInfo';
import Logo from '../components/Logo';
import ProgressBar from '../components/ProgressBar';
import BaseScene from './BaseScene';
