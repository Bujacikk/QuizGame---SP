import React, { useState } from 'react'
import {Text, View, StyleSheet, Pressable, SafeAreaView, Modal} from 'react-native';
import data from '../data/QuizData';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#637DDA',
        paddingTop: 15
    },
    pressable: {
        backgroundColor: '#C4C4C4',
        width: '80%',
        height: '1%',
        borderColor: "black",
        borderWidth: 4,
        marginBottom: 50
    
    },
    centerText: {
      fontSize: 18,
      color: "black",
      textAlign: "center",
      textAlignVertical: "center",
      flex: 1
    },
    otazkaView: {
        backgroundColor: '#C4C4C4',
        width: '80%',
        height: '25%',
        borderColor: "black",
        borderWidth: 4,
        marginBottom: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    otazka: {
        textAlign: "center",
        fontSize: 18,
        color: "black"
      },
    nextButton: {
        backgroundColor: '#C4C4C4',
        width: '30%',
        height: '10%',
        borderColor: "black",
        borderWidth: 2
    
    },
   
});

const Game = ({navigation}) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    const renderNextButton = () => {
        if(showNextButton){
            return (
            
                <Pressable onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.centerText}>Next</Text>
                </Pressable>
            
            )
        }else{
            return null
        }
    }

    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
    }

    return (
        <SafeAreaView  style={styles.container}>
            <View>
                <Text style={styles.otazka}>{currentQuestionIndex+1} / {allQuestions.length}</Text>
            </View>
            <View style={styles.otazkaView}>
                <Text style={styles.otazka}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
               {
                    allQuestions[currentQuestionIndex]?.options.map(option =>
                        <Pressable disabled={isOptionsDisabled} onPress={() => validateAnswer(option)} key={option} 
                        style={{
                        width: '80%',
                        height: '10%',
                        backgroundColor: '#C4C4C4',
                        borderColor: option==correctOption
                        ? "#55FF00"
                        : option==currentOptionSelected
                        ? "red"
                        : "black",
                        borderWidth: 4,
                        marginBottom: 20,
                        borderRadius: 10,
                        }}>
                            <Text style={styles.centerText}> {option} </Text>
                            {
                                option==correctOption ? (
                                    <View style={{
                                        backgroundColor: "green",
                                    }}>
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        backgroundColor: "red",
                                    }}>
                                    </View>
                                ) : null
                            }
                        </Pressable>
                    )
               }
               
            
            {renderNextButton()}
            
            <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: "#252c4a",
                       alignItems: 'center',
                       justifyContent: 'center',
                   }}>
                       <View style={{
                           backgroundColor: "white",
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center',
                           
                           
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length-1) ? 'Don Corleone!' : score> (allQuestions.length-3) ? 'Paulie!' : score> (allQuestions.length-5) ? 'Vince' : score> (allQuestions.length-7) ? 'Luigi' : 'Ralph'}</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20,
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? "green" : "red"
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: "black"
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <View style={{
                               backgroundColor: "white",
                               width: '90%',
                               borderRadius: 20,
                               padding: 20,
                               alignItems: 'center',
                           }}>
                                <Pressable
                                onPress={restartQuiz}
                                style={{
                                    backgroundColor: "#3498db",
                                    padding: 20, width: '100%', borderRadius: 20, marginBottom: 10
                                }}>
                                    <Text style={{
                                        textAlign: 'center', color: "white", fontSize: 20
                                    }}>Reštartovat quiz</Text>
                                </Pressable>
                                <Pressable
                                onPress={()=> navigation.navigate('Details')}
                                style={{
                                    backgroundColor: "#3498db",
                                    padding: 20, width: '100%', borderRadius: 20,
                                }}>
                                    <Text style={{
                                        textAlign: 'center', color: "white", fontSize: 20 
                                    }}>Hlavné menu</Text>
                                </Pressable>
                           </View>
                       </View>

                   </View>
               </Modal>
               
        </SafeAreaView >
    );
}

export default Game