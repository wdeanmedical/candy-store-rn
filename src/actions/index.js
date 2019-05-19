import { ORDER_SUCCESS, RESPONSE_SUCCESS } from './types'

export function sendOrder(response) {
  return {
    type: ORDER_SUCCESS,
    payload: response,
  }
}

export function sendResponse(response) {
  return {
    type: RESPONSE_SUCCESS,
    payload: response,
  }
}
