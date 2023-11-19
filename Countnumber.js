import React, { useState } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

const Countnumber = () => {
    const [number, setNumber] = useState(0)

  return (
   <View style={style.container}>
    <Text style={style.text}> {number}</Text>
    <Button style={style.button} title="Tambah" onPress={() => setNumber(number + 1)}/>
    <Button style={style.button} title="Reset" onPress={() => setNumber(0)} color="red"/>
   </View>  
   )
}

export default Countnumber

const style = StyleSheet.create({
    container: {
      // flex: 1,
      height:'100%',
      backgroundColor: '#089',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      margin: 10,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 40,
    }
   })
   