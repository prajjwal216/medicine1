import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function OtpOption({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft:150
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('OtpVerification')}>
        <Text style={{color: 'black',fontSize:30}}>OtpOption</Text>
      </TouchableOpacity>
    </View>
  );
}
