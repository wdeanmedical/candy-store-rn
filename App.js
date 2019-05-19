import React from 'react'
import { Provider } from 'react-redux'
import store from './src/config/store'
import OrderForm from './src/forms/OrderForm/OrderForm'
import ResponseForm from './src/forms/ResponseForm/ResponseForm'
import AppStyled from './app_styles'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyled>
          <AppStyled.container>
            <OrderForm />
            <AppStyled.screenDivider />
            <ResponseForm />
          </AppStyled.container>
        </AppStyled>
      </Provider>
    )
  }
}

export default App
