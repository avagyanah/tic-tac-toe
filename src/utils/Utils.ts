import { CompleteCallback, PlayOptions } from 'pixi-sound';
import store from 'store';
import { SwitcherState } from '../constants/Collections';
import { VO } from '../vo/VO';

function PlaySound(
  alias: string,
  options?: string | PlayOptions | CompleteCallback,
): void {
  if (store.get('tic_tac_toe_playerData').soundState === SwitcherState.OFF) {
    return;
  }
  PIXI.sound.play(alias, options);
}
function PlayMusic(
  alias: string,
  options?: string | PlayOptions | CompleteCallback,
): void {
  if (store.get('tic_tac_toe_playerData').musicState === SwitcherState.OFF) {
    return;
  }
  PIXI.sound.play(alias, options);
}

function generateProxy(object: any): any {
  Object.assign(object, VO);
  Object.defineProperty(object, 'observers', {
    value: [],
  });
  return new Proxy(object, {
    set(
      target: any,
      property: string | number | symbol,
      value: any,
      receiver: any,
    ): boolean {
      target[property] = value;
      object.observers.forEach((observer: any) => {
        observer.updateView(property, target[property]);
      });
      return true;
    },
  });
}

function getEnumKeys(e: any): any[] {
  return Object.keys(e).filter((k: any) => typeof e[k as any] === 'number');
}

function getEnumValues(e: any): any[] {
  return getEnumKeys(e).map((k: any) => e[k as any]);
}

function getEnumKey(e: any, key: any): string {
  return getEnumKeys(e).find((k: any) => e[k as any] === key);
}

function getEnumValue(e: any, value: any): any {
  return getEnumValues(e).find((v: any) => e[v as any] === value);
}

function arrayToLowercase(arr: any[]): any[] {
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  return arr;
}

function arrayToUppercase(arr: any[]): any[] {
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }
  return arr;
}

export {
  PlaySound,
  PlayMusic,
  generateProxy,
  getEnumValues,
  getEnumKeys,
  getEnumKey,
  getEnumValue,
  arrayToLowercase,
  arrayToUppercase,
};
