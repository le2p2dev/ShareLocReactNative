import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { useAuthentification } from '../utilities/authentification';

export default function SignupScreen({ navigation }) {
    const { isLoading, signUp } = useAuthentification();

    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
		signUp({ lastname, firstname, login, password })
			.catch(err => {
                setLastname('');
                setFirstname('');
                setLogin('');
                setPassword('');
				setMessage(err.message);
			});
	};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ShareLoc</Text>

            <Text style={styles.titlesmall}>Inscription</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Nom"
                    placeholderTextColor="#404040"
                    onChangeText={(lastname) => setLastname(lastname)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Prénom"
                    placeholderTextColor="#404040"
                    onChangeText={(firstname) => setFirstname(firstname)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Login"
                    placeholderTextColor="#404040"
                    onChangeText={(login) => setLogin(login)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Mot de passe"
                    placeholderTextColor="#404040"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.switch_button} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.switchBtntext}>Déjà un compte ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit({ lastname, firstname, login, password })}>
                <Text style={styles.logintext}>Inscription</Text>
            </TouchableOpacity>

            <Text>{isLoading ? 'Vérification de l\'authentification...' : ''}</Text>
            <Text style={{ color: 'red' }}>{message}</Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaf0d1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#404040',
        fontSize: 25,
        fontFamily: 'Georama Black',
        marginBottom: 30,
    },
    titlesmall: {
        color: '#404040',
        fontSize: 18,
        fontFamily: 'Georama Black',
        marginBottom: 20,
    },
    inputView: {
        backgroundColor: "#FFF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width: "100%",
        textAlign: "center",
    },
    switch_button: {
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: "#746AF9",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },

    loginBtn: {
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#746AF9",
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginBottom: 10,
    },

    switchBtntext: {
        color: "#FFF",
    },

    logintext: {
        color: "#FFF",
    },
});