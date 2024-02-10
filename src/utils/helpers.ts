export const getLink = (url: string | undefined) => {
  if (!url) return ''
  const [_, link] = url.split('https://rickandmortyapi.com/api/')
  return link
}
