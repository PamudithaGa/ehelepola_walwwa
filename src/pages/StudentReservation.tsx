import React from 'react'

import NavBar from '../components/common/NavBar'
import ReservationForm from '../components/reservation/ReservationForm'

const StudentReservation: React.FC = () => {
  return (
    <>
         {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="other" />
      </section>

      <section className="bg-primary pt-25">
        <ReservationForm />
      </section>
    </>
  )
}

export default StudentReservation