import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CenteredTitleComponent from '../components/CenteredTitleComponent';

function CityPopulationView(props) {
    return (
        <View style={styles.container}>
            <CenteredTitleComponent title="City Name"/>

            <View style={styles.populationBox}>
                <Text style={styles.populationTitle}>POPULATION</Text>
                <Text style={styles.populationNumber}>2 244 000</Text>
            </View>
        </View>

    );
}

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

export default CityPopulationView;