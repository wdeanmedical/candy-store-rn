import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

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
    fontFamily: 'Arial',
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
    fontFamily: 'Arial',
    fontSize: 14,
    color: Colors.ambiBlack,
    marginTop: 6,
    marginBottom: 6,
  },
  responseForm: {
    marginLeft: 20,
  },
  responseControlTitle: {
    fontFamily: 'Arial',
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

export default styles
