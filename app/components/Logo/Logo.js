import React, { Component } from 'react';
import { View,Image,Text,Keyboard,Animated,Platform } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION=250;
class Logo extends Component{
    constructor(props){
        super(props);
        this.containerImageWidth=new Animated.Value(styles.$largeContainerSize);
        this.imageWidth=new Animated.Value(styles.$largeImageSize);

    }
componentDidMount(){
    if(Platform.OS==='android'){
        this.KeyboardShowListener=Keyboard.addListener('keyboardDidShow',this.keyboardShow)
        this.KeyboardHideListener=Keyboard.addListener('keyboardDidHide',this.keyboardHide)

    }
    else{
        this.KeyboardShowListener=Keyboard.addListener('keyboardWillShow',this.keyboardShow)
        this.KeyboardHideListener=Keyboard.addListener('keyboardWillHide',this.keyboardHide)
    }
        console.log('kcccc ddd mm !');
      
    }

//     componentWillMount()
// {
//     this.keyboardShowListener.remove();
//     this.keyboardHideListener.remove();
// }
    keyboardShow=()=>{
            console.log('keyboard showing !');
            Animated.timing(this.containerImageWidth,{
            toValue:styles.$smallContainerSize,
            duration:ANIMATION_DURATION,    
            }).start();

            Animated.timing(this.imageWidth,{
            toValue:styles.$smallImageSize,
            duration:ANIMATION_DURATION,    
            }).start();
    };
    keyboardHide=()=>{
        console.log('keyboard hiding !');
        console.log('keyboard showing !');
        Animated.timing(this.containerImageWidth,{
        toValue:styles.$largeContainerSize,
        duration:ANIMATION_DURATION,    
        }).start();

        Animated.timing(this.imageWidth,{
        toValue:styles.$largeImageSize,
        duration:ANIMATION_DURATION,    
        }).start();

}
    render(){
            const containerImageStyle=[
                styles.containerImage,
                {
                    width:this.containerImageWidth,
                    heigth:this.containerImageWidth
                }
            ];

     const imageStyles=[
         styles.image,
         
             this.props.tintColor?{tintColor:this.props.tintColor}:null,
            { width:this.imageWidth
            }
     ]       
//style.image ki jga imagesStyles
        return(
<View style={styles.container}>

<Animated.Image resizeMode='contain' style={containerImageStyle} source={require('./images/background.png')}/>
<Animated.Image resizeMode='contain' style={imageStyles} source={require('./images/logo.png')}/>

<Text style={styles.text}>Currency Converter</Text>
</View>
        )
    }


};
export default Logo;
