import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingOverlay = () => {
  return (
    <View style = {styles.rootContainer}>
        <ActivityIndicator size="small" />
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // padding: 32
    }
})