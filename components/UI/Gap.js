import { StyleSheet, Text, View } from 'react-native'

const Gap = ({size, direction = "h"}) => {
  return (
    <View style = {{ [direction === "h" ? "width" : "height"] : size }} />
  )
}

export default Gap