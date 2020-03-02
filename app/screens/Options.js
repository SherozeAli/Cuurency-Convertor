import React, { Component } from 'react';
import { View,Text,ScrollView,StatusBar,Linking } from 'react-native';
import {ListItem,Seperator} from '../components/List'
import {Ionicons} from '@expo/vector-icons'
import PropTypes from 'prop-types';
import {AlertProvider,connectAlert} from '../components/Alert';

const ICON_COLOR='#868686'
const ICON_SIZE=23;
class Options extends Component{
    static propTypes={
        navigation:PropTypes.object,
        alertWithType: PropTypes.func
    }
    handleThemePress=()=>{
        console.log('themee preess');
        this.props.navigation.navigate('Themes',{title:'Themes'})

    }
    handleSitePress=()=>{
        console.log('sitee preess');
        Linking.openURL('httsdap://fixer.io').catch()
{
    this.props.alertWithType('error','sorry','Fixer.io cant be opened right now')
}
    }

    render(){
        return(
                <ScrollView>
                    <StatusBar
                     translucent={false}
                     barStyle='default'/>
                     <ListItem
                     customIcon={ 
                     <Ionicons name='md-link' color={ICON_COLOR} size={ICON_SIZE}/>}
                     text='Theme'
                     onPress={this.handleThemePress}
                     />
                     <Seperator/>
                     <ListItem
                     customIcon={ 
                         <Ionicons name='md-link' color={ICON_COLOR} size={ICON_SIZE}/>
                     }
                     text='Fixer.io'
                     onPress={this.handleSitePress}
                     />
                     <Seperator/>
                </ScrollView>
              
        );
    }
}
export default connectAlert(Options); 