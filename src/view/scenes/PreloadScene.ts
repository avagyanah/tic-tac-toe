export const PRELOAD_SCENE_LOAD_COMPLETE: string = 'PreloadSceneLoadComplete';
export const PRELOAD_SCENE_LOAD_PROGRESS: string = 'PreloadSceneLoadProgress';
export const PRELOAD_SCENE_LOAD_START: string = 'PreloadSceneLoadStart';
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
    loader.add(Images.Bg.Name, Images.Bg.FileURL);
    loader.add(Images.PopupBg.Name, Images.PopupBg.FileURL);
    loader.add(Images.Square.Name, Images.Square.FileURL);
    loader.add(Images.O.Name, Images.O.FileURL);
    loader.add(Images.X.Name, Images.X.FileURL);
    loader.add(Images.Close.Name, Images.Close.FileURL);
    loader.add(Images.Arrow.Name, Images.Arrow.FileURL);
    loader.add(Images.TransparentPixel.Name, Images.TransparentPixel.FileURL);
    loader.add(Images.SettingsIcon.Name, Images.SettingsIcon.FileURL);
    loader.add(Images.FameIcon.Name, Images.FameIcon.FileURL);
    loader.add(Images.ProfileIcon.Name, Images.ProfileIcon.FileURL);
    loader.add(
      Audios.Sounds.WelcomeSound.Name,
      Audios.Sounds.WelcomeSound.Mp3URL,
    );
    loader.add(Audios.Sounds.ClickSound.Name, Audios.Sounds.ClickSound.Mp3URL);
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
    Register.emit(PRELOAD_SCENE_LOAD_COMPLETE);
  }
}
//
import 'pixi-sound';
import { Audios, Images } from '../../assets';
import { CENTER, GAME_HEIGHT } from '../../constants/Constants';
import { IGame } from '../../constants/Types';
import Register from '../../register/Register';
import { loadProgressInfo } from '../../utils/LoadingInfo';
import Logo from '../components/Logo';
import ProgressBar from '../components/ProgressBar';
import BaseScene from './BaseScene';
