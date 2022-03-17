import React, { Component } from 'react';

import { View, StyleSheet, Text, Alert } from 'react-native';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import {getPopulationFromCity} from '../helper/populationAPI';
import formatter from '../utils/formatter';

export class CityPopulationView extends Component {

    state={
        population: 0
    }

    constructor(props){
        super();
        this.initiatePopulation(props.route.params.searchword);
    }

    render(){
        return (
            <View style={styles.container}>
                <CenteredTitleComponent title="City Name"/>
                <View style={styles.populationBox}>
                    <Text style={styles.populationTitle}>POPULATION</Text>
                    <Text style={styles.populationNumber}>{this.state.population}</Text>
                </View>
            </View>
        );
    }

    initiatePopulation = async (text) =>{

        
        var city = await getPopulationFromCity(text);

        if(city == "error"){
            this.props.navigation.goBack();
            Alert.alert("City does not exist", "Check for spelling error");
            return;
        }


        city = Math.round(city);
        city = formatter.formatPopulationNumber(city);
        this.setState({population: city});
    }

    
}
export default CityPopulationView;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
        
    },
    populationBox:{
        marginTop:50,
        width: "90%",
        height: 100,
        borderWidth:1,
        alignItems: 'center'
    },
    populationTitle:{
        fontSize:10
    },
    populationNumber:{
        fontSize: 40
    }
})

