import {StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';

export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>ShareLoc</Text>
                <StatusBar style="auto"/>
            </View>

            <View>
                <Text style={styles.titlesmall}>Connexion</Text>
                <StatusBar style="auto"/>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#404040"
                    onChangeText={(email) => setEmail(email)}
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

            <TouchableOpacity style={styles.switch_button}>
                <Text style={styles.switchBtntext}>Mot de passe oublié ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.logintext}>CONNEXION</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.switch_button}>
                <Text style={styles.switchBtntext}>Créer un compte ?</Text>
            </TouchableOpacity>
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
        height: 40,
        padding: 10,
    },

    loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#746AF9",
    },

    switchBtntext: {
        color: "#FFF",
    },

    logintext: {
      color: "#FFF",
    },
});