import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, AppState, ImageBackground } from 'react-native';
import React from 'react';
import Getjsonfile from '../Getjsonfile';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Callapi from '../Callapi';
import Countnumber from '../Countnumber';
import Getdata from '../Getdata';
import Createdata from '../Createdata';
import Editdata from '../Editdata';
import { WebView } from 'react-native-webview';
import App from '../App';
import Calldata from '../Calldata';

const Tab = createBottomTabNavigator();

//form input dari github pages
const formInput = 'https://anakkuliah26.github.io/pgpbl-12/'

//Peta web dari github pages
const petaweb = 'https://anakkuliah26.github.io/pgpbl-12/map.html'

// function HomeScreen () {
// return (<Text>Home</Text>)
// }
// function SettingsScreen () {
// return (<Text>Setting</Text>)
// }
// function MahasiswaScreen () {
// return (<Getjsonfile />)
// }
// function MahasiswaScreen1 () {
// return (<Callapi />)
// }
// function Hitung () {
// return (<Countnumber />)
// }
function HomeScreen() {
    return (
      <View> 
        <ImageBackground
      source={require('../4873152.jpg')}
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>  
        <Text style={style.title}>APLIKASI PETA LOKASI ASRAMA</Text>
        <Text style={style.text}> Aplikasi ini merupakan sebuah aplikasi yang menampilkan lokasi asrama yang ada di daerah 
          kota Yogyakarta dan sekitarnya. Aplikasi ini bertujuan untuk membantu mahasiswa yang kesusahan dalam menemukan tempat tinggal</Text>
        <View style={style.container}>
            <Text>Stack:</Text>
            <Text>1. React Native</Text>
            <Text>2. HTML</Text>
            <Text>3. LeafletJS</Text>
            <Text>4. Google Sheets</Text>
            <Text>5. App Scripts</Text>
            <Text>6. Font Awesome</Text>
            <Text>7. Github Pages</Text>
        </View>
        </ImageBackground> 
        </View>
        
    )
}
function MapScreen() {
    return (
        <WebView
            source={{ uri:petaweb }}
        />
    );
}
function AddDataScreen() {
    return (
        <WebView
            source={{ uri:formInput }}
        />
    );
}
// function GetData () {
// return (<Getdata />)
// }
// function CreateData () {
// return (<Createdata />)
// }
// function EditData () {
// return (<Editdata />)
// }
function Portofolio () {
return (<App />)
}
function ListData () {
return (<Calldata />)
}



function MyTabs() {
  return (
   
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
        borderRadius: 20,
        height: 65,
        backgroundColor: '#0766AD',
      },
      tabBarShowLabel: false,
    }}>
      {/* <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="home" color={color} size={size} />
        ),
      }}
       />
      <Tab.Screen name="Settings" component={SettingsScreen}options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="wrench" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Mahasiswa" component={MahasiswaScreen}
      options={{
        tabBarLabel: 'Mahasiswa',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="users" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Mahasiswa1" component={MahasiswaScreen1}
      options={{
        tabBarLabel: 'Mahasiswa API',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="user-edit" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Hitung" component={Hitung}
      options={{
        tabBarLabel: 'Hitung',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="stopwatch" color={color} size={size} />
        ),
      }} /> */}
      {/* <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="home" color={color} size={size} />
        ),
      }} /> */}
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        // tabBarLabel: 'Home',
        tabBarIcon: ({ focused, size }) => (
          <View style={{
            alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#fff' : '#0766AD',
            width: 55, height: 55, borderRadius: 30 }}>
            <Fontawesome5 name="home" size={size} style={{color: focused? '#0766AD' : '#fff'}}/>
            <Text style={{color: focused? '#0766AD' : '#fff', fontSize: 10}}>Home</Text>
            </View>
        ),
      }} />
      <Tab.Screen name="Map" component={MapScreen}
      options={{
        // tabBarLabel: 'Map',
        tabBarIcon: ({ focused, size }) => (
          <View style={{
            alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#fff' : '#0766AD',
            width: 55, height: 55, borderRadius: 30 }}>
            <Fontawesome5 name="map" size={size} style={{color: focused? '#0766AD' : '#fff'}}/>
            <Text style={{color: focused? '#0766AD' : '#fff', fontSize: 10}}>Map</Text>
            </View>
        ),
      }} />
      <Tab.Screen name="Add Data" component={AddDataScreen}
      options={{
        // tabBarLabel: 'Add Data',
        tabBarIcon: ({ focused, size }) => (
          <View style={{
            alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#fff' : '#0766AD',
            width: 55, height: 55, borderRadius: 30 }}>
            <Fontawesome5 name="plus-circle" size={size} style={{color: focused? '#0766AD' : '#fff'}}/>
            <Text style={{color: focused? '#0766AD' : '#fff', fontSize: 10}}>Add Data</Text>
            </View>
        ),
      }} />
      <Tab.Screen name="List Data" component={ListData}
      options={{
        tabBarLabel: 'List Data',
        tabBarIcon: ({ focused, size }) => (
          <View style={{
            alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#fff' : '#0766AD',
            width: 55, height: 55, borderRadius: 30 }}>
            <Fontawesome5 name="th-list" size={size} style={{color: focused? '#0766AD' : '#fff'}}/>
            <Text style={{color: focused? '#0766AD' : '#fff', fontSize: 10}}>List Data</Text>
            </View>
        ),
      }} />
      <Tab.Screen name="Portofolio" component={Portofolio}
      options={{
        // tabBarLabel: 'Portofolio',
        tabBarIcon: ({ focused, size }) => (
          <View style={{
            alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#fff' : '#0766AD',
            width: 55, height: 55, borderRadius: 30 }}>
            <Fontawesome5 name="user" size={size} style={{color: focused? '#0766AD' : '#fff'}}/>
            <Text style={{color: focused? '#0766AD' : '#fff', fontSize: 10}}>About</Text>
            </View>
        ),
      }} />
      {/* <Tab.Screen name="Add Data" component={CreateData}
      options={{
        tabBarLabel: 'Add Data',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="plus-circle" color={color} size={size} />
        ),
      }} /> */}
      {/* <Tab.Screen name="Edit Data" component={EditData}
      options={{
        tabBarLabel: 'Edit Data',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="pencil-alt" color={color} size={size} />
        ),
      }} /> */}
      
    </Tab.Navigator>
    
  );
}
export default MyTabs

const style = StyleSheet.create({
    listitems:{
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch'
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'justify',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 20,
      padding: 20,
      backgroundColor:'#f0f0f0'
    },
    caption: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor:'#f0f0f0',
    }
})
