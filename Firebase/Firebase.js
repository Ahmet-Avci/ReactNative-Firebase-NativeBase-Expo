import * as firebase from "firebase";

export function InitializeFireBaseDb() {
    const firebaseConfig = {
        apiKey: "AIzaSyCvQBawUj7dTHHfhjxIHFZompPa04VYhPs",
        authDomain: "kpss-6e1ed.firebaseapp.com",
        databaseURL: "https://kpss-6e1ed.firebaseio.com",
        storageBucket: "kpss-6e1ed.appspot.com",
        projectId: "kpss-6e1ed"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    return firebase;
}
