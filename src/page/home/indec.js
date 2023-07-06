import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { EdukasiRemaja, Inovasi, KonselingRemaja, Puskesmas } from '../../assets';
import colors from '../../utils/colors';
import { getData } from '../../utils/storedata';
const HomeScreen = ({navigation}) => {
    
     const handleLinkPress = () => {
        var Link1 = 'https://sipp.pa-tual.go.id/'
        Linking.openURL(Link1)
        .then((supported) => {
            if (supported) {
                return Linking.openURL(Link1);
            } else {
                console.log("Tautan Tidak Dapat Dibuka:"+ Link1)

            }
        })
        .catch((error) => console.log('Terjadi Kesalahan' + error));
    };

  const [data, setData] = useState({});

useEffect(() => {
getData("user").then(response => {
  setData(response);
  console.log('data user', response)
});
console.log('TES CUY');
},[])
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
    {/* NAV SELAMAT DATANG USER */}
     <View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary,}}>
    
    <View style={{padding:1, }}>
        <Text style={{fontFamily:'Poppins-Regular', color:'white', fontSize:12, top:5}}>Welcome</Text>
        <Text style={{fontFamily:'Poppins-Regular', color:'white', fontSize:28,}}>BESTI</Text>
        <Text style={{color:'white', fontFamily:'Poppins-Regular', fontSize:12, bottom:10}}>Bangun Remaja Sehat dan Produktif</Text>
    </View>

 <View style={{padding:1, left:30}}>
       <Image  style={{height:90, width:90, alignItems:'flex-end',}} source={Puskesmas}/>
 </View>
     </View>
    {/* EMD NAV SELAMAT DATANG USER */}

<View style={{}}>
<SliderBox 

images={[
    require('../../assets/img/slider1.png'),
    require('../../assets/img/slider2.png'),
]}
 sliderBoxHeight={180}
            autoplay
            circleLoop
            dotStyle={styles.dostStyles}
            dotColor={colors.secondary}
            autoplayInterval={3000}
          
/>
</View>

    <View style={{padding:10,}}>

{/* EDUKASI REMAJA */}
<TouchableOpacity style={{padding:10,backgroundColor:colors.secondary, borderRadius:10}} onPress={()=> navigation.navigate('HalamanEdukasiRemaja')}>
   <View style={{flexDirection:'row'}}>
 <Image source={EdukasiRemaja} style={{height:110, width:110, }} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:20, marginTop:50, color:'white', textAlign:'center', left:20}}>Edukasi Remaja</Text>
   </View>
</TouchableOpacity>
{/* EMD EDUKASI REMAJA */}


{/* KONSELING REMAJA */}
<TouchableOpacity onPress={()=> navigation.navigate('HalamanKonselingRemaja')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, marginTop:10}}>
    <View style={{flexDirection:'row'}}>
    <Image source={KonselingRemaja} style={{height:110, width:110, }} />
        <Text style={{fontFamily:'Poppins-Regular', fontSize:20, marginTop:50, textAlign:'center',color:'white', left:20}}>Konseling Remaja</Text>
    </View>

</TouchableOpacity>
{/* EMD KONSELING REMAJA */}


{/* INOVASI */}
<TouchableOpacity onPress={()=> navigation.navigate('HalamanInovasi')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, marginTop:10}}>
    <View style={{ flexDirection:'row'}}>
    <Image source={Inovasi} style={{height:110, width:110, }} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:20, marginTop:50, textAlign:'center',color:'white', left:60, }}>Inovasi</Text>
    </View>
    
</TouchableOpacity>
{/* EMD INOVASI */}
    </View>



    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    dostStyles: {
        height:5,
        width:5,
        borderRadius:5,
    }
})