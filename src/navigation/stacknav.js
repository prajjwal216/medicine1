import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddMedicine from '../screens/addMedicine'
import Login from '../screens/Login';
import OtpOption from '../screens/otpOption';
import OtpVerification from '../screens/otpVerification';

const Stack = createNativeStackNavigator();

export default function Authnavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="OtpOption" component={OtpOption} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} options={{
        headerShown: true, headerStyle: {
          backgroundColor: '#1A547F',
        },

        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
        },
        title: 'Enter 4 digit Code'
      }} />
      <Stack.Screen name="AddMedicine" component={AddMedicine} options={{
        headerShown: true, headerStyle: {
          backgroundColor: '#1A547F',
        },

        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
        },
        title: 'Order Medicine'
      }} />

    </Stack.Navigator>
  );
}
