import { StyleSheet } from 'react-native'

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
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: 'black',
  },
  overlayContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  overlayText: {
    fontFamily: 'Arial-BoldMT',
    color: Colors.ambiBlack,
    fontSize: 16,
  },
  checkMark: {
    marginLeft: 50,
    height: 20,
    width: 28,
  },
})

export default styles
