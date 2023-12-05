import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context';

const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbxNLAOjmym80DFSa0u7HXra_KpmzwBzGn-CEuXLRvx4OsS1ZKjH9QvnuQafr4vIsIyH/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            setDataUser(json)
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      function refreshPage() {
        fetch(jsonUrl)
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setDataUser(json)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
       }
       
    return (
        <SafeAreaView>
  {isLoading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    // style= {{imageBackground: '4873152.jpg', height: '100%'}}
    <View>
      <ImageBackground source={require('./4873152.jpg')} style={{
        height: '100%',
      }}> 
      <Text style={styles.listTitle}>LIST DATA</Text>
      <FlatList
       data={dataUser}
       onRefresh={() => { refreshPage() }}
       refreshing={refresh}
      //  keyExtractor={({ id }, index) => id}
       renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <FontAwesome5 name={item.icon} size={50} color={item.color} />
            </View>
            <View>
              <Text style={styles.cardtitle}>{item.nama}</Text>
              <Text style={{fontSize:11}}>Deskripsi : {item.deskripsi}</Text>
              <Text style={{fontSize:11}}>Jenis: {item.jenis}</Text>
              <Text style={{fontSize:11}}>Alamat : {item.alamat}</Text>
            </View>
          </View>
       )}
      />
      </ImageBackground>
    </View>
  )}
</SafeAreaView>

    )
}

export default Callapi

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    listTitle: {
      fontSize: 30, // Ukuran teks
      marginTop: 10,
      // bottom: 10,
      textAlign: 'center', // Posisi teks menjadi tengah
      fontWeight: 'bold', // Tulisan tebal
      color: '#007260', // Warna teks
    },
    avatar: {
      borderRadius: 100,
      width: 80,
    },
    cardtitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   

