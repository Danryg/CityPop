import React from 'react';
import WideTextInput from './WideTextInput';
import {View, Image, StyleSheet,TouchableHighlight} from 'react-native';

export function SearchFieldComponent(props) {
    return (
        <View style={styles.buttonContainer}>
            <WideTextInput value placeholder ='Enter a City '/>
            <TouchableHighlight onPress={()=>props.searchHandler("search")} style={styles.searchButtonContainer}>
                <Image style={styles.searchButton} source={require('../../assets/SearchIcon.png')}></Image>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        alignItems: 'center'

    },
    searchButtonContainer:{
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",

        elevation: 7,
    },
    searchButton:{
        width: 30,
        height: 30,

    }
})

export default SearchFieldComponent;