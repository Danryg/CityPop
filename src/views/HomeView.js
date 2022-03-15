import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WideListButton from '../components/WideListButton';


/**
 * Home page with navigation to main features
 * @returns HomeView Component
 */
export class HomeView extends Component {

    render(){
        return (
            <View style={styles.container}>
                {/** Centered title */}
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>CityPop</Text>
                </View>

                {/** Navigation box */}
                <View style={styles.buttonBox}>
                    <WideListButton text="SEARCH BY CITY" handler={()=>{console.log("pressed")}} />
                    <WideListButton text="SEARCH BY COUNTRY" handler={()=>{console.log("pressed")}} />
                </View>
            </View>
        );
    }


}



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleBox:{
        flex:0.4,
        justifyContent: 'center',
    },
    buttonBox:{
        flex:0.5,
        
        alignItems:'center'
    },
    titleText:{
        textAlign:'center',
        fontSize:40,
        fontWeight: 'bold',
    },
    
})

export default HomeView;