import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image } from 'react-native'
import Images from '@local/assets/index'
import * as actions from '../actions'
import * as Constants from '../constants/constants'
import { Colors } from '../constants/colors'

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.cardBorderColor,
    padding: 20,
  },
  title: {
    fontFamily: 'Arial-Black',
    fontSize: 16,
    color: Colors.ambiBlack,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.battleshipGrey,
    marginTop: 20,
    marginBottom: 20,
  },
  providerResponse: {
    marginLeft: 20,
  },
  providerResponseTitle: {
    fontSize: 13,
    color: Colors.battleshipGrey,
    marginTop: 13,
    marginBottom: 18,
  },
  providerResponseItem: {
    fontFamily: 'Arial-BoldMT',
    fontSize: 14,
    color: Colors.ambiBlack,
    marginTop: 6,
    marginBottom: 6,
  },
  responseForm: {
    marginLeft: 20,
  },
  responseControlTitle: {
    fontFamily: 'Arial-BoldMT',
    fontSize: 13,
    color: Colors.battleshipGrey,
    marginTop: 15,
  },
  responseControls: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 75,
    marginTop: 10,
    marginLeft: 25,
  },
  errorMessage: {
    textAlign: 'right',
    fontSize: 12,
    color: Colors.ambiErrorColor,
    minHeight: 18,
  },
})

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
  return { providerResponse, ambiResponse }
}

ProviderResponseForm.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  sendAmbiResponse: PropTypes.func,
  providerResponse: PropTypes.object,
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
