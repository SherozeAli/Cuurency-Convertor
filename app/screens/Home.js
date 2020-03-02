import React, { Component } from 'react';
import { View,KeyboardAvoidingView } from 'react-native';
import {Container} from '../components/container'
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import ClearButton from '../components/Button/ClearButton';
import LastConverted from '../components/Text/LastConverted';
import Header from '../components/Header/Header'
import PropTypes from 'prop-types';
import {swapCurrency,changeCurrencyAmount, getInitialConversion} from '../actions/currencies';
import {connect} from 'react-redux';

const TEMP_BASE_CURRENCY='USD';
const TEMP_QUOTE_CURRENCY='GBP';
const TEMP_BASE_PRICE='100';
const TEMP_QUOTE_PRICE='79.74';
const TEMP_CONVERSION_RATE=0.7974;
const TEMP_CONVERSION_DATE=new Date();

class Home extends Component{
static propTypes={
    navigation:PropTypes.object,
    dispatch:PropTypes.func,
    baseCurrency:PropTypes.string,
    quoteCurrency:PropTypes.string,
    amount:PropTypes.number,
    conversionRate:PropTypes.number,
    isFetching:PropTypes.bool,
    lastConvertedDate:PropTypes.object,
    primaryColor:PropTypes.string,
}
componentWillMount(){

    const { dispatch } = this.props;
    dispatch(getInitialConversion());
}

    handlePressBaseCurrency=()=>{
        this.props.navigation.navigate('CurrencyList',{title:'Base',type:'base'})
    }
    handlePressQuoteCurrency=()=>{
        this.props.navigation.navigate('CurrencyList',{title:'Quote',type:'quote'})

    }
    
    handleTextChange=(amount)=>{
        this.props.dispatch(changeCurrencyAmount(amount));

    }
    handleSwapCurrency=()=>{
       this.props.dispatch(swapCurrency());

    }
    handleOptionsPress=()=>{
        this.props.navigation.navigate('Options',{title:'Options'})

    }
    render(){
        let quotePrice=(this.props.amount*this.props.conversionRate).toFixed(2);    

        if(this.props.isFetching){
            quotePrice='...'
        }
        return(
<   Container backgroundColor={this.props.primaryColor}>
    <Header onPress={this.handleOptionsPress}/>
    <KeyboardAvoidingView behavior='padding'>
    <Logo tintColor={this.props.primaryColor}/>
    <InputWithButton 
    buttonText={this.props.baseCurrency}
    onPress={this.handlePressBaseCurrency}
    defaultValue={this.props.amount.toString()}
    keyboardType='numeric'
    onChangeText={this.handleTextChange}
    textColor={this.props.primaryColor}
    />
    <InputWithButton 
    buttonText={this.props.quoteCurrency}
    onPress={this.handlePressQuoteCurrency}
    editable={false}
    value={quotePrice}
    textColor={this.props.primaryColor}

    />
<LastConverted 
base={this.props.baseCurrency}
quote={this.props.quoteCurrency}
conversionRate={this.props.conversionRate}
date={this.props.lastConvertedDate}/>

    <ClearButton
    text='Reverse currencies'
    onPress={this.handleSwapCurrency}
    />
    </KeyboardAvoidingView>
</Container>

        );
    }
}
const mapStateToProps=(state)=>{
    const baseCurrency=state.currencies.baseCurrency;
    const quoteCurrency=state.currencies.quoteCurrency;
    const amount=state.currencies.amount;
    const conversionSelector=state.currencies.conversions[baseCurrency] || {};
    const rates =conversionSelector.rates||{};
return{
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate:rates[quoteCurrency] || 0,
    isFetching:conversionSelector.isFetching,
    primaryColor:state.theme.primaryColor,
    lastConvertedDate:conversionSelector.date?new Date(conversionSelector.date):new Date()
};
}
export default connect(mapStateToProps)(Home);