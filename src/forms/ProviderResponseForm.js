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
      <View className={styles.container}>
        <Text className={styles.title}>submitted suggestion form</Text>
        {providerResponse === null && (
          <Text className={styles.subtitle}>
            currently waiting for a response...
          </Text>
        )}
        {providerResponse && (
          <View>
            <Text className={styles.providerResponseTitle}>suggestion:</Text>

            <View className={styles.providerResponse}>
              <Text className={styles.providerResponseItem}>
                {providerResponse.name}
              </Text>
              <Text className={styles.providerResponseItem}>
                {providerResponse.company}
              </Text>
              <Text className={styles.providerResponseItem}>
                {providerResponse.website}
              </Text>
              <Text className={styles.providerResponseItem}>
                {providerResponse.email}
              </Text>
              <Text className={styles.providerResponseItem}>
                {providerResponse.specialty}
              </Text>
              <Text className={styles.providerResponseItem}>
                {providerResponse.price}
              </Text>
            </View>

            <View className={styles.responseForm}>
              <Text className={styles.responseControlTitle}>
                submit a response:
              </Text>
              <View className={styles.responseControls}>
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
