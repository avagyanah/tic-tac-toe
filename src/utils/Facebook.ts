const FBInstant: any = window.FBInstant;

export default class Facebook {
  public static async initializeAsync(): Promise<void> {
    await FBInstant.initializeAsync();
  }

  public static getID(): string {
    return FBInstant.player.getID();
  }
}
