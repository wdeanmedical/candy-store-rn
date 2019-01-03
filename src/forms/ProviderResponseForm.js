import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image } from 'react-native'
import Images from '@local/assets/index'
import * as actions from '../actions'
import * as Constants from '../constants/constants'

import styles from '../styles/forms/ProviderResponseForm'

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
      <View style={styles.container}>
        <Text style={styles.title}>submitted suggestion form</Text>
        {providerResponse === null && (
          <Text style={styles.subtitle}>
            currently waiting for a response...
          </Text>
        )}
        {providerResponse && (
          <View>
            <Text style={styles.providerResponseTitle}>suggestion:</Text>

            <View style={styles.providerResponse}>
              <Text style={styles.providerResponseItem}>
                {providerResponse.name}
              </Text>
              <Text style={styles.providerResponseItem}>
                {providerResponse.company}
              </Text>
              <Text style={styles.providerResponseItem}>
                {providerResponse.website}
              </Text>
              <Text style={styles.providerResponseItem}>
                {providerResponse.email}
              </Text>
              <Text style={styles.providerResponseItem}>
                {providerResponse.specialty}
              </Text>
              <Text style={styles.providerResponseItem}>
                {providerResponse.price}
              </Text>
            </View>

            <View style={styles.responseForm}>
              <Text style={styles.responseControlTitle}>
                submit a response:
              </Text>
              <View style={styles.responseControls}>
                <Image
                  source={
                    ambiResponse &&
                    ambiResponse.ambiResponse === Constants.REJECT
                      ? Images.thumbsDownSubmitted
                      : Images.thumbsDown
                  }
                  accessibilityLabel="Reject"
                  style={{ height: 30, width: 30 }}
                  onClick={() => this.sendAmbiResponse(Constants.REJECT)}
                />
                <Image
                  source={
                    ambiResponse &&
                    ambiResponse.ambiResponse === Constants.ACCEPT
                      ? Images.thumbsUpSubmitted
                      : Images.thumbsUp
                  }
                  accessibilityLabel="Reject"
                  style={{ height: 30, width: 30 }}
                  onClick={() => this.sendAmbiResponse(Constants.ACCEPT)}
                />
              </View>
            </View>
          </View>
        )}
      </View>
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
  ambiResponse: PropTypes.string,
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
