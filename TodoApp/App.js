import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';


export default function App() {
  const [todos,setTodos] = useState([
    {text:'Take a bath', key:'1'},
    {text:'Charge your Phone', key:'2'},
    {text:'Eat BreakFast', key:'3'},
    {text:'Read Newpaper', key:'4'},
    {text:'Create react Apps', key:'5'},

  ])
  const deleteItem =(id)=>{
    const newTodo= todos.filter(todo=> todo.key!== id)  // filter out the item with that particular ID and set it to
    setTodos(newTodo)
  }
  const addTodo = (text) =>{
    setTodos((prevTodo) =>{
      return[{ text:text,key : Math.random().toString()},...prevTodo]
  })};
  return (
    <View style={styles.container}> 
      <Header/>
      {/* Header */}
      <View>
        <Form addTodo = {addTodo}/>
        {/* Form */}
        <View style={styles.list}>
          <FlatList
          data = {todos}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>deleteItem(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
          )}
          
          
          />
        </View>
      </View>

      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    fontSize:18,
    marginLeft:20,
    textAlign:'center',
    padding:12,
    borderWidth:2,
    borderColor:'#ddd',
    borderStyle:'dashed',
    marginBottom:7

  },
  list:{
    marginTop:10,
    paddingHorizontal:30,
    
  }
});
