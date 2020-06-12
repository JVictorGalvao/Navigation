import * as React from "react"
import { StyleSheet, Text, View, ViewStyle, Button } from "react-native"

const CardButton = props  => {
  return (
    <View style={[styles.titleContainer, props.style]}>
      <Text style={styles.subtitle}>{props.texto}</Text>
      <View style={styles.button}>
        <Button  title={props.titulobotao}
          onPress={props.navegacao}
          />
      </View>
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
    backgroundColor: 'gray',
  },
  button: {
    margin: 20,
    justifyContent: 'center'
  },
})

export default CardButton