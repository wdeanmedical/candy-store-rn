import React from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import FieldShape from '../shapes/FieldShape'
import styles from '../styles/forms/ProviderForm.js'

const FormTextInput = props => {
  const { field, submitted, handleFieldChange, value, errorMessage } = props
  return (
    <View style={styles.formItemWithMessage}>
      <Text style={styles.formItemLabel}>{field.label}</Text>
      <TextInput
        autoCapitalize="none"
        editable={submitted === false}
        style={
          submitted === false
            ? styles.formItemInput
            : [styles.formItemInput, styles.formItemInputDisabled]
        }
        placeholder={field.placeholder}
        value={value}
        onChangeText={value => handleFieldChange(field.name, value)}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  )
}

FormTextInput.propTypes = {
  handleFieldChange: PropTypes.func,
  submitted: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  field: PropTypes.shape(FieldShape),
}

FormTextInput.defaultProps = {
  handleFieldChange: undefined,
  submitted: false,
  value: '',
  errorMessage: '',
  field: {},
}

export default FormTextInput
