import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function QuestionBoolean({question, setAnswer}) {

    //<QuestionBoolean question="TEXT" answer={answer} setAnswer={setAnswer}/>
    //appelle de composant à faire dans le parent.
    //const [answer, setAnswer] = useState(null);
    //state à créer.

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{question}</Text>

            <View style={styles.horizon}>

                <TouchableOpacity style={[styles.button_vote, styles.button_vote_oui]} onPress={() => setAnswer(true)}>
                    <Text style={styles.button_oui}>OUI</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button_vote, styles.button_vote_non]} onPress={() => setAnswer(false)}>
                    <Text style={styles.button_non}>NON</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aaf0d1',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
    },
    question: {
        color: '#404040',
        fontSize: 25,
    },
    horizon: {
        flexDirection: "row",
    },
    button_vote: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
        justifyContent: "space-around",
    },
    button_vote_oui: {
        backgroundColor: "green",
        borderColor: "green",
        marginRight: 5,
    },
    button_vote_non: {
        backgroundColor: "red",
        borderColor: "red",
        marginLeft: 5,
    },
    button_oui: {
        color: "white",
        paddingHorizontal: 4,
    },
    button_non: {
        color: "white",
    }
});
