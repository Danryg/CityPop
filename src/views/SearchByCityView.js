import React from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import {SearchFieldComponent} from '../components/SearchFieldComponent';


export function SearchByCityView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableWithoutFeedback onPress={()=> console.log("Back")}>
                    <Image style={styles.arrow} source={require('../../assets/Arrow.jpg')} ></Image>
                </TouchableWithoutFeedback>
                <Text style={styles.appTitle}>CityPop</Text>
            </View>
            <CenteredTitleComponent title={props.title}/>
            <SearchFieldComponent style={styles.buttonContainer} searchHandler={(search) => props.searchHandler(search)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        flex:0.07,
        flexDirection: 'row',
        alignItems: 'center',

    },
    arrow:{
        width: 50,
        height: 50,
        transform: [{ rotate: '180deg' }],
        marginLeft: 10
    },
    buttonContainer:{
        flex:0.6,
    }

})  

export default SearchByCityView;