import * as React from "react"
import { StyleSheet, ScrollView, View, ViewStyle } from "react-native"

const ScreenContainer = props => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[
        styles.contentContainer,
        {
          backgroundColor: "white"
        },
      ]}
      style={{
        flex: 1,
        backgroundColor: "white" }}
    >
      {props.children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    flexGrow: 1
  }
})

export default ScreenContainer