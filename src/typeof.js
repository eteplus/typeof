import { strings, types } from './types'

function typeOf(value) {
  if (value === undefined) {
    return types.Undefined
  }

  if (value === null) {
    return types.Null
  }

  const str = Object.prototype.toString.call(value)
  const type = strings[str]
  return type === 'Number' && isNaN(value) ? 'NaN' : type
}

export default typeOf
