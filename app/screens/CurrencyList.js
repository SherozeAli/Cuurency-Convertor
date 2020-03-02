import React, { Component } from 'react';
import { View,FlatList,Text,StatusBar } from 'react-native';
import currencies from '../data/currencies'
import ListItem from '../components/List/ListItem';
import Seperator from '../components/List/Seperator';
import PropTypes from 'prop-types';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import {connect} from 'react-redux';


const TEMP_CURRENT_CURRENCY ='CAD';
class CurrencyList extends Component{
    static propTypes={
        navigation:PropTypes.object,
        baseCurrency:PropTypes.string,
        quoteCurrency:PropTypes.string,
        primaryColor:PropTypes.string

    }
   handlePress=(currency)=>{
       const {type}= this.props.navigation.state.params;
       if(type==='base'){
       this.props.dispatch( changeBaseCurrency(currency));

       }
       else if(type==='quote'){
        this.props.dispatch(changeQuoteCurrency(currency));

       }
       console.log('row press !!');
       this.props.navigation.goBack(null);

       }
    render(){
        let comparisonCurency=this.props.baseCurrency;
        if(this.props.navigation.state.params.type==='quote'){
                    comparisonCurency=this.props.quoteCurrency;
        }
        return(
      
    <View style={{flex:1}}>
    <StatusBar barStyle='default' translucent={false}/>
    <FlatList
    
    keyExtractor={item=>item}
    data={currencies}
        renderItem={({item})=>(
        <ListItem 
        iconBackground={this.props.primaryColor}
        text={item} 
        selected={item===comparisonCurency}
        onPress={()=>this.handlePress(item)}
        
        />

         ) }
    ItemSeparatorComponent={Seperator}
    />
</View>

)
}
}
const mapStateToProps=(state)=>({

        baseCurrency :state.currencies.baseCurrency,
        quoteCurrency:state.currencies.quoteCurrency,
        primaryColor:state.theme.primaryColor,

})


export default connect(mapStateToProps)(CurrencyList); 