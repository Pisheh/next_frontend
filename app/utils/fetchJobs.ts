import axios from 'axios'

const fetchJobs = async (page: number, perPage: number) => {
  const data = await axios.post('http://199.231.235.83:8923/jobs/page', {
    page,
    per_page: perPage
  })
  return data
}

export default fetchJobs
