//
// tslint:disable-next-line
import firebase from 'firebase/app';
import { FIRESTORE_PLAYERS_COLLECTION_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { playerProxy } from '../../../vo/PlayerProxy';

export async function PlayerSyncRemoteBySyncIDsCommand(): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const ids: string[] = playerProxy.syncIDs;
    if (!ids.length) {
      resolve();
      return;
    }
    for (const id of ids) {
      firebase
        .firestore()
        .collection(FIRESTORE_PLAYERS_COLLECTION_NAME)
        .where('syncIDs', 'array-contains', id)
        .get()
        .then((docRef: any) => {
          if (!docRef.size) {
            resolve(null);
          } else {
            const data: IStoredPlayerData = docRef.docs[0].data();
            playerProxy.sync(data);
            resolve(data);
            return;
          }
        })
        .catch((error: any) => {
          console.log('Error getting documents: ', error);
        });
    }
  });
}
