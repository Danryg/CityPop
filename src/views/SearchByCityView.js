import React,{Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import {SearchFieldComponent} from '../components/SearchFieldComponent';


/**
 * This view represents the search for city feature, where the user will be able to 
 * search for a city and move into a detailed view of that city
 * 
 * @returns SearchByCityView component
 */
export class SearchByCityView extends Component {
    render(){
        console.log(this.props);
        return (
        
            <View style={styles.container}>
                {/** Centered main title */}
                <CenteredTitleComponent title={this.props.route.params.title}/>

                {/** Search component */}
                <SearchFieldComponent style={styles.buttonContainer} searchHandler={(search) => {this.navigateTo(this.props.params.searchWindow)} }/>
            </View>
        );
    }
    navigateTo = (screenName) =>{
        console.log(this.props.navigation);
        this.props.navigation.navigate(screenName);
    }
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