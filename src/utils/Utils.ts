// tslint:disable-next-line
import firebase from 'firebase/app';
// tslint:disable-next-line
import 'firebase/firestore';
import store from 'store';
import { SwitcherState } from '../constants/Collections';
import { STORAGE_PLAYER_NAME } from '../constants/Constants';
import { IAudioConfig, IStoredPlayerData } from '../constants/Types';
import { VO } from '../vo/VO';

function playSound(audioData: IAudioConfig): void {
  try {
    if (
      store.get(`${STORAGE_PLAYER_NAME}`).settings.soundState ===
      SwitcherState.OFF
    ) {
      return;
    }
    playAudio(audioData);
  } catch (error) {}
}
function playMusic(audioData: IAudioConfig): void {
  try {
    if (
      store.get(`${STORAGE_PLAYER_NAME}`).settings.musicState ===
      SwitcherState.OFF
    ) {
      return;
    }
    playAudio(audioData);
  } catch (error) {
    console.warn(error);
  }
}
function playAudio(audioData: IAudioConfig): void {
  PIXI.sound.play(audioData.alias, audioData.options);
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
        observer.updateView(property, target[property], receiver);
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

function setLocalStorageData(docID: string, data: any): any {
  return store.set(docID, serialize(data));
}
function getLocalStorageData(docID: string): any {
  return store.get(docID);
}
function deleteLocalStorageData(docID: string): void {
  store.remove(docID);
}

async function getFirebaseDataAsync(docId: string): Promise<IStoredPlayerData> {
  return firebase
    .firestore()
    .doc(docId)
    .get()
    .then((doc: any) => {
      return doc.data();
    })
    .catch((err: any) => {
      console.warn(err);
    });
}
async function setFirebaseDataAsync(
  docId: string,
  data: IStoredPlayerData,
): Promise<void> {
  return firebase
    .firestore()
    .doc(docId)
    .set(serialize(data))
    .then(() => {
      // ...
    })
    .catch((err: any) => {
      console.warn(err);
    });
}
async function deleteFirebaseDataAsync(docId: string): Promise<void> {
  firebase
    .firestore()
    .doc(docId)
    .delete()
    .then((doc: any) => {
      // ...
    })
    .catch((err: any) => {
      console.warn(err);
    });
}

function serialize(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

export { playSound, playMusic, generateProxy, getEnumValues, getEnumKeys, getEnumKey, getEnumValue, arrayToLowercase, arrayToUppercase, setFirebaseDataAsync, deleteFirebaseDataAsync, getFirebaseDataAsync, serialize, setLocalStorageData, getLocalStorageData, deleteLocalStorageData, };

