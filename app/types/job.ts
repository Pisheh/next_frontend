export interface Jobs {
  meta: {
    total_count: number
    page_count: number
    current_page: number
    per_page: number
  }
  jobs: {
    id: number
    title: string
    content: string
    min_salary: number
    max_salary: number
    created_on: Date
    employer: {
      uuid: string
      avatar: null
      co_name: string
    }
    skill: {
      id: number
      title: string
      desc: string | null
    }[]
  }[]
}

export interface Job {
  id: number
  title: string
  content: string
  salary: {
    min: number
    max: number
  } | null
  city: string
  timedelta: {
    amount: number
    unit: string
  }
  created_on: Date
  employer: {
    uuid: string
    avatar: null
    co_name: string
  }
  skills: {
    id: number
    title: string
    desc: string | null
  }[]
}
