import * as React from "react"
import { StyleSheet, Text, View, ViewStyle } from "react-native"

const Card = props => {
  return (
    <View style={[styles.titleContainer, props.style]}>
      <Text style={styles.subtitle}>{props.texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  titleContainer: {
    marginTop: 20,
    paddingTop: 30,
    paddingBottom: 16,
    backgroundColor: 'gray'
  },
})

export default Card