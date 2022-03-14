import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function HomeView(props) {
    return (
        <View style={styles.titleBox}>
            <Text style={styles.titleText}>CityPop</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    titleBox:{
        flex:0.5,
        justifyContent: 'center'
    },
    titleText:{
        textAlign:'center',
        fontSize:40,
        fontWeight: 'bold',
    },
    
})

export default HomeView;