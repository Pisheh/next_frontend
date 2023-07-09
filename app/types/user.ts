export interface User {
  access_token: string
  refres_token: string
  user_info: {
    firstname: string | null
    lastname: string | null
    coName: string | null
    role: 'seeker' | 'employer'
  }
}

export interface Me {
  id: string
  avatar: string
  email: string
  phoneNumber: string
  role: 'seeker' | 'employer'
  employer: {
    id: string
    coName: string
    city: string
    avatar: string
  }
  seeker: {
    firstname: string
    lastname: string
    skills: [
      {
        slug: string
        title: string
        description: string
      }
    ]
  }
}
