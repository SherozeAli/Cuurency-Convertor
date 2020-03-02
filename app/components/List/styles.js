import { StyleSheet } from 'react-native';
import EStylesSheet from 'react-native-extended-stylesheet';
export default EStylesSheet.create({
$underlayColor:'$boder',

row:{
paddingHorizontal: 20,
paddingVertical: 16,
flexDirection: 'row',
justifyContent:'space-between',
alignItems: 'center',
backgroundColor:'$white'
},
text:{
fontSize:16,
color:'$darkText'
},

seperator:{
marginLeft: 20,
backgroundColor:'$primaryBlue',
flex:1,
height:StyleSheet.hairlineWidth
},
icon:{
    backgroundColor:'$white',
    width:30,
    height:30,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 15,
 
},
iconVisible:{
    backgroundColor:'$primaryBlue'
},
checkIcon:{
    width:18
}

});