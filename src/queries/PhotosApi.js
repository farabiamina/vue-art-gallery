import { useQuery } from 'vue-query'

const BASE_URL = 'https://api.unsplash.com/'
export const ACCESS_KEY = 'MnCexq_SugAZz9QmUYorB_AAC7DfpamxIFOwLIbtdqQ'

export const endpoint = (str) => {
  return BASE_URL + str + 'client_id=' + ACCESS_KEY
}

export function useGetRandomPhotosQuery() {
  return useQuery('randomPhotos', async () => {
    const response = await fetch(endpoint('photos/random/?count=9&'))
    if (!response.ok) {
      throw new Error('Не получилось загрузить фотографии')
    }
    return response.json()
  })
}

export function useGetPhotoQuery(photoId) {
  return useQuery('photo', async () => {
    const response = await fetch(endpoint('photos/' + photoId +'?'))
    if (!response.ok) {
      throw new Error('Не получилось загрузить фотографию')
    }
    return response.json()
  })
}

