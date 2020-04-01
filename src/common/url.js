export const getIdFromUrl = url => {
  const slices = url.split('/')

  return slices[slices.length - 2]
}
