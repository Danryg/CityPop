import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

/**
 * This is a styled and modified button
 * @param {*handler onPress function handler} props 
 * @param {*text button text} props 
 * @returns WideListButton component
 */
export function WideListButton(props) {
    return (
        <TouchableHighlight style={styles.buttonContainer} onPress={props.handler}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    buttonContainer:{
        width:"90%",
        height:"15%",

        borderColor:"black",
        borderRadius:2,
        borderWidth:2,

        justifyContent:'center',

        marginTop:10,

    },
    buttonText:{
        fontSize:20,
        width: "100%",
        textAlign:'center'

        
    }
})


export default WideListButton;