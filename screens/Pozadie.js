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
        borderWidth: 2
    },
    centerText: {
        textAlign: "center",
        top: 5,
        fontSize: 50,
        color: "black"
      },
      logo: {
        width: 300,
        height: 300,
        bottom: 50
      },
});

const Pozadie = ({navigation}) => {
    let image = require("../images/quiz.png");
    return (
        <View style={styles.container}>
            <View>
                 <Image style={styles.logo} source={image}/>
            </View>
            <View style={styles.pressable}>
                <Pressable onPress={()=> console.log("Pozadie 1")}>
                    <Text style={styles.centerText}>Pozadie 1</Text>
                </Pressable> 
            </View>
            <View style={styles.pressable}>
                <Pressable onPress={()=> console.log("Pozadie 2")}>
                    <Text style={styles.centerText}>Pozadie 2</Text>
                </Pressable> 
            </View>
            <View style={styles.pressable}>
                <Pressable onPress={()=> console.log("Pozadie 3")}>
                    <Text style={styles.centerText}>Pozadie 3</Text>
                </Pressable> 
            </View>
            <View style={styles.pressable}>
                <Pressable  onPress={()=> console.log("Pozadie 4")}>
                    <Text style={styles.centerText}>Pozadie 4</Text>
                </Pressable> 
            </View>
        </View>
    );
}

export default Pozadie;