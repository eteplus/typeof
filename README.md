# typeof

[![Build Status](https://travis-ci.org/eteplus/typeof.svg?branch=master)](https://travis-ci.org/eteplus/typeof) [![Coverage Status](https://coveralls.io/repos/github/eteplus/typeof/badge.svg?branch=master)](https://coveralls.io/github/eteplus/typeof?branch=master) [![NPM Version](https://img.shields.io/npm/v/@eteplus/typeof.svg)](https://www.npmjs.com/package/@eteplus/typeof) [![NPM Download](https://img.shields.io/npm/dm/@eteplus/typeof.svg)](https://www.npmjs.com/package/@eteplus/typeof) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![LICENSE](https://img.shields.io/npm/l/@eteplus/typeof.svg)](https://github.com/eteplus/typeof/blob/master/LICENSE)

> The `typeOf` method returns a string indicating the type of the value

## Install

```bash
$ npm install @eteplus/typeof
```

## Usage

> Support `Node` and `Browser`

```js
const typeOf = require('@eteplus/typeof')

typeOf() // => 'Undefined'

typeOf('🌟') // => 'String'

typeOf(+'a') // => 'NaN'

typeOf(new WeakMap()) // => 'WeakMap'
```

```html
<script src="dist/typeof.js"></script>
<script>
  var type = typeOf('🌟')
  console.log(type) // => 'String'
</script>
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
