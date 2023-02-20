export function compactMap<T, R>(array: T[], handle: (data: T, index: number) => R | null | undefined) {
  const list: R[] = []
  array.forEach((data, index) => {
    const result = handle(data, index)
    if (result) {
      list.push(result)
    }
  })
  return list
}
