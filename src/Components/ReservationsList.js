import React from 'react'
import { connect } from 'react-redux'
import Reservation from './Reservation'
import Container from 'react-bootstrap/Container'
import RatingsComponent from './RatingsComponent'
import Spinner from '../icons/Spinner.svg'


const ReservationsList = (props) => {
    
    return (
        <div>

            <Container className="p-3">

                { props.reservations && props.reservations.length > 0 ? 
                        props.reservations.map((reservation, index) => <Reservation
                            key={index}
                            id={reservation.id}
                            img={reservation.attributes.restaurant.image+'/80x80'} 
                            name={reservation.attributes.restaurant.name}
                            address={reservation.attributes.restaurant.address}
                            diners={reservation.attributes.diners}
                            time={new Date(reservation.attributes.time).toString()}
                            rating={<RatingsComponent rating={reservation.attributes.rating} reservation_id={reservation.id} reservation={reservation} />}/>)

                    : <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div><img src={Spinner} alt="spinner" /></div>
                    </div>}
                
            
            </Container>
    
        </div>
    )
}

const mapStateToProps = (state) => ({
    reservations: state.reservations.reservations,
    user: state.users.user

    
})


export default connect(mapStateToProps)(ReservationsList);