import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.text}>To delete the text clcik on it</Text>
        <Text style={styles.text}>Version 1.0.0</Text>

    </View>
  )
}
const styles = StyleSheet.create({
    footer:{
        marginTop:12
    },
    text:{
        color:'#ddd',
        fontSize:12,
        fontStyle:"italic",
        textAlign:'center',
        fontWeight:'bold'
    }
})
export default Footer