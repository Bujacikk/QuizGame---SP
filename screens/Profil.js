import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#637DDA',
    },
    pressable: {
        backgroundColor: '#C4C4C4',
        width: '80%',
        height: '10%',
        borderColor: "black",
        borderWidth: 4,
        marginBottom: 10,
        borderRadius: 10
    },
    centerText: {
      textAlign: "center",
      top: 5,
      fontSize: 15,
      color: "black"
    },
    logo: {
        width: 300,
        height: 300,
        bottom: 100,
        backgroundColor: "red"
      },
    fotoChange:{
        backgroundColor: '#C4C4C4',
        width: '50%',
        height: '5%',
        borderColor: "black",
        borderWidth: 4,
        bottom: 80,
        borderRadius: 10
    }
});

const Profil = ({navigation}) => {
        
let image = require("../images/quiz.png");

    return (
        <View style={styles.container}>
            <View style={styles.logo}>

            </View>
            <View style={styles.fotoChange}>
                <Pressable onPress={()=> console.log("Ahoj")}>
                    <Text style={styles.centerText}> Zmenit foto</Text>
                </Pressable>
            </View>
            <View style={styles.pressable}>
                    <Text> Meno</Text>
            </View>
            <View style={styles.pressable}>
                    <Text> eMail</Text>
            </View>
        </View>
    );
}

export default Profil