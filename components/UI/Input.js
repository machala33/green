import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import CustomText from './CustomText'

const Input = ({label, textInputConfig}) => {
  return (
    <View style = {styles.rootContainer}>
      <CustomText style = {styles.label}>{label}</CustomText>
      <TextInput style = {styles.input} {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({

  rootContainer: {
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 5
  },  

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "400",
    fontFamily: "sofia-pro-bold",
    color: COLORS.grey[700]
  },

  input : {
    borderColor: COLORS.grey[200],
    borderWidth: 1,
    backgroundColor: COLORS.grey[100],
    fontFamily: "sofia-pro",
    fontSize: 15,
    padding: 10,
    height: 50,
    borderRadius: 3
  }
})