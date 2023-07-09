const getAccessTokenFromStorage = () => {
  if (localStorage.getItem('token')) {
    return JSON.parse(localStorage.getItem('token') || '')
  } else {
    return null
  }
}

export default getAccessTokenFromStorage
