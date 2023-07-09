const setAccessToken = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token))
}

export default setAccessToken
