import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export function WideTextInput(props) {
    return (
        <TextInput placeholder={props.placeholder} style={styles.textInput}/>
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