import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import store from './src/config/store'
import ProviderForm from './src/forms/ProviderForm'
import ProviderResponseForm from './src/forms/ProviderResponseForm'
import { Colors } from './src/constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenDivider: {
    width: 2,
    backgroundColor: Colors.dividerColor,
  },
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ProviderForm />
          <View style={styles.screenDivider} />
          <ProviderResponseForm />
        </View>
      </Provider>
    )
  }
}

export default App
