import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  Button,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const managePasswordvisbility = () => {
    isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true);
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.main}>
          <Image
            style={styles.main1}
            source={require('/Users/prajjwalgupta/Documents/navigation-sample-ready/src/images/1.png')}></Image>
          <Text style={styles.title}>Welcome !</Text>
          <Text style={styles.title1}>Sign in to Continue</Text>
        </View>
        <View style={styles.phone}>
          <Text style={styles.text}>Phone Number</Text>
          <TextInput
            style={styles.textInputEmail}
            placeholder="Enter Phone Number"
            autoCapitalize="none"
            value={phone}
            onChangeText={text => setPhone(text)}></TextInput>
          <Text style={styles.textPassword}>Password</Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              autoCapitalize="none"
              secureTextEntry={isPasswordSecure}
              value={password}
              onChangeText={text => setPassword(text)}></TextInput>

            <TouchableOpacity style={styles.eye}>
              <Icon
                name={isPasswordSecure ? 'eye-off' : 'eye'}
                size={30}
                color={'rgba(0, 0, 0, 0.27)'}
                onPress={() => managePasswordvisbility()}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.check}>
            <View style={styles.check1}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={{fontSize: 16, color: '#1A547F'}}>
                Keep me signed in
              </Text>
            </View>
            <View style={{marginLeft: 40}}>
              <TouchableOpacity>
                <Text style={styles.pass}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 0.3, marginTop: 25}}>
          <TouchableOpacity
            style={styles.modal}
            onPress={() => setModalVisible(true)}>
            <Text style={{color: 'white'}}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {}}>
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <View
              style={{
                flex: 0.45,
                marginTop: 'auto',
              }}>
              <View style={styles.footer}>
                <Text style={styles.headerText}>Two factor authentication</Text>
                <Text style={styles.headerText1}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  justifyContent: 'space-evenly',
                  paddingHorizontal: 40,
                }}>
                <View>
                  <TouchableOpacity style={styles.img}>
                    <Image
                      source={require('/Users/prajjwalgupta/Documents/navigation-sample-ready/src/images/3.png')}
                      style={{width: 60, height: 60}}></Image>
                    <Text style={{fontWeight: '600'}}>Phone number</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={styles.img}>
                    <Image
                      source={require('/Users/prajjwalgupta/Documents/navigation-sample-ready/src/images/2.png')}
                      style={{width: 60, height: 60}}></Image>
                    <Text style={{fontWeight: '600'}}>Email Address</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.add}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.addButtonText1}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addButton1}
                  onPress={() => navigation.navigate('OtpVerification')}>
                  <Text style={styles.addButtonText}>continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.sign}>
          <Text style={{fontSize: 18}}>
            Don't have an account yet ?<Text style={styles.up}> Sign Up</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 220,
    flex: 0.4,
    backgroundColor: '#1A547F',
    justifyContent: 'center',
  },
  main1: {
    width: 65,
    height: 65,
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginTop: 20,
  },
  title1: {
    fontSize: 23,
    fontWeight: '300',
    color: 'white',
    marginLeft: 20,
    marginTop: 10,
  },
  up: {
    color: '#1A547F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  add: {
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  phone: {
    flex: 0.4,
    marginTop: 20,
  },
  sign: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'space-evenly',
  },
  check1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  pass: {
    fontSize: 16,
    justifyContent: 'flex-end',
    color: '#1A547F',
    marginRight: 30,
  },
  modal: {
    marginHorizontal: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#1A547F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 110,
    height: 110,
    borderWidth: 0.2,
    alignItems: 'center',
    borderColor: '#1A547F',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'rgba(0.0.0.0.3)',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: '4%',
    color: '#1A547F',
  },
  textPassword: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: '4%',
    color: '#1A547F',
  },
  textInputEmail: {
    padding: 7,
    margin: '4%',
    bottom: 10,
    fontSize: 18,
    fontWeight: '400',
    borderColor: '#1A547F',
    borderRadius: 10,
    borderWidth: 1,
  },
  textInput: {
    padding: 7,
    margin: '4%',
    bottom: 10,
    fontSize: 16,
    fontWeight: '400',
    borderColor: '#1A547F',
    borderRadius: 10,
    borderWidth: 1,
  },
  eye: {
    position: 'absolute',
    right: 30,
    bottom: 29,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButton1: {
    backgroundColor: '#1A547F',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    paddingHorizontal: 26,
    marginTop: 26,
    fontWeight: '500',
  },
  headerText1: {
    marginTop: 5,
    fontSize: 16,
    marginHorizontal: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  addButtonText1: {
    color: '#1A547F',
    fontSize: 18,
  },
  bottomText: {
    fontSize: 14,
    color: '#1A547F',
    padding: 4,
    margin: '2%',
  },
  loginBtn: {
    padding: 10,
  },
  button: {
    alignItems: 'center',
    borderRadius: 2,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 5,
    color: 'rgba(0, 0, 0, 1)',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginLeft: '5%',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});
