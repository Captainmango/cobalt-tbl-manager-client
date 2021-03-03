import React from 'react'
import ReservationsList from '../Components/ReservationsList';
import ReservationsContainer from '../Containers/ReservationsContainer'

const Reservations = () => {
    return (
        <div>
            <ReservationsContainer children={<ReservationsList />} />
        </div>
    )
}

export default Reservations;