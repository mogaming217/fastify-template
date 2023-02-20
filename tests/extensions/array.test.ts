import { describe, expect, it } from 'vitest'
import { compactMap } from '../../src/extensions/array'

describe('compactMap', () => {
  it('remove null or undef from array', () => {
    const result = compactMap([1, null, 2, undefined, 3], d => d)
    expect(result).toHaveLength(3)
    expect(result[0]).toEqual(1)
    expect(result[1]).toEqual(2)
    expect(result[2]).toEqual(3)
  })
})
