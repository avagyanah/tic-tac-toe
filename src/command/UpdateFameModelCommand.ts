export async function UpdateFameModelCommand(): Promise<void> {
  const users: any[] = [];
  firebase
    .firestore()
    .collection(FIRESTORE_PLAYERS_COLLECTION_NAME)
    .orderBy('user.rating', 'desc')
    .limit(10)
    .get()
    .then((docs: any) => {
      docs.forEach((doc: any) => {
        users.push(doc.data().user);
      });
      fameProxy.users = users;
    });
}
//
// tslint:disable-next-line
import firebase from 'firebase/app';
import { FIRESTORE_PLAYERS_COLLECTION_NAME } from '../constants/Constants';
import { fameProxy } from '../vo/FameProxy';
