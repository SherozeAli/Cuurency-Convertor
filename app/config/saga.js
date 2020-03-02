 import {SWAP_CURRENCY,CHANGE_BASE_CURRENCY,GET_INITIAL_CONVERSION} from '../actions/currencies';
import {takeEvery} from 'redux-saga/effects';

const getLatestRates=currency=>fetch(`http://data.fixer.io/api/latest?access_key=6fe1af8ced0c499cee9eb56768a5f6e5&base=${currency}`)

const fetchLatestConversionRates = function* (action) {
    console.log('TODO: Update the things.', action);
    getLatestRates('EUR')
    .then((res)=>res.json()).then(res=>console.log(res))
    .catch(err=>console.log('errr ',err))
    yield;
  };
  
  const rootSaga = function* () {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  };
  
  export default rootSaga;