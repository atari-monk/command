import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CommandApiComponent: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const url = 'http://localhost:3000/api/v1/commands/create'
  useEffect(() => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div>
      <h2>Data from Command API</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default CommandApiComponent
