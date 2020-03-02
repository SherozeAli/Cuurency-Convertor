import React, { Component } from 'react';
import { View,Text,TouchableHighlight } from 'react-native';
import styles from './styles';
import Seperator from './Seperator';
import PropTypes from 'prop-types';
import Icon from './Icon';



const ListItem=({text,onPress,selected=false,checkmark=true,visible=true,customIcon=null,iconBackground})=>(
<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
    <Text style={styles.text}>
        {text}
    </Text>
{selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />: <Icon/>} 
    </View>
</TouchableHighlight>

);
//upr{customIcom daalna }

ListItem.propTypes={
onPress:PropTypes.func,
text:PropTypes.string,
selected:PropTypes.bool,
iconBackground:PropTypes.string,
checkmark:PropTypes.bool,
visible:PropTypes.bool,
customIcon:PropTypes.element
}

export default ListItem;