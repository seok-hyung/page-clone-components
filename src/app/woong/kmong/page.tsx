"use client"
import { useState } from "react"
import EventPage from "./EventPage"
import Header from "./Header"

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  function toggleModal() {
    setModalOpen(!modalOpen)
    console.log(modalOpen)
  }

  return (
    <div>
      <EventPage />
      <Header modalOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  )
}
