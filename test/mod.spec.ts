import { createContext as createSerializeContext, replacer, reviver, thru } from 'serialize-whatever'
import { createContext as createObjectifyContext, deobjectify, objectify, objectifyAsync } from '../src/json-objectify'

describe('objectify(obj)', () => {
  it('works', () => {
    const obj = { foo: 'bar' }
    const res = objectify(obj, replacer(obj))
    expect(res).toMatchSnapshot()
  })

  it('SharedArrayBuffer', () => {
    const { replacer, reviver } = createSerializeContext([
      [Float64Array, [thru, thru]],
    ])
    const { objectify, deobjectify } = createObjectifyContext([Float64Array])
    const obj = {
      foo: new Float64Array(
        new SharedArrayBuffer(Float64Array.BYTES_PER_ELEMENT)
      ),
    }
    const str = objectify(obj, replacer(obj))
    expect(str).toMatchSnapshot()
    const res = deobjectify<any>(str, reviver([]))
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
    expect(res.foo === obj.foo).toBe(true)
  })

  it('ref SharedArrayBuffer', () => {
    const { replacer, reviver } = createSerializeContext([
      [Float64Array, [thru, thru]],
    ])
    const { objectify, deobjectify } = createObjectifyContext([Float64Array])
    const obj = {
      foo: new Float64Array(
        new SharedArrayBuffer(Float64Array.BYTES_PER_ELEMENT)
      ),
    } as any
    obj.fooRef = obj.foo
    const str = objectify(obj, replacer(obj))
    expect(str).toMatchSnapshot()
    const res = deobjectify<any>(str, reviver([]))
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
    expect(res.foo === obj.foo).toBe(true)
    expect(res.foo === obj.fooRef).toBe(true)
    expect(res.fooRef === obj.foo).toBe(true)
    expect(res.fooRef === obj.fooRef).toBe(true)
  })

  it('arrays', () => {
    const obj = [1, 'foo', null]
    const res = objectify(obj, replacer(obj))
    expect(res).toMatchSnapshot()
  })

  it('complex', () => {
    const obj = [{
      a: 123,
      b: new Date(123),
      c: new Map([[1, 2], [3, 4]]),
      d: new Set([1, 2, 3, 4]),
    }]

    const res = objectify(obj, replacer(obj))
    expect(res).toMatchSnapshot()
  })

  it('cross refs', () => {
    const foo = { hello: 'world', bar: undefined } as any
    const bar = { one: 'two', b: foo }
    foo.bar = bar
    const obj = {
      a: foo,
      b: bar,
    } as any
    obj.c = obj.a
    obj.d = { a: obj.a, b: obj.b }

    const str = objectify(obj, replacer(obj))
    expect(str).toMatchSnapshot()
    const res = deobjectify(str, reviver([]))
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
  })

  it('refs in maps and sets', () => {
    const foo = { hello: 'world' }
    const arr = [1, 2, 3]
    const arrRef = [1, 2, foo]
    const obj = {
      a: foo,
      b: new Date(123),
      c: new Map([[1, foo], [2, arr]] as any),
      d: new Set([1, 2, foo, 4]),
      e: arr,
      f: arrRef,
    }
    const str = objectify(obj, replacer(obj))
    expect(str).toMatchSnapshot()
    const res = deobjectify(str, reviver([])) as typeof obj
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
    expect(res.c.get(1)).toBe(res.a)
    expect(res.c.get(2)).toBe(res.e)
    expect(res.f[2]).toBe(res.a)
  })

  it('refs in maps keys', () => {
    const foo = { hello: 'world' }
    const bar = { one: 'two' }
    const obj = {
      a: new Map([[foo, bar]]),
    }
    const str = objectify(obj, replacer(obj))
    expect(str).toMatchSnapshot()
    const res = deobjectify(str, reviver([])) as typeof obj
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
  })

  it('preserves references', () => {
    class Foo {
      a = 1
      b = 2
      constructor(state: Partial<Foo> = {}) {
        Object.assign(this, state)
      }
      toJSON() {
        return {
          a: this.a,
        }
      }
    }
    const foo = new Foo({ a: 2 })
    const obj = {
      a: 123,
      b: foo,
      c: new Date(123),
      d: foo,
    }
    expect(obj).toMatchSnapshot()

    const str = objectify(obj, replacer(obj))

    expect(str).toMatchSnapshot()
    const res = deobjectify(str, reviver([Foo])) as typeof obj
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
    expect(res.d).toBe(res.b)
    expect(res.b).toBeInstanceOf(Foo)
  })

  it('toJSON top', () => {
    class Foo {
      a = 1
      b = 2
      constructor(state: Partial<Foo> = {}) {
        Object.assign(this, state)
      }
      toJSON() {
        return {
          a: this.a,
        }
      }
    }
    const obj = new Foo({ a: 2 })
    const str = objectify(obj, replacer(obj))

    expect(str).toMatchSnapshot()
    const res = deobjectify(str, reviver([Foo])) as typeof obj
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
    expect(res).toBeInstanceOf(Foo)
  })

  it('async complex', async () => {
    const foo = { hello: 'world' }
    const arr = [1, 2, 3]
    const arrRef = [1, 2, foo]
    const obj = {
      a: foo,
      b: new Date(123),
      c: new Map([[1, foo], [2, arr]] as any),
      d: new Set([1, 2, foo, 4]),
      e: arr,
      f: arrRef,
    }
    const str = await objectifyAsync(obj, replacer(obj))
    expect(str).toMatchSnapshot()
    const res = deobjectify(str, reviver([])) as typeof obj
    expect(res).toMatchSnapshot()
    expect(res).toEqual(obj)
    expect(res.c.get(1)).toBe(res.a)
    expect(res.c.get(2)).toBe(res.e)
    expect(res.f[2]).toBe(res.a)
  })
})
