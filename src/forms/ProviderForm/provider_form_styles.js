import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'
import { Text } from 'react-native'

const ProviderFormStyled = styled.View`
  width: 350px;
  background-color: ${Colors.white};
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.gray};
  padding: 10px;
`

ProviderFormStyled.title = styled.Text`
  font-family: Arial;
  font-size: 18px;
  color: ${Colors.ambiBlack};
  margin-bottom: 10px;
`

ProviderFormStyled.subtitle = styled.Text`
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-bottom: 10px;
`

ProviderFormStyled.button = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.azure};
  background-color: ${Colors.azure};
  width: 140px;
  align-self: center;
`

ProviderFormStyled.buttonText = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
  align-self: center;
  text-align: center;
  padding: 10px;
`

ProviderFormStyled.ambiResponse = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
ProviderFormStyled.ambiResponseTitle = styled.Text`
  font-family: Arial-BoldMT;
  font-size: 16px;
  color: ${Colors.battleshipGrey};
  margin-left: 8px;
`

ProviderFormStyled.ambiResponseIcons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65px;
  margin-right: 10px;
`

ProviderFormStyled.ambiResponseIcon = styled.Image`
  width: 20px;
  height: 20px;
`

ProviderFormStyled.checkMark = styled.Image`
  margin-left: 50px;
  margin-bottom: 20px;
`

ProviderFormStyled.submitMsg = styled.Text`
  font-family: Arial-BoldMT;
  color: ${Colors.ambiBlack};
  font-size: 16px;
`

export default ProviderFormStyled
