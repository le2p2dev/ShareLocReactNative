import React, { useEffect, useState, createContext, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import checkStatus from './checkStatus';
import urlPrefix from './urlPrefix';

const AuthentificationContext = createContext();

export const AuthentificationProvider = ({ children }) => {
    const [login, setLogin] = useState('cvb');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        // On fait une pause 2 sec pour simuler un chargement lent
        new Promise(resolve => setTimeout(resolve, 2500));
        const token = SecureStore.getItemAsync('token');
        fetch(`${urlPrefix}/whoami`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(checkStatus)
            .then(res => res.json())
            .then(login => {
                setLogin(login);
                setIsLoading(false);
                isSignedIn(true);
            })
            .catch(() => {
                setLogin(null);
                setIsLoading(false);
            });
    }, []);

    const signUp = (credentials) => {
        return fetch(`${urlPrefix}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
            .then(checkStatus)
            .then(() => {
                navigation.navigate('Signin');
            });
    };

    const signIn = (credentials) => {
        return fetch(`${urlPrefix}/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
            .then(checkStatus)
            .then(res => res.json())
            .then(data => {
                SecureStore.setItemAsync('token', data.token);
                setLogin(data.login);
                setIsSignedIn(true);
            });
    };

    const signOut = () => {
        SecureStore.deleteItemAsync('token');
        setLogin(null);
        setIsSignedIn(false);
    };

    return (
        <AuthentificationContext.Provider value={{ login, isLoading, isSignedIn, signUp, signIn, signOut }}>
            {children}
        </AuthentificationContext.Provider>
    )
};

export const useAuthentification = () => useContext(AuthentificationContext);
