import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default function AddMedicine({ navigation }) {
  const [customStyleIndex, setCustomStyleIndex] = useState(0)

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  }

  const [detail, setDetail] = useState([
    { insurance: '63826373', medicineName: '', quantity: '', frequency: '', duration: '', isadded: false }
  ])

  const addData = (index, item) => {
    if (detail[index].insurance == '' || detail[index].medicineName == '' || detail[index].quantity == '' || detail[index].frequency == ''
      || detail[index].duration == '') {
      Alert.alert("Please enter empty field")
    }
    else {
      let data = Object.assign([], detail, {
        [index]: { ...item, isAdded: true }
      })
      let temp = 0;
      if (temp === 0) {
        data.push({ insurance: '63826373', medicineName: '', quantity: '', frequency: '', duration: '', isadded: false })
        setDetail(data);
      }
    }

  }
  const deleteData = item => {
    const deletedata = detail.filter((data, key) => key != item)
    setDetail(deletedata)

  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SegmentedControlTab
          values={['Upload Prescription file', 'E-prescription number', 'Medicine manually']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={10}
          tabsContainerStyle={styles.tabsContainer}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
        />
        {customStyleIndex === 0 && (
          <View>
            <Text>jfhdj</Text>
          </View>
        )}
        {customStyleIndex === 1 && (
          <View>
            <Text>jfhdj</Text>
          </View>
        )}
        {customStyleIndex === 2 && (
          <View style={styles.view}>


            <FlatList
              data={detail}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.page}>
                    <Text style={styles.medi}>Insurance number</Text>
                    <TextInput
                      style={styles.textInput1}
                      placeholder="Enter name"
                      autoCapitalize="none"

                      value={item?.insurance}
                      onChangeText={text =>
                        setDetail(
                          Object.assign([], detail, {
                            [index]: { ...item, insurance: text },
                          })
                        )}

                    ></TextInput>

                    <Text style={styles.medi}>Medicine Name</Text>
                    <TextInput
                      style={styles.textInput1}
                      placeholder="Search medicine"
                      autoCapitalize="none"

                      value={item?.medicineName}
                      onChangeText={text =>
                        setDetail(
                          Object.assign([], detail, {
                            [index]: { ...item, medicineName: text },
                          })
                        )}

                    ></TextInput>

                    <View style={{ flexDirection: 'row', flex: 1 }}>

                      <View style={{ flex: 0.45, marginRight: 50 }}>
                        <Text style={styles.medi}>Quantity </Text>

                        <TextInput
                          style={styles.textInput4}
                          placeholder="Enter quantity"
                          autoCapitalize="none"
                          keyboardType='numeric'
                          value={item?.quantity}
                          onChangeText={text =>
                            setDetail(
                              Object.assign([], detail, {
                                [index]: { ...item, quantity: text },
                              })
                            )}

                        ></TextInput>
                      </View>
                      <View style={{ flex: 0.5, }}>
                        <Text style={styles.medi}>Frequency</Text>
                        <TextInput
                          style={styles.textInput4}
                          placeholder="Enter Frequency"
                          autoCapitalize="none"
                          keyboardType='numeric'
                          value={item?.frequency}
                          onChangeText={text =>
                            setDetail(
                              Object.assign([], detail, {
                                [index]: { ...item, frequency: text },
                              })
                            )}

                        ></TextInput>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1 }}>

                      <View style={{ flex: 0.5, }}>
                        <Text style={styles.medi}>Duration(Days)</Text>

                        <TextInput
                          style={styles.textInput3}
                          placeholder="Enter Duration"
                          autoCapitalize="none"
                          keyboardType='numeric'
                          value={item?.duration}
                          onChangeText={text =>
                            setDetail(
                              Object.assign([], detail, {
                                [index]: { ...item, duration: text },
                              })
                            )}

                        ></TextInput>
                      </View>

                      <View style={{ flex: 0.5, }}>
                        {detail.length === index + 1 ? (
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => addData(index, item)}
                          >
                            <Text style={styles.medi1}>+ Add More</Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.button2}
                            onPress={() => deleteData(index, item)}
                          >
                            <Text style={styles.medi2}>- Remove</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>

                  </View>
                );
              }}
            />

            <View style={{ justifyContent: 'flex-end', marginTop: 150 }}>
              <TouchableOpacity
                style={{ marginHorizontal: 15, height: 50, borderRadius: 10, backgroundColor: '#1A547F', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>


        )}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  tabsContainer: {
    height: 60,
    marginVertical: 5,
    marginHorizontal: 10
  },
  tabStyle: {
    borderColor: '#1A547F',
    borderRadius: 0,
    borderWidth: 0.25

  },
  activeTabStyle: {
    backgroundColor: '#1A547F',
  },
  tabTextStyle: {
    color: '#1A547F',
    fontWeight: 'bold',
    fontSize: 16,



  },
  activeTabTextStyle: {
    color: 'white',
  },
  textInput: {

    padding: 7,
    margin: '2%',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 2,
    borderWidth: 1,
  },
  textInput1: {
    marginTop: 5,
    padding: 7,
    height: 40,

    fontSize: 16,
    fontWeight: '400',
    borderRadius: 2,
    borderWidth: 0.3,
    marginHorizontal: 20,
    borderColor: '#1A547F'
  },
  textInput2: {
    marginTop: 5,
    padding: 7,
    height: 40,
    width: '83%',
    fontSize: 16,
    fontWeight: '400',
    borderWidth: 0.3,
    marginHorizontal: 20,
    borderColor: '#1A547F',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 0.3,
  },
  textInput4: {
    marginTop: 5,
    padding: 7,
    height: 40,
    width: '85%',
    fontSize: 16,
    fontWeight: '400',
    borderWidth: 0.3,
    marginLeft: 20,
    borderColor: '#1A547F',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 0.3,
  },
  textInput3: {

    padding: 7,
    height: 40,
    width: '68%',
    fontSize: 16,
    fontWeight: '400',
    borderWidth: 0.3,
    marginHorizontal: 20,
    borderColor: '#1A547F',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 0.3,
  },
  view: {
    flex: 1,

  },
  main: {
    flex: 0.15,
    backgroundColor: '#0A4975',
  },
  button: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.3,
    height: 40,
    width: '75%',
    marginHorizontal: 20,
    marginTop: 23,
    left: 10

  },
  button2: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.3,
    height: 40,
    width: '75%',
    marginHorizontal: 20,
    marginTop: 23,
    left: 10

  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',

    alignSelf: 'center',
    marginTop: 15
  },
  page: {
    flex: 1,

    marginVertical: 10,

    height: 320
  },
  medi: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,

    marginTop: 5
  },
  medi1: {
    fontSize: 20,
    fontWeight: 'bold',

    color: '#1A547F'
  },
  medi2: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'red'
  }
});
