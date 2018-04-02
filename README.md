# typeOf

[![Build Status](https://travis-ci.org/eteplus/typeof.svg?branch=master)](https://travis-ci.org/eteplus/typeof)

> The typeOf method returns a string indicating the type of the value

## Install

```bash
# npm install @eteplus/typeOf
```

## Usage

```js
const typeOf = require(@eteplus/typeOf)

typeOf() // => 'Undefined'

typeOf('🌟') // => 'String'

typeOf(+a) // => 'NaN'

typeOf(new WeakMap()) // => 'WeakMap'
```

## API

### typeOf(value)

Returns the type of value

Types:

  - Null
  - Undefined
  - NaN
  - Arguments
  - Number
  - String
  - Array
  - Object
  - Date
  - Boolean
  - Symbol
  - Map
  - WeakMap
  - Set
  - WeakSet
  - Function
  - RegExp
  - Promise
  - Error
  - ArrayBuffer
  - DataView
  - Int8Array
  - Uint8Array
  - Uint8ClampedArray
  - Int16Array
  - Uint16Array
  - Int32Array
  - Uint32Array
  - Float32Array
  - Float64Array

## Author

**typeOf** © [ETEPLUS](https://github.com/eteplus), Released under the [MIT](https://github.com/eteplus/typeof/blob/master/LICENSE) License
