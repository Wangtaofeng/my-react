import { INCREASE, DECREASE } from '../constCount'
const initCount = 0
export default function count (prestate = initCount, action) {
  const { type, data } = action
  switch (type) {
    case INCREASE: return prestate + data
    case DECREASE: return prestate - data
    default: return prestate
  }
}