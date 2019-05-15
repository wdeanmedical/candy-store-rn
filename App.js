import React from 'react'
import { ScrollView } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/config/store'
import ProviderForm from './src/forms/ProviderForm'
import ProviderResponseForm from './src/forms/ProviderResponseForm'
import AppStyled from './app_styles'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyled>
          <AppStyled.container>
            <ProviderForm />
            <AppStyled.screenDivider />
            <ProviderResponseForm />
          </AppStyled.container>
        </AppStyled>
      </Provider>
    )
  }
}

export default App
