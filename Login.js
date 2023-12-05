import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, View, ImageBackground} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./4873152.jpg')}
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom:50, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 60, color: 'black', }}>
          LAMA
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black', textAlign:'center'}}>
          Lokasi Asrama Mahasiswa
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 150,
          height: 40,
          backgroundColor: '#0766AD',
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate('PetaLokasi');
        }}>
        <Text style={{color: 'white'}}>Mulai</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
