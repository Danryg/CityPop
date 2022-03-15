import React, {Component} from 'react';
import WideTextInput from './WideTextInput';
import {View, Image, StyleSheet,TouchableHighlight} from 'react-native';




export class SearchFieldComponent extends Component{
    
    state ={
        search: 20,
    };
    
    render(){
        return (
            <View style={styles.buttonContainer}>
                <WideTextInput placeholder ='Enter a City' searchTextHandler={this.setSearchText}/>
                <TouchableHighlight onPress={()=> this.props.searchHandler(this.state.search)} style={styles.searchButtonContainer}>
                    <Image style={styles.searchButton} source={require('../../assets/SearchIcon.png')}></Image>
                </TouchableHighlight>
            </View>
            
        ); 
    }

    setSearchText = (text) =>{
        this.setState({search: text});
    }

    
}



const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        alignItems: 'center'

    },
    searchButtonContainer:{
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",

        elevation: 7,
    },
    searchButton:{
        width: 30,
        height: 30,

    }
})

export default SearchFieldComponent;