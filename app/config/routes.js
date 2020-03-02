import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import { StatusBar } from 'react-native';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack=createStackNavigator({
Home:{
    screen:Home,
    navigationOptions:{
    header:()=>null,
    }

    
},
Options:{
    screen:Options,
   // navigationOptions:'Options',
    navigationOptions:({navigation})=>({
        headerTitle:navigation.state.params.title
        
        })

},
Themes:{
    screen:Themes,
    navigationOptions:{
        headerTitle:'Themes'
    }

},

},{
    headerMode:'screen'
});

const CurrencyListStack =createStackNavigator({

    CurrencyList:{
        screen:CurrencyList,
        navigationOptions:({navigation})=>({
        headerTitle:navigation.state.params.title
        
        })
    },
})

export default  createStackNavigator({
Home:{
screen:HomeStack
},
CurrencyList:CurrencyListStack

},{
    mode:'modal',
    headerMode:'none'
   // cardStyle:{paddingTop: StatusBar.currentHeight,}

});