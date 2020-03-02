import React, { Component } from 'react';
import { View,Text,Image,ScrollView,StatusBar } from 'react-native';
import {ListItem,Seperator} from '../components/List';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import {changePrimaryColor} from '../actions/theme';
import {connect} from 'react-redux';

const styles =EStyleSheet.create({
    $blue:'$primaryBlue',
    $orange:'$primaryOrange',
    $green:'$primaryGreen',
    $purple:'$primaryPurple',

})
class Theme extends Component{
    static propTypes={
        navigation:PropTypes.object,
        dispatch:PropTypes.func,
    }
handleThemePress=(color)=>{
    console.log('theme press'+color);
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack()

}

    render(){
        return(
                <ScrollView>
                    <StatusBar translucent={false} barStyle='default'/>
                    <ListItem
                    onPress={()=>this.handleThemePress(styles.$blue)}
                    text='Blue'
                    iconBackground={styles.$blue}
                    selected
                    checkmark={false}/>
                    <Seperator/>
                    <ListItem
                    onPress={()=>this.handleThemePress(styles.$orange)}
                    text='Orange'
                    iconBackground={styles.$orange}
                    selected
                    checkmark={false}/>
                    <Seperator/>
                    <ListItem
                    onPress={()=>this.handleThemePress(styles.$green)}
                    text='Green'
                    iconBackground={styles.$green}
                    selected
                    checkmark={false}/>
                    <Seperator/>
                    <ListItem
                    onPress={()=>this.handleThemePress(styles.$purple)}
                    text='Purple'
                    iconBackground={styles.$purple}
                    selected
                    checkmark={false}/>
                    <Seperator/>
                </ScrollView>
        );
    }
}

export default connect()(Theme);