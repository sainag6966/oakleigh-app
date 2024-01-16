export const getNonce = async () => {
  const loginToken = localStorage.getItem('loginToken')
  const headers = {}
  if (loginToken) {
    headers['Authorization'] = `Bearer ${loginToken}`
  }
  try {
    const response = await fetch(
      'http://localhost/oakleigh/wp-json/wp/v2/wc-nonce',
      {
        method: 'get',
        headers,
      },
    )

    if (response.ok) {
      const data = await response.json()
      const nonceid = data?.Nonce
      localStorage.setItem('nonce', nonceid)
    } else {
      console.error(
        'Failed to add item to the basket. Status:',
        response.status,
      )
      const errorData = await response.json()
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
