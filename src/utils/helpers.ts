import { generatePath, Params } from 'react-router-dom'
import { stringify } from 'qs'

export const partition = <T>(array: T[], predicate: (element: T) => boolean) =>
  array.reduce<T[][]>(
    (acc, el) => {
      acc[predicate(el) ? 0 : 1].push(el)
      return acc
    },
    [[], []]
  )

export const generatePathWithQuery = (
  path: string,
  params?: Params<string>,
  qs?: object
) => {
  const url = generatePath(path, params)
  return qs ? `${url}?${stringify(qs)}` : url
}
