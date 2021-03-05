import fire from 'firebase/app';
import 'firebase/auth';
import 'firebase/remote-config';

export const app = fire.initializeApp(
    {
        apiKey: "AIzaSyABXt9g28gk8pBMN_sSRT_ax9xlGmUIGEY",
        authDomain: "prueba-waco.firebaseapp.com",
        projectId: "prueba-waco",
        storageBucket: "prueba-waco.appspot.com",
        messagingSenderId: "834488971922",
        appId: "1:834488971922:web:c28f3121a428a74566ec4b"
      }
);

export const googleAuthProvider = new fire.auth.GoogleAuthProvider();