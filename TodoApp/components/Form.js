import React, { useState } from 'react'
import { StyleSheet,View, TextInput, Button } from 'react-native'
function Form({addTodo}) {
    const [text,setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
  return (
    <View style={styles.content}>
        <TextInput style={styles.input} placeholder='New Todo..' 
        onChangeText={changeHandler}
        />
        <Button onPress={()=> addTodo(text)}title='Add Todo' color='coral'/>
    </View>
  )
}
const styles = StyleSheet.create({
    content:{
        paddingHorizontal:48,
        margin:20,
    },
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderColor:'#ddd'
    }

})
export default Form