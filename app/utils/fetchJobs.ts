const fetchJobs = async (page: number, perPage: number) => {
  const res = await fetch('http://199.231.235.83:8923/jobs/page', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      page: page,
      per_page: perPage
    })
  })

  return res.json()
}

export default fetchJobs
