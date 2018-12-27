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
import * as actions from '../actions'
import * as Constants from '../constants/constants'
import { Colors } from '../constants/colors'
import Styles from '../styles/Styles'

const styles = StyleSheet.create({
  container: {
    width: 500,
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
  },
  subtitle: {
    fontSize: 13,
    color: Colors.battleshipGrey,
    marginBottom: 10,
  },
  formItem: {
    marginTop: 0,
    marginBottom: 15,
  },
  formItemLabel: {
    fontFamily: 'Arial-BoldMT',
    fontSize: 13,
    color: Colors.battleshipGrey,
    marginLeft: 8,
  },
  formItemInput: {
    width: '100%',
    fontSize: 14,
    color: Colors.ambiBlack,
    height: 38,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderColor: Colors.textInputBorderColor,
    borderWidth: 1,
  },
  errorMessage: {
    textAlign: 'right',
    fontSize: 12,
    color: Colors.ambiErrorColor,
    minHeight: 18,
  },
  ambiResponse: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ambiResponseTitle: {
    fontFamily: 'Arial-BoldMT',
    fontSize: 13,
    color: Colors.battleshipGrey,
    marginLeft: 8,
  },
  ambiResponseIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 65,
    marginRight: 10,
  },
})

class ProviderForm extends Component {
  state = {
    name: '',
    company: '',
    website: '',
    email: '',
    specialty: '',
    price: '',
    message: 'enter your suggestion details:',
    title: 'suggestion submission form:',
    submitted: false,
    errors: {},
  }

  componentDidMount() {}

  validateForm = () => {
    this.setState({
      errors: {},
    })

    const { email, website } = this.state

    const errors = {}
    let isValid = true

    const urlPattern = new RegExp(
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi
    )
    if (!urlPattern.test(website)) {
      isValid = false
      errors.website = 'enter a valid website url...'
    }

    const emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )
    if (!emailPattern.test(email)) {
      isValid = false
      errors.email = 'enter a valid email address...'
    }
    this.setState({ errors })
    return isValid
  }

  submitForm = () => {
    const { name, company, website, email, specialty, price } = this.state
    const providerResponse = { name, company, website, email, specialty, price }
    const { sendProviderResponse } = this.props

    if (this.validateForm()) {
      sendProviderResponse(providerResponse)
      this.setState({
        submitted: true,
        title: 'submitted suggestion form',
        message:
          'a rep will respond to your suggestion soon! here is what you submitted:',
      })
    }
  }

  render() {
    const { ambiResponse } = this.props
    const {
      title,
      message,
      name,
      company,
      website,
      email,
      specialty,
      price,
      submitted,
      errors,
    } = this.state
    return (
      <View className={styles.container}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.subtitle}>{message}</Text>
        <View className={styles.formItem}>
          <Text className={styles.formItemLabel}>name:</Text>
          <TextInput
            type="text"
            disabled={submitted === true}
            className={styles.formItemInput}
            placeholder="enter your name..."
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </View>
        <View className={styles.formItem}>
          <Text className={styles.formItemLabel}>company:</Text>
          <TextInput
            type="text"
            disabled={submitted === true}
            className={styles.formItemInput}
            placeholder="enter your company name..."
            value={company}
            onChange={e => this.setState({ company: e.target.value })}
          />
        </View>
        <View className={styles.formItemWithMessage}>
          <Text className={styles.formItemLabel}>website:</Text>
          <TextInput
            type="text"
            disabled={submitted === true}
            className={styles.formItemInput}
            placeholder="enter your company website..."
            value={website}
            autoCapitalize="none"
            onChange={e => this.setState({ website: e.target.value })}
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
            value={email}
            autoCapitalize="none"
            onChange={e => this.setState({ email: e.target.value })}
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
            value={specialty}
            onChange={e => this.setState({ specialty: e.target.value })}
          />
        </View>
        <View className={styles.formItem}>
          <Text className={styles.formItemLabel}>price per unit:</Text>
          <TextInput
            type="text"
            disabled={submitted === true}
            className={styles.formItemInput}
            placeholder="enter a suggested price..."
            value={price}
            onChange={e => this.setState({ price: e.target.value })}
          />
        </View>
        {submitted === false && (
          <View className={styles.formControls}>
            <TouchableOpacity
              style={Styles.button}
              onPress={this.submitForm}
              accessibilityLabel="Submit"
            >
              <Text style={Styles.buttonText}>Submit</Text>
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
