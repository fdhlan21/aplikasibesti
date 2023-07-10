import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
}


export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value);
    }
  } catch(e) {
    // error reading value
  }
}

export const RegisterURL = 'http://10.255.5.194/besti/api/register';
export const LoginURL = 'http://10.255.5.194/besti/api/login';
export const KonselingRemajaURL = 'http://10.255.5.194/besti/api/konselingremaja';
export const KonselingRemajaURLLOGIN = 'http://10.255.5.194/besti/api/loginkonseling';
export const SliderURL = 'http://10.255.5.194/besti/api/slider';
export  const MYAPP = 'BESTI'; 