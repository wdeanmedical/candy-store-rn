import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    width: 500,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.cardBorderColor,
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: 'Arial',
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
    fontFamily: 'Arial',
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

export default styles
