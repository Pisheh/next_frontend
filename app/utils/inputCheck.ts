const inputCheck = (value: string) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const phonePattern = /^\d{11}$/

  if (emailPattern.test(value)) {
    return 'email'
  } else if (phonePattern.test(value)) {
    return 'phone'
  } else {
    return false
  }
}

export default inputCheck
