import { ADDPERSON } from '../constCount'

const initPersons = [{ id: '001', name: 'tongtong', age: 18 }]
export default function person (prestate = initPersons, action) {
  const { type, data } = action
  switch (type) {
    case ADDPERSON: return [data, ...prestate]
    default: return prestate
  }
}