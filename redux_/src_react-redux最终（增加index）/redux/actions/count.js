import { INCREASE, DECREASE } from '../constCount'
export const creatIncreaseAction = data => ({ type: INCREASE, data })
export const creatDecreaseAction = data => ({ type: DECREASE, data })
export const createIncrementAsyncAction = data => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: INCREASE, data })
    }, 500)
  }
}