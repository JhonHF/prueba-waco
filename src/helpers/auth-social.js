import { app } from "../firebase/firebase-config";

export const socialLogin = async (provider, setError)=>{
    await app
    .auth()
    .signInWithPopup(provider)
    .then(result => {
        return result
    })
    .catch(error => {
        setError(error.message)
    });
}
