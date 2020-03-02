import React, { Component } from 'react';
import { View,Text } from 'react-native';
import moment from 'moment';
import styles from './styles';
import PropTypes from 'prop-types';
import { lastFromTime } from 'uuid-js';


const LastConverted=({base,quote,conversionRate,date})=>(
<Text style={styles.container}>
    1 {base} ={conversionRate }{quote} as of {moment(date).format('MMMM D,YYYY')}
</Text>

);
LastConverted.propTypes={
    date: PropTypes.date,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number

}
export default LastConverted;