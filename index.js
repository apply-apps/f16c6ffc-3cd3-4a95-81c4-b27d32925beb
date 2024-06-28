// Filename: index.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';
import * as Speech from 'expo-speech';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextLetter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    const pronounceLetter = () => {
        Speech.speak(letters[currentIndex]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read</Text>
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{letters[currentIndex]}</Text>
            </View>
            <Button title="Next Letter" onPress={showNextLetter} />
            <Button title="Pronounce Letter" onPress={pronounceLetter} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8DC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    letterContainer: {
        marginVertical: 40,
        padding: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
});