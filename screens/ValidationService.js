import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Service from "../components/Service";
import QuestionBoolean from "../components/QuestionBoolean";

export default function ValidationService({navigation}) {

    const[titre, setTitre] = useState('');
    const[desc, setDesc] = useState('');
    const[nbpts, setNbpts] = useState('');
    const [answer, setAnswer] = useState(null);

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>Proposition d'un service</Text>
                <StatusBar style="auto" />
            </View>

            <Service titre={"Faire le ménage"} description={"Doit faire le ménage dans toute la maison"} nbpoints={30}/>

            <QuestionBoolean question="Acceptez vous ce service ?" answer={answer} setAnswer={setAnswer}/>

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
});
