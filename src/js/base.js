import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4muk5XFOpwGZtBofF_K0CNEYUSvsbLUs",
    authDomain: "the-closet-sloanisa.firebaseapp.com",
    databaseURL: "https://the-closet-sloanisa.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;