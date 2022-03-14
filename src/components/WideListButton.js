import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

export function WideListButton(props) {
    return (
        <TouchableHighlight onPress={props.handler}>
            <Text>props.text</Text>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    buttonContainer:{
        width:"90%",
        height:"30%",

        borderColor:black,
        borderRadius:2,
        borderWidth:5,

    },
    buttonText:{
        fontSize:15,
        
    }
})


export default WideListButton;