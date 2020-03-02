import React from 'react';
import CurrencyList from './screens/CurrencyList'
import EStyleSheet from 'react-native-extended-stylesheet';
import Options from './screens/Options';
import Navigator from './config/routes';
import {Provider} from 'react-redux';
import store from './config/store';


import {AlertProvider,connectAlert} from './components/Alert';
EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange:'#D57A66',
    $primaryGreen:'#00BD9D',
    $primaryPurple:'#9E768F',
    
    $white:'#ffff',
    $boder:'#E2E2E2',
    $inputText:'#797979',
    $lightGrey:'#F0F0F0',
    $darkText:'#343434'
})
export default ()=> (
<Provider store={store}>
<AlertProvider>
    <Navigator onNavigationStateChange={null}/>
    </AlertProvider>
    </Provider>
);