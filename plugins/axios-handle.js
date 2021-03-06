import apiService from '@/services/service.js'

export default function ({ store, $axios, redirect }, inject) {
  $axios.onRequest((config) => {
    // TODO set headers before send request
  })
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/error')
    }
  })
  const serviceWithAxios = apiService($axios)
  inject('service', serviceWithAxios())
}
