import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HouseShare({ name, description, numberPersons }){
    return (
        <View style={[styles.card, styles.body]}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.txt}>{description}</Text>
            <Text style={styles.footer}>{numberPersons} {numberPersons > 1 ? 'collocataires' : 'collocataire'}</Text>
        </View>
    );
};

const cardBorderRadius = 12;

const styles = StyleSheet.create({
    card: {
        marginBottom: 24,
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0,0,0,.125)',
        borderRadius: cardBorderRadius,
    },
    body: {
        padding: 16,
    },
    title: {
        marginBottom: 8,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24,
    },
    txt: {
        marginTop: 0,
        marginBottom: 16,
        fontSize: 16,
        lineHeight: 20,
    },
    footer: {
        color: '#6c757d',
        textAlign: 'right',
    }
});
