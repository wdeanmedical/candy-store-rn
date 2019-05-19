import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import Images from '@local/assets/index'
import * as actions from '../../actions'
import * as Constants from '../../constants/constants'
import ResponseFormStyled from './response_form_styles'

class ResponseForm extends Component {
  state = {}

  componentDidMount() {}

  sendAmbiResponse = ambiResponse => {
    const { sendAmbiResponse } = this.props
    sendAmbiResponse({ ambiResponse })
  }

  render() {
    const { providerResponse, ambiResponse } = this.props
    return (
      <ResponseFormStyled>
        <ResponseFormStyled.title>
          submitted suggestion form
        </ResponseFormStyled.title>
        {providerResponse === null && (
          <ResponseFormStyled.subtitle>
            currently waiting for a response...
          </ResponseFormStyled.subtitle>
        )}
        {providerResponse && (
          <View>
            <ResponseFormStyled.responseTitle>
              suggestion:
            </ResponseFormStyled.responseTitle>

            <ResponseFormStyled.response>
              <ResponseFormStyled.responseItem>
                {providerResponse.name}
              </ResponseFormStyled.responseItem>
              <ResponseFormStyled.responseItem>
                {providerResponse.company}
              </ResponseFormStyled.responseItem>
              <ResponseFormStyled.responseItem>
                {providerResponse.website}
              </ResponseFormStyled.responseItem>
              <ResponseFormStyled.responseItem>
                {providerResponse.email}
              </ResponseFormStyled.responseItem>
              <ResponseFormStyled.responseItem>
                {providerResponse.specialty}
              </ResponseFormStyled.responseItem>
              <ResponseFormStyled.responseItem>
                {providerResponse.price}
              </ResponseFormStyled.responseItem>
            </ResponseFormStyled.response>

            <ResponseFormStyled.responseForm>
              <ResponseFormStyled.controlTitle>
                submit a response:
              </ResponseFormStyled.controlTitle>
              <ResponseFormStyled.controls>
                <TouchableOpacity
                  onPress={() => this.sendAmbiResponse(Constants.REJECT)}
                  accessibilityLabel="Reject"
                >
                  <ResponseFormStyled.ambiResponse
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
                  <ResponseFormStyled.ambiResponse
                    source={
                      ambiResponse &&
                      ambiResponse.ambiResponse === Constants.ACCEPT
                        ? Images.thumbsUpButtonSubmitted
                        : Images.thumbsUpButton
                    }
                  />
                </TouchableOpacity>
              </ResponseFormStyled.controls>
            </ResponseFormStyled.responseForm>
          </View>
        )}
      </ResponseFormStyled>
    )
  }
}

const mapStateToProps = state => {
  const { providerResponse, ambiResponse } = state.app
  console.log('providerResponse', providerResponse)
  return { providerResponse, ambiResponse }
}

ResponseForm.propTypes = {
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

ResponseForm.defaultProps = {
  sendAmbiResponse: undefined,
  providerResponse: {},
  ambiResponse: null,
}

export default connect(
  mapStateToProps,
  actions
)(ResponseForm)
