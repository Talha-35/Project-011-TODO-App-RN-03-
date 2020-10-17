import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

import {NewTask, Footer} from './components/Index';

const Main = () => {

  const [todoList, setList] = useState([]);
  const [entry, setEntry] = useState('');
  // const [counter, setCounter] = useState(0);

  changeText = (text) => {    
    setEntry(text);
  };

  const counter = todoList.length

  const addTodo = () => {
    const todoElement = {text: entry, id : counter};
    setList([...todoList, todoElement]);
  };

  const delTodo = () => {
    setList([])
  };

 

  const renderData = ({item}) => <NewTask task={item} />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffcc80'}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior= {Platform.OS === "ios" ? "padding" : null} >
        {/* <ScrollView style={{flex: 1}} bounces={false}> */}
        <View style={{flex : 1}}>
          <View style={styles.container}>
            <Text style={styles.textStyle1}>TODO LİST</Text>
            <Text style={styles.number}>{todoList.length}</Text>
          </View>

          <FlatList
            keyExtractor={(item, index) => item.id.toString()}
            data={todoList}
            renderItem={renderData}
          />
          <View style={styles.input}>
            <TextInput
              // value={email}
              placeholder=" Type here to add your TODO!"
              onChangeText={changeText}
              keyboardType="email-address"
              style={styles.input2}
            />
            <TouchableOpacity onPress={addTodo} style={styles.touch}>
              <Text style={styles.text2}>Add TODO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={delTodo} style={styles.touch}>
              <Text style={styles.text2}>Delete</Text>
            </TouchableOpacity>
          </View>
          {/* <Footer /> */}
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    padding: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginRight: -30,
  },
  textStyle1: {
    marginHorizontal: Dimensions.get('window').width * 0.2,
    fontSize: 25,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#bcaaa4',
    borderWidth: 1,
    borderColor: '#4db6ac',
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 15,
    borderRadius: 5,
    // marginHorizontal : 30
  },
  input2: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#90a4ae',
    textAlign: 'center',
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  touch: {
      borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#343A40',
    marginHorizontal: 100,
    justifyContent: 'flex-end',
  },
});
