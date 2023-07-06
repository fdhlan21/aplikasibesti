import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SplashIMG } from '../../assets'
import { getData } from '../../utils/storedata';

const SplashScreen = ({navigation}) => {
useEffect(()=>{
 setTimeout(()=> {

  getData('user').then(res=>{
    if(!res){
 navigation.replace('HalamanLogin');
    }else{
 navigation.replace('HalamanHome');
    }
  })
 
 }, 2000)
}, []);
  return (
    <View style={{flex:1}}>
     <View>
         <Image source={SplashIMG} style={styles.imagesplash} />
     </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    imagesplash: {
        width:'100%',
        height:'100%',
    }
})