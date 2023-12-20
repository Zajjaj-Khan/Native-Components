import React from 'react'
import {  StyleSheet,View,Text} from 'react-native'
function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>Todo App</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor: 'orange',
        height:88,
        marginBottom:30

    },
    text:{
        marginTop:45,
        fontSize:24,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'

    }
})
export default Header