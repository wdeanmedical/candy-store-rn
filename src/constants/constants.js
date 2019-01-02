import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window').height
export const SCREEN_HEIGHT = height

const { width } = Dimensions.get('window').width
export const SCREEN_WIDTH = width

// Platform Types
export const IOS = 'ios'
export const ANDROID = 'android'

export const ACCEPT = 'accept'
export const REJECT = 'reject'
