import React, { useState, useEffect } from 'react'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
function OverviewPage() {
  const [starttime, setStartTime] = useState()
  const [endtime, setEndTime] = useState()

  useEffect(() => {
    // Hole die Startzeiten vom Server
    fetch(`${import.meta.env.VITE_BACKEND_URL}startTime`)
      .then(response => response.json())
      .then(data => {
        setStartTime(data)
      })

    // Hole die Endzeiten vom Server
    fetch(`${import.meta.env.VITE_BACKEND_URL}endTime`)
      .then(response => response.json())
      .then(data => {
        setEndTime(data)
      })
  }, [])

  const navigate = useNavigate()
  const handelOk = () => {
    navigate('/myprofile')
  }
  return (
    <section className="flex flex-col items-center h-screen justify-center">
      <div className="w-72 mb-4">
        <h2>Start/Stop</h2>
      </div>
      <div id="homeoffice-overview-container">
        <h2 className="felx  text-3xl ">Home Office Overview</h2>
        <ul id="homeoffice-overview-table" className="felx flex-col w-72 my-4">
          <li className="text-sm flex justify-evenly mb-2">
            Start:
            <p className="text-light-green-900">{starttime}</p>
          </li>
          <li className="text-sm flex justify-evenly mb2">
            Stop: <p className=" text-red-900">{endtime}</p>
          </li>
        </ul>
      </div>
      <Button className="w-72 mb-4" onClick={handelOk}>
        Ok
      </Button>
    </section>
  )
}
export default OverviewPage
