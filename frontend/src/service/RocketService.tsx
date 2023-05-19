import { useEffect, useState } from 'react'


export function RenderRocket() {
  const [rocketData, setRocketData] = useState([])

  useEffect(() => {
    fetch('http://localhost:80/rocket')
      .then(response => response.json())
      .then(data => { setRocketData(data)})
      .catch(error => {
        console.log('Ocorreu um erro:', error)
      })
  }, [])
   
  return rocketData;
}