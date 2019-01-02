import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Images from '@local/assets'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import Overlay from 'react-native-modal-overlay'
import * as actions from '../actions'
import * as Constants from '../constants/constants'
import { Colors } from '../constants/colors'

import styles from '../styles/forms/ProviderForm'
import globalStyles from '../styles/Global'

class ProviderForm extends Component {
  state = {
    message: 'enter your suggestion details:',
    title: 'suggestion submission form:',
    submitted: false,
    fields: {},
    errors: {},
    overlay: false,
  }

  componentDidMount() {}

  validateForm = () => {
    this.setState({
      errors: {},
    })

    const { fields } = this.state

    const errors = {}
    let isValid = true

    const urlPattern = new RegExp(
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi
    )
    if (!urlPattern.test(fields.website)) {
      isValid = false
      errors.website = 'enter a valid website url...'
    }

    const emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )
    if (!emailPattern.test(fields.email)) {
      isValid = false
      errors.email = 'enter a valid email address...'
    }
    this.setState({ errors })
    return isValid
  }

  submitForm = () => {
    const { fields } = this.state
    const providerResponse = fields
    const { sendProviderResponse } = this.props

    //if (this.validateForm()) {
    sendProviderResponse(providerResponse)
    this.setState({
      submitted: true,
      title: 'submitted suggestion form',
      message:
        'a rep will respond to your suggestion soon! here is what you submitted:',
      overlay: true,
    })
    setTimeout(() => {
      this.setState({ overlay: false })
    }, 2200)
    //}
  }

  handleFieldChange = (field, e) => {
    const { fields } = this.state
    fields[field] = e.target.value
    this.setState({ fields })
  }

  render() {
    const { ambiResponse } = this.props
    const { title, message, submitted, fields, errors, overlay } = this.state
    return (
      <View className={styles.container}>
        <View>
          <Text className={styles.title}>{title}</Text>
          <Text className={styles.subtitle}>{message}</Text>
          <View className={styles.formItem}>
            <Text className={styles.formItemLabel}>name:</Text>
            <TextInput
              type="text"
              disabled={submitted === true}
              className={styles.formItemInput}
              placeholder="enter your name..."
              value={fields.name}
              onChange={e => this.handleFieldChange('name', e)}
            />
          </View>
          <View className={styles.formItem}>
            <Text className={styles.formItemLabel}>company:</Text>
            <TextInput
              type="text"
              disabled={submitted === true}
              className={styles.formItemInput}
              placeholder="enter your company name..."
              value={fields.company}
              onChange={e => this.handleFieldChange('company', e)}
            />
          </View>
          <View className={styles.formItemWithMessage}>
            <Text className={styles.formItemLabel}>website:</Text>
            <TextInput
              type="text"
              disabled={submitted === true}
              className={styles.formItemInput}
              placeholder="enter your company website..."
              value={fields.website}
              autoCapitalize="none"
              onChange={e => this.handleFieldChange('website', e)}
            />
            <Text className={styles.errorMessage}>{errors.website}</Text>
          </View>
          <View className={styles.formItemWithMessage}>
            <Text className={styles.formItemLabel}>email address:</Text>
            <TextInput
              type="text"
              disabled={submitted === true}
              className={styles.formItemInput}
              placeholder="enter your email address..."
              value={fields.email}
              autoCapitalize="none"
              onChange={e => this.handleFieldChange('email', e)}
            />
            <Text className={styles.errorMessage}>{errors.email}</Text>
          </View>
          <View className={styles.formItem}>
            <Text className={styles.formItemLabel}>
              top candy specialty (enter only one):
            </Text>
            <TextInput
              type="text"
              disabled={submitted === true}
              className={styles.formItemInput}
              placeholder="enter a candy name..."
              value={fields.specialty}
              onChange={e => this.handleFieldChange('specialty', e)}
            />
          </View>
          <View className={styles.formItem}>
            <Text className={styles.formItemLabel}>price per unit:</Text>
            <TextInput
              type="text"
              disabled={submitted === true}
              className={styles.formItemInput}
              placeholder="enter a suggested price..."
              value={fields.price}
              onChange={e => this.handleFieldChange('price', e)}
            />
          </View>
          {submitted === false && (
            <View className={styles.formControls}>
              <TouchableOpacity
                style={globalStyles.button}
                onPress={this.submitForm}
                accessibilityLabel="Submit"
              >
                <Text style={globalStyles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}

          {submitted && (
            <View className={styles.ambiResponse}>
              <Text className={styles.ambiResponseTitle}>
                candy store rep response:
              </Text>
              <View className={styles.ambiResponseIcons}>
                <Image
                  source={
                    ambiResponse === Constants.REJECT
                      ? Images.thumbsDownSubmitted
                      : Images.thumbsDown
                  }
                  accessibilityLabel="Reject"
                  style={{ height: 20, width: 20 }}
                />
                <Image
                  source={
                    ambiResponse === Constants.ACCEPT
                      ? Images.thumbsUpSubmitted
                      : Images.thumbsUp
                  }
                  accessibilityLabel="Accept"
                  style={{ height: 20, width: 20 }}
                />
              </View>
            </View>
          )}

          <Overlay
            visible={overlay}
            containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.78)' }}
            childrenWrapperStyle={{ backgroundColor: '#ffffff' }}
          >
            <View>
              <Image
                source={Images.checkMark}
                style={{ marginLeft: 50, marginBottom: 20 }}
                alt="check mark"
              />
              <Text
                style={{
                  fontFamily: 'Arial-BoldMT',
                  color: Colors.ambiBlack,
                  fontSize: 16,
                }}
              >
                Form Submitted!
              </Text>
            </View>
          </Overlay>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { ambiResponse } = state.app
  return ambiResponse || {}
}

ProviderForm.propTypes = {
  ambiResponse: PropTypes.string,
  sendProviderResponse: PropTypes.func,
}

ProviderForm.defaultProps = {
  ambiResponse: null,
  sendProviderResponse: undefined,
}

export default connect(
  mapStateToProps,
  actions
)(ProviderForm)
