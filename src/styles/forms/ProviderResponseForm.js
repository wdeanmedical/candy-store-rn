import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.gray,
    padding: 20,
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
    marginTop: 20,
    marginBottom: 20,
  },
  providerResponse: {
    marginLeft: 20,
  },
  providerResponseTitle: {
    fontSize: 16,
    color: Colors.ambiBlack,
    marginTop: 12,
    marginBottom: 16,
  },
  providerResponseItem: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: Colors.ambiBlack,
    marginTop: 6,
    marginBottom: 6,
  },
  responseForm: {
    marginLeft: 20,
  },
  responseControlTitle: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: Colors.ambiBlack,
    marginTop: 15,
  },
  responseControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 75,
    marginTop: 10,
    marginLeft: 25,
  },
})

export default styles
