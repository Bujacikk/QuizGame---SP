import React from 'react';
import {Text, View, StyleSheet, Pressable, Image, BackHandler} from 'react-native';

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
      fontSize: 50,
      color: "black",
    },
    logo: {
        width: 300,
        height: 300,
        bottom: 50
      },
});

const Details = ({navigation}) => {
        
let image = require("../images/quiz.png");

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={image}/>
            </View>
            <View style={styles.pressable }>
                <Pressable onPress={()=> navigation.navigate('Game')}>
                    <Text style={styles.centerText}>Hraj</Text>
                </Pressable>
            </View>
            <View style={styles.pressable}>   
                <Pressable onPress={()=> navigation.navigate('Profil')}>
                    <Text style={styles.centerText}>Profil</Text>
                </Pressable>
            </View>
            <View style={styles.pressable}>
                <Pressable  onPress={() => BackHandler.exitApp()}>
                    <Text style={styles.centerText}>Koniec</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Details