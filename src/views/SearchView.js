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
export class SearchView extends Component {
    render(){
        
        return (
        
            <View style={styles.container}>
                {/** Centered main title */}
                <CenteredTitleComponent title={this.props.route.params.title}/>

                {/** Search component */}
                <SearchFieldComponent style={styles.buttonContainer} inputHint = {this.props.route.params.inputHint} searchHandler={(text) => this.navigateTo(this.props.route.params.searchWindow, {searchword: text})}/>
            </View>
        );
    }
    /**
     * Navigates to a given screen with searchWord as parameter
     * @param {*ScreenName from screen.js config file } screenName 
     * @param {*Searchword given as a parameter to the screen} searchWord 
     */
    navigateTo = (screenName, searchWord) =>{
        this.props.navigation.navigate(screenName, searchWord);
    }
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
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

export default SearchView;