export function FirestoreInitializeCommand(): void {
  firebase.initializeApp({
    apiKey: 'AIzaSyAKi-NpAFs_nQtBGO8fRtzr8BK7VsegAHQ',
    authDomain: 'tic-tac-toe-f54f7.firebaseapp.com',
    projectId: 'tic-tac-toe-f54f7',
  });
  firebase.firestore().settings({
    timestampsInSnapshots: true,
  });
}
//
// tslint:disable-next-line
import firebase from 'firebase/app';
