import React from 'react';
import {Dimensions,  Text, View, StyleSheet,Button, TouchableOpacity} from 'react-native';

const NewTask = ({task}) => {


    // const deleteTodo = (key) => {
    //     setTodos((todos) => {
    //       return todos.filter(todo => todo.key != key);
    //     });
    //   }


    const deleteItem = () => {
        setList((todoList) => {
          return todoList.filter(task => task.id != id)
        })
  }


  // BURAYA DELETE YAPACAK BABAYİĞİT ARANIYOR😊

   


  return (
    <View style={styles.container}>
    
     
      <Text style={styles.text1}>{task.text} </Text>
      <Text style={styles.text1}>{task.id} </Text>

      <TouchableOpacity onPress={() =>deleteItem(task.id)}  style={styles.touch} >
        <Text style={styles.text2}>Delete</Text>
      </TouchableOpacity>
      

    </View>
  );
};

export {NewTask};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: Dimensions.get('window').width,
    flexDirection : "row"
,    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    marginTop : 15,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#eceff1',
    height : 50
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform  : "capitalize",
    color : "black"
  },
  text2: {
    fontWeight: 'bold',
    color : "white"
    
  },
  touch: {
   borderWidth : 1,
   margin: 5,
   padding: 5,
   borderRadius: 8,
   backgroundColor: '#343A40',
  },
});
