import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from '../components/Button'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.stretch}
                source={require('../../assets/saylaniLogo.png')}
            />
            <Text style={styles.h1}>Saylani Welfare</Text>
            <Text style={styles.h2}>Online Discount Store</Text>
            <View>
                <Button btnText={'Get Started'} navigateTo={'SignUp'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    stretch: {
        width: 200,
        height: 170,
        resizeMode: 'stretch',
        justifyContent: 'center'
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


export default SplashScreen