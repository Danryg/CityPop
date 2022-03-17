import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

/**
 * Displayes a styled text input
 * @param {*placeholder placeholder text} props 
 * @param {*searchTextHandler(text) function for getting text from inputfield} props 
 * @returns WideTextInput component
 */
export function WideTextInput(props) {
    return (
        <TextInput 
            placeholder={props.placeholder} 
            style={styles.textInput}
            onChangeText={(text) => props.searchTextHandler(text)}
        />
    );
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: "90%",
        textAlign: 'center',
        fontSize: 15,

        height: 70
    }
})


export default WideTextInput;