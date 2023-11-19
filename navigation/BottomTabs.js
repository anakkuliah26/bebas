import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import React from 'react';
import Getjsonfile from '../Getjsonfile';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Callapi from '../Callapi';
import Countnumber from '../Countnumber';
import Getdata from '../Getdata';
import Createdata from '../Createdata';
import Editdata from '../Editdata';

const Tab = createBottomTabNavigator();

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
function GetData () {
return (<Getdata />)
}
function CreateData () {
return (<Createdata />)
}
function EditData () {
return (<Editdata />)
}



function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
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
      <Tab.Screen name="Database" component={GetData}
      options={{
        tabBarLabel: 'Database',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="database" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Add Data" component={CreateData}
      options={{
        tabBarLabel: 'Add Data',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="plus-circle" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Edit Data" component={EditData}
      options={{
        tabBarLabel: 'Edit Data',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="pencil-alt" color={color} size={size} />
        ),
      }} />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs
