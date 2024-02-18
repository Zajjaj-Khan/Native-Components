import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const SignUp = ({navigation}) => {
    function openDrawerHandler(){
        navigation.toggleDrawer();
    }
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler}/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

