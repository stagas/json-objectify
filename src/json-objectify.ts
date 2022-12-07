import { asyncSerialReduce } from 'everyday-utils'

interface Replacer {
  (this: unknown, key: string, value: unknown): unknown
}

interface Reviver {
  (this: unknown, key: string, value: unknown): unknown
}

export const createContext = (asIsCtors: any[] = []) => {
  const asIs = new Set(asIsCtors)

  const objectify = <T = unknown>(value: any, replacer: Replacer, top = true): T => {
    if (value === null) return value

    if (typeof value === 'object' && !(asIs.has(value.constructor))) {
      if (top) {
        value = replacer.call({ '': value }, '', value)
      }

      value = Object.entries(value).reduce((p, [k, v]) => {
        p[k] = v === null
          ? v
          : objectify(replacer.call(value, k, v), replacer, false)
        return p
      }, Array.isArray(value) ? [] : {} as any)

      return value
    }

    return value
  }

  const objectifyAsync = async <T = unknown>(
    value: any,
    replacer: Replacer,
    top = true,
  ): Promise<T> => {
    if (value === null) return value

    if (typeof value === 'object' && !(asIs.has(value.constructor))) {
      if (top) {
        value = replacer.call({ '': value }, '', value)
      }

      value = await asyncSerialReduce(Object.entries(value), async (p, [k, v]) => {
        p[k] = v === null
          ? v
          : await new Promise(resolve => {
            setTimeout(async () => {
              resolve(
                await objectifyAsync(replacer.call(value, k, v), replacer, false)
              )
            })
          })
        return p
      }, Array.isArray(value) ? [] : {} as any)

      return value
    }

    return value
  }

  const deobjectify = <T = unknown>(value: any, reviver: Reviver, top = true): T => {
    if (value === null) return value

    if (typeof value === 'object' && !(asIs.has(value.constructor))) {
      value = Object.entries(value).reduce((p, [k, v]) => {
        p[k] = v === null
          ? v
          : reviver.call(p, k, deobjectify(v, reviver, false))
        return p
      }, Array.isArray(value) ? [] : {} as any)

      if (top) {
        value = reviver.call({ '': value }, '', value)
      }

      return value
    }

    return value
  }

  return { objectify, objectifyAsync, deobjectify }
}

export const { objectify, objectifyAsync, deobjectify } = createContext()
