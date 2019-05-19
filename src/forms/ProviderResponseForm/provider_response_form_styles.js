import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'
import { Text } from 'react-native'
import ProviderFormStyled from '../ProviderForm/provider_form_styles'

const ProviderResponseFormStyled = styled.View`
  width: 350px;
  background-color: ${Colors.white};
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.gray};
  padding: 20px;
`

ProviderResponseFormStyled.controls = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75px;
  margin-top: 10px;
  margin-left: 25px;
`

ProviderResponseFormStyled.title = styled.Text`
  font-family: Arial;
  font-size: 18px;
  color: ${Colors.ambiBlack};
  margin-bottom: 10px;
`

ProviderResponseFormStyled.responseItem = styled.Text`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.ambiBlack};
  margin-top: 6px;
  margin-bottom: 6px;
`
ProviderResponseFormStyled.controlTitle = styled.Text`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.ambiBlack};
  margin-top: 15px;
`

ProviderResponseFormStyled.response = styled.View`
  margin-left: 20px;
`

ProviderResponseFormStyled.responseForm = styled.View`
  margin-left: 20px;
`

ProviderResponseFormStyled.responseTitle = styled.Text`
  font-size: 16px;
  color: ${Colors.ambiBlack};
  margin-top: 12px;
  margin-bottom: 16px;
`

ProviderResponseFormStyled.subtitle = styled.Text`
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-top: 20px;
  margin-bottom: 20px;
`

ProviderResponseFormStyled.ambiResponse = styled.Image`
  width: 30px;
  height: 30px;
`

export default ProviderResponseFormStyled
