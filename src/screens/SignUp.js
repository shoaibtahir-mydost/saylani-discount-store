import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInput from '../components/TextInput'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Saylani Welfare</Text>
            <Text style={styles.h2}>Online Discount Store</Text>
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#61B846',
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: 25
    },
    h2: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 14,
        marginTop: 8,

        color: '#024F9D'
    }
})