export default class SceneManager implements ISceneManager {
  private scenesMap: Map<string, IScene> = new Map();

  constructor(private game: IGame) {}

  public add(key: string, scene: new (game: IGame) => IScene): void {
    this.scenesMap.set(key, new scene(this.game));
  }

  public start(key: string): void {
    this.scenesMap.get(key).create();
  }

  public destroy(key: string): void {
    let scene: IScene = this.scenesMap.get(key);
    this.scenesMap.delete(key);
    scene.destroy();
    scene = null;
  }

  public wake(key: string): void {
    this.scenesMap.get(key).wake();
  }

  public sleep(key: string): void {
    this.scenesMap.get(key).sleep();
  }
}
//
import { IGame, IScene, ISceneManager } from '../../constants/Types';
