import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function MyProfilePage() {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const navigate = useNavigate()

  const handleStart = async () => {
    const now = new Date()
    const formattedStartDate = now.toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const formattedTime = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
    setStartTime(`${formattedStartDate} ${formattedTime}`)

    try {
      const data = { startTime: `${formattedStartDate} ${formattedTime}` }
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}startTime`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Error starting work:', error)
      alert('es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
    }
  }
  console.log('Startzeit ist:', startTime)

  const handleStop = async () => {
    const now = new Date()
    const formattedEndDate = now.toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const formattedTime = now.toLocaleTimeString('de-DE'.slice(0, 5), { hour: '2-digit', minute: '2-digit' })
    setEndTime(formattedEndDate + ' ' + formattedTime)
    try {
      const data = {
        endTime: formattedEndDate + ' ' + formattedTime,
      }
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}endTime`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Error stopping work:')
    }
  }

  console.log('endzeit ist:', endTime)

  useEffect(() => {
    const startTimeDiv = document.getElementById('start-time-div')
    startTimeDiv.style.display = startTime ? 'block' : 'none'
  }, [startTime])

  useEffect(() => {
    const endTimeDiv = document.getElementById('end-time-div')
    endTimeDiv.style.display = endTime ? 'block' : 'none'
  }, [endTime])

  const handleOverview = () => {
    navigate('/overview')
  }

  return (
    <section className="flex flex-col items-center h-screen justify-center">
      <div className="w-72 mb-4">
        <h2 className="text-4xl text-center">Welcome back</h2>
        <p className="text-lg text-center">track your worktime</p>
      </div>
      <div className="flex flex-col mt-4">
        <Button className="w-72 mb-4" id="start-homeoffice-button" onClick={handleStart}>
          Start
        </Button>
      </div>
      <div className="w-72 mb-4" id="start-time-div">
        <h2>Starttime: {startTime}</h2>
      </div>
      <div className="flex flex-col mt-4">
        <Button className="w-72 mb-4" id="stop-homeoffice-button" onClick={handleStop}>
          Stop
        </Button>
      </div>
      <div className="w-72 mb-4" id="end-time-div">
        <h2>Endtime: {endTime}</h2>
      </div>
      <div>
        <Button className="w-72 mb-4" onClick={handleOverview}>
          Overview
        </Button>
      </div>
    </section>
  )
}
export default MyProfilePage
