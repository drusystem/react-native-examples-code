import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

export default BoxObjectModel

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    borderWidth:10,
    paddingHorizontal:100,
    paddingVertical:20,
    marginHorizontal:20
    // backgroundColor:'red'
  },
  container:{
    backgroundColor:'red',
    flex:1
  }
});