import * as firebase from "firebase";

export function InitializeFireBaseDb() {
    const firebaseConfig = {
        apiKey: "AIzaSyCvQBawUj7dTHHfhjxIHFZompPa04VYhPs",
        authDomain: "https://kpss-6e1ed.firebaseio.com",
        databaseURL: "https://kpss-6e1ed.firebaseio.com",
        storageBucket: "kpss-6e1ed.appspot.com"
    };

    firebase.initializeApp(firebaseConfig);

    return firebase;
}
