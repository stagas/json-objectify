import { asyncSerialReduce } from 'everyday-utils'

interface Replacer {
  (this: any, key: string, value: any): any
}

interface Reviver {
  (this: any, key: string, value: any): any
}

export const createContext = (asIsCtors: any[] = []) => {
  const asIs = new Set(asIsCtors)

  const objectify = (value: any, replacer: Replacer, top = true): any => {
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

  const objectifyAsync = async (
    value: any,
    replacer: Replacer,
    top = true,
  ): Promise<any> => {
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

  const deobjectify = (value: any, reviver: Reviver, top = true): any => {
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
