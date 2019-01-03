import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.gray,
    padding: 10,
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 18,
    color: Colors.ambiBlack,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.battleshipGrey,
    marginBottom: 10,
  },
  formItem: {
    marginTop: 0,
    marginBottom: 15,
  },
  formItemLabel: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: Colors.ambiBlack,
    marginLeft: 4,
    marginBottom: 2,
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
    fontSize: 14,
    color: Colors.ambiErrorColor,
    minHeight: 18,
  },
  ambiResponse: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ambiResponseTitle: {
    fontFamily: 'Arial-BoldMT',
    fontSize: 16,
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
