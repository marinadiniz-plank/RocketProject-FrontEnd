import { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import Header from '../components/Header'
// import Table from "../components/Table";

import { Outlet } from 'react-router-dom'
// import Table from '../components/Table'


function RenderRocket() {
  const [rocketData, setRocketData] = useState([])

  useEffect(() => {
    renderRocketList()
  }, [])

  const renderRocketList = () => {
    fetch('http://localhost:80/rocket')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error)
      })
  }
}
function Rocket() {
  console.log("ahhhhh");
  
  RenderRocket();
  return (
    <>
      <Header pageTitle="Rocket" />
      {/* <Table data={rocketData} /> */}
      <AddButton />
      <Outlet />
    </>
  )
}

export default Rocket
