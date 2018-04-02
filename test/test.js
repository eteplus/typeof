import test from 'ava'
import typeOf from '../src/typeof'
import { types } from '../src/types'

test('is Null', t => {
  t.is(typeOf(null), types.Null)
})

test('is Undefined', t => {
  t.is(typeOf(), types.Undefined)
})

test('is Date', t => {
  t.is(typeOf(new Date()), types.Date)
})

test('is Boolean', t => {
  t.is(typeOf(true), types.Boolean)
  t.is(typeOf(false), types.Boolean)
})

test('is String', t => {
  t.is(typeOf('🌟'), types.String)
  t.is(typeOf('typeOf'), types.String)
})

test('is Error', t => {
  t.is(typeOf(new Error()), types.Error)
})

test('is NaN', t => {
  t.is(typeOf(+'a'), types.NaN)
})

test('is Number', t => {
  t.is(typeOf(+'1'), types.Number)
  t.is(typeOf(+new Date()), types.Number)
  t.is(typeOf(666), types.Number)
})

test('is Array', t => {
  t.is(typeOf(['💯', '🚀']), types.Array)
})

test('is Obejct', t => {
  t.is(typeOf({}), types.Object)
})

test('is Map', t => {
  t.is(typeOf(new Map()), types.Map)
})

test('is WeakMap', t => {
  t.is(typeOf(new WeakMap()), types.WeakMap)
})

test('is Set', t => {
  t.is(typeOf(new Set(['💯', '💯', '💯'])), types.Set)
})

test('is WeakSet', t => {
  t.is(typeOf(new WeakSet()), types.WeakSet)
})

test('is Symbol', t => {
  t.is(typeOf(Symbol('🚀')), types.Symbol)
})

test('is Function', t => {
  t.is(typeOf(function () {}), types.Function)
  const f = () => {}
  t.is(typeOf(f), types.Function)
})

test('is RegExp', t => {
  t.is(typeOf(/\w+/g), types.RegExp)
})

test('is Promise', t => {
  const p = new Promise((resolve, reject) => { resolve() })
  t.is(typeOf(p), types.Promise)
})

test('is ArrayBuffer', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(buf), types.ArrayBuffer)
})

test('is DataView', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new DataView(buf)), types.DataView)
})

test('is Int8Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Int8Array(buf)), types.Int8Array)
})

test('is Uint8Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Uint8Array(buf)), types.Uint8Array)
})

test('is Uint8ClampedArray', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Uint8ClampedArray(buf)), types.Uint8ClampedArray)
})

test('is Int16Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Int16Array(buf)), types.Int16Array)
})

test('is Uint16Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Uint16Array(buf)), types.Uint16Array)
})

test('is Int32Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Int32Array(buf)), types.Int32Array)
})

test('is Uint32Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Uint32Array(buf)), types.Uint32Array)
})

test('is Float32Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Float32Array(buf)), types.Float32Array)
})

test('is Float64Array', t => {
  const buf = new ArrayBuffer(32)
  t.is(typeOf(new Float64Array(buf)), types.Float64Array)
})
