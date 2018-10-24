export async function PlayerSubscribeSnapshotCommand(): Promise<void> {
  await firebase
    .firestore()
    .doc(`${FIRESTORE_PLAYERS_COLLECTION_NAME}/${playerProxy.user.id}`)
    .onSnapshot((doc: firebase.firestore.DocumentSnapshot) => {
      if (!doc.exists) {
        return;
      }
      const data: IStoredPlayerData = doc.data() as IStoredPlayerData;
      PlayerSyncCommand(data);
    });
}
//
// tslint:disable-next-line
import firebase from 'firebase/app';
import { FIRESTORE_PLAYERS_COLLECTION_NAME } from '../../../constants/Constants';
import { IStoredPlayerData } from '../../../constants/Types';
import { playerProxy } from '../../../vo/PlayerProxy';
import { PlayerSyncCommand } from './PlayerSyncCommand';
