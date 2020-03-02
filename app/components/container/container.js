import React from 'react';
import { View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';


const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return (
    <View style={containerStyles}>
      {children}
    </View>
  );
};

Container.propTypes={
    children:PropTypes.element,
    backgroundColor:PropTypes.string 
};

export default Container;