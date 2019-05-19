import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import Images from '@local/assets/index'
import * as actions from '../../actions'
import * as Constants from '../../constants/constants'
import ProviderResponseFormStyled from './provider_response_form_styles'

class ProviderResponseForm extends Component {
  state = {}

  componentDidMount() {}

  sendAmbiResponse = ambiResponse => {
    const { sendAmbiResponse } = this.props
    sendAmbiResponse({ ambiResponse })
  }

  render() {
    const { providerResponse, ambiResponse } = this.props
    return (
      <ProviderResponseFormStyled>
        <ProviderResponseFormStyled.title>
          submitted suggestion form
        </ProviderResponseFormStyled.title>
        {providerResponse === null && (
          <ProviderResponseFormStyled.subtitle>
            currently waiting for a response...
          </ProviderResponseFormStyled.subtitle>
        )}
        {providerResponse && (
          <View>
            <ProviderResponseFormStyled.responseTitle>
              suggestion:
            </ProviderResponseFormStyled.responseTitle>

            <ProviderResponseFormStyled.response>
              <ProviderResponseFormStyled.responseItem>
                {providerResponse.name}
              </ProviderResponseFormStyled.responseItem>
              <ProviderResponseFormStyled.responseItem>
                {providerResponse.company}
              </ProviderResponseFormStyled.responseItem>
              <ProviderResponseFormStyled.responseItem>
                {providerResponse.website}
              </ProviderResponseFormStyled.responseItem>
              <ProviderResponseFormStyled.responseItem>
                {providerResponse.email}
              </ProviderResponseFormStyled.responseItem>
              <ProviderResponseFormStyled.responseItem>
                {providerResponse.specialty}
              </ProviderResponseFormStyled.responseItem>
              <ProviderResponseFormStyled.responseItem>
                {providerResponse.price}
              </ProviderResponseFormStyled.responseItem>
            </ProviderResponseFormStyled.response>

            <ProviderResponseFormStyled.responseForm>
              <ProviderResponseFormStyled.controlTitle>
                submit a response:
              </ProviderResponseFormStyled.controlTitle>
              <ProviderResponseFormStyled.controls>
                <TouchableOpacity
                  onPress={() => this.sendAmbiResponse(Constants.REJECT)}
                  accessibilityLabel="Reject"
                >
                  <ProviderResponseFormStyled.ambiResponse
                    source={
                      ambiResponse &&
                      ambiResponse.ambiResponse === Constants.REJECT
                        ? Images.thumbsDownButtonSubmitted
                        : Images.thumbsDownButton
                    }
                    accessibilityLabel="Reject"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.sendAmbiResponse(Constants.ACCEPT)}
                  accessibilityLabel="Accept"
                >
                  <ProviderResponseFormStyled.ambiResponse
                    source={
                      ambiResponse &&
                      ambiResponse.ambiResponse === Constants.ACCEPT
                        ? Images.thumbsUpButtonSubmitted
                        : Images.thumbsUpButton
                    }
                  />
                </TouchableOpacity>
              </ProviderResponseFormStyled.controls>
            </ProviderResponseFormStyled.responseForm>
          </View>
        )}
      </ProviderResponseFormStyled>
    )
  }
}

const mapStateToProps = state => {
  const { providerResponse, ambiResponse } = state.app
  console.log('providerResponse', providerResponse)
  return { providerResponse, ambiResponse }
}

ProviderResponseForm.propTypes = {
  sendAmbiResponse: PropTypes.func,
  providerResponse: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    specialty: PropTypes.string,
    price: PropTypes.string,
  }),
  ambiResponse: PropTypes.shape({
    ambiResponse: PropTypes.string,
  }),
}

ProviderResponseForm.defaultProps = {
  sendAmbiResponse: undefined,
  providerResponse: {},
  ambiResponse: null,
}

export default connect(
  mapStateToProps,
  actions
)(ProviderResponseForm)
