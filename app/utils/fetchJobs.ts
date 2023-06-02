const fetchJobs = async () => {
  const res = await fetch('http://199.231.235.83:8923/jobs/page', {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      page: 1,
      per_page: 15
    })
  })

  return res.json()
}

export default fetchJobs
