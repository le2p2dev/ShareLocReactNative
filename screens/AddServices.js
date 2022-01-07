import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AddServices({navigation}) {

    const[titre, setTitre] = useState('');
    const[desc, setDesc] = useState('');
    const[pts, setPts] = useState('');

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>Proposition d'un service</Text>
                <StatusBar style="auto" />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Titre"
                    placeholderTextColor="#404040"
                    onChangeText={(titre) => setTitre(titre)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Description du service"
                    placeholderTextColor="#404040"
                    onChangeText={(desc) => setDesc(desc)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Nombre de points"
                    placeholderTextColor="#404040"
                    onChangeText={(pts) => setPts(pts)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.logintext}>Proposer</Text>
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
