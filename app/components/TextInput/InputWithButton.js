import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button,Text,View,TextInput,TouchableHighlight } from 'react-native';
import styles from './styles';
import color from 'color';

const InputWithButton =(props)=> {
const{onPress,editable=true,buttonText}=props;
const underlayColor=color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundModify);

const containerStyles=[styles.container];
if(editable===false){
containerStyles.push(styles.containerDisable);
}

const buttonTextStyles = [styles.buttonText];
if (props.textColor) {
  buttonTextStyles.push({ color: props.textColor });
}

    return(
    <View style={styles.container}>
        <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer}
         onPress={onPress}>
<Text style={buttonTextStyles}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border}></View>
        <TextInput style={styles.input} {...props}/>
    </View>

);
};
InputWithButton.propTypes={
    onPress:PropTypes.func,
    buttonText:PropTypes.string,
    editable:PropTypes.bool,
    textColor:PropTypes.string
}


export default InputWithButton;