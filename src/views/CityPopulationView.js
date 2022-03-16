import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import getPopulationFromCity from '../helper/populationAPI';

export class CityPopulationView extends Component {

    state={
        population: 0
    }

    constructor(props){
        super();
        this.thing(props.route.params.searchword);
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

    thing = async (text) =>{
        var city = await getPopulationFromCity(text);
        city = Math.round(city)
        city = this.formatPopulation(city);
        this.setState({population: city});
    }

    formatPopulation(number){
        var length = number.toLocaleString().length ;
        var k = (length / 3);
        
        let origString = number.toLocaleString();

        origString = origString.split('')
        var res =number.toLocaleString();
        for( var i = length % 3; i< 4*k; i = i + 4){
            origString.splice(i, 0, " ");
        }

        res = origString.join('');
        
        return res;
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

