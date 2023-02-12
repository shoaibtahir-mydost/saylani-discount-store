import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Button = (props) => {
    const { btnText, navigateTo } = props

    const navigation = useNavigation();

    const navigateToScreen = () => {
        navigation.navigate(navigateTo)
    }

    return (
        <View>
            <TouchableOpacity style={styles.touch} onPress={() => navigateToScreen()}>
                <Text style={styles.button}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    touch: {
        backgroundColor: '#61B846',
        padding: 5,
        borderRadius: 8,
        marginTop: 120

    },
    button: {
        textAlign: "center",
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 0.5,
        paddingHorizontal: 8
    }
})