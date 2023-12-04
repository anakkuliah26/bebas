import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Login = () => {
    const navigation = useNavigation() 
  return (
    <TouchableOpacity onPress={() => {
        navigation.navigate('PetaLokasi')
    }}>
        <Text>
            sda
        </Text>
    </TouchableOpacity>
  )
}

export default Login