import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


/**
 * This will place a centered title at the top of the page
 * @param {*title the centered title text} props 
 * @returns CenteredTitleComponent
 */
export function CenteredTitleComponent(props) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appTitle:{
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20
    },
    titleContainer:{
        flex:0.3,
        justifyContent: 'center',
        
    },
    title:{
        textAlign:'center',
        fontSize: 30,
        fontWeight: "bold",
    },
})

export default CenteredTitleComponent;