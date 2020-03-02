import React, { Component } from 'react';
import { View,Button,Text,Image,TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';


const ClearButton =({text,onPress})=>(

    <TouchableOpacity 
    style={styles.container}
    onPress={onPress}>
        <View style={styles.wrapper}>
            <Image resizeMode='contain' style={styles.icon}  source={require('./images/icon.png')}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.prototype={
    text:PropTypes.string,
    onPress:PropTypes.func

};

export default ClearButton;