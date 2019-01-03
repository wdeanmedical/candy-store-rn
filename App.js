import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import store from './src/config/store'
import ProviderForm from './src/forms/ProviderForm'
import ProviderResponseForm from './src/forms/ProviderResponseForm'
import { Colors } from './src/constants/colors'

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  screenDivider: {
    height: 30,
  },
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <View style={styles.container}>
            <ProviderForm />
            <View style={styles.screenDivider} />
            <ProviderResponseForm />
          </View>
        </ScrollView>
      </Provider>
    )
  }
}

export default App
