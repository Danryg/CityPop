import React from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';

/**
 * This is a city list item, designed to represent a city in a list
 * @param {onPressHandler function that will be called when this item is pressed} props
 * @param {*name name that will be displayed } props 
 * @returns CountryListItem
 */
function CountryListItem(props) {
    return (
        <TouchableHighlight style={styles.container} onPress={()=>props.onPressHandler(props.name)}>
            <Text style={styles.countryName}>{props.name}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        width: 350,
        height: 60,
        justifyContent:'center',

        marginTop: 10
    },
    countryName:{
        textAlign:'center',
        fontSize: 20
    }
})

export default CountryListItem;