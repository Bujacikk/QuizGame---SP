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
        borderRadius: 10  
    },
    centerText: {
        textAlign: "center",
        fontSize: 50,
        color: "black"
      },
      logo: {
        width: 300,
        height: 300,
        bottom: 150
      }
});

const Home = ({navigation}) => {
    
let image = require("../images/quiz.png");
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={image}/>
            </View>
            <Pressable style={styles.pressable} onPress={()=> navigation.navigate('Details')}>
                <Text style={styles.centerText}>Login</Text>
            </Pressable> 
        </View>
    );
}

export default Home;