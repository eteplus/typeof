const list = [
  'Null',
  'Undefined',
  'NaN',
  'Arguments',
  'Number',
  'String',
  'Array',
  'Object',
  'Date',
  'Boolean',
  'Symbol',
  'Map',
  'WeakMap',
  'Set',
  'WeakSet',
  'Function',
  'RegExp',
  'Promise',
  'Error',
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
]

export const types = {}
export const strings = {}

for (let type of list) {
  strings['[object ' + type + ']'] = type
  types[type] = type
}
