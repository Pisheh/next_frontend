const getUser = (token: string) => {
  fetch('http://199.231.235.83:8923/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else if (res.status === 401) {
        throw new Error('401')
      }
    })
    .catch(err => err)
}

export default getUser
