export default $axios => () => ({
  signIn (payload) {
    return $axios.post('/api/v1/sign_in', payload)
  },
  signUp (payload) {
    return $axios.post('/api/v1/sign_up', payload)
  }
})
