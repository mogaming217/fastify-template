import { compactMap } from '../src/extensions/array'

const main = async () => {
  console.log('hello! this is sample script.')
  const array = compactMap([1, null, 2], d => d)
  console.log(`result is ${array}`)
}

main()
