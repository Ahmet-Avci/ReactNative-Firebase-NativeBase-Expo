import * as firebase from "firebase";

export function InitializeFireBaseDb() {
    const firebaseConfig = {
        apiKey: "Axxxxxs",
        authDomain: "kxxxxxm",
        databaseURL: "hxxxxxm",
        storageBucket: "kxxxxxm",
        projectId: "kxxxxxd"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    return firebase;
}
