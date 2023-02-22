import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Button,
  ScrollView,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function OtpVerification({navigation}) {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.mainView}>
        <View
          style={{
            marginTop: 30,
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={styles.mainHeading}>
            Verification Code sent <Text>on +91 4545454545</Text>
          </Text>

          <View>
            <OTPInputView
              style={{
                width: '50%',
                height: 120,
                alignSelf: 'center',
                justifyContent: 'space-around',
              }}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
            />
          </View>
        </View>

        <View style={{flex: 2.2, marginTop: 15, justifyContent: 'flex-start'}}>
          <TouchableOpacity
            style={{
              marginHorizontal: 15,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#1A547F',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('AddMedicine')}>
            <Text style={{color: 'white'}}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{color: 'black', fontSize: 18}}>
            Did not recieve code?{' '}
            <Text style={{color: '#1A547F', fontSize: 18, fontWeight: '600'}}>
              {' '}
              Resend Code
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  numberView: {
    flexDirection: 'row',
    padding: 20,
    flex: 0.06,
  },
  number: {
    height: 50,
    flex: 1,
    backgroundColor: '#F7F7FC',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  flag: {
    height: 50,
    width: 50,
    marginLeft: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#F7F7FC',
  },
  underlineStyleHighLighted: {
    borderColor: '#1A547F',
  },
  code: {
    height: 50,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#F7F7FC',
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 20,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  bottomView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  bottomView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },

  borderStyleBase: {
    width: 35,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    marginHorizontal: 5,
  },
});
