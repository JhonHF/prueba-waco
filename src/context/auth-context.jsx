import React, { useEffect, useState } from "react";
import {app} from "../firebase-config";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            console.log(user, 'auth')
            setUsuario(user);
            setShowChild(true);
        });
    }, []);

    if (!showChild) {
        return null;
    } else {
        return (
            <Auth.Provider
                value={{
                    usuario,
                    setUsuario
                }}
            >
                {children}
            </Auth.Provider>
        );
    }
};