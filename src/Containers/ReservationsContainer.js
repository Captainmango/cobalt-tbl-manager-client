import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMyReservations } from '../Actions/reservationsActions';
import Spinner from '../icons/Spinner.svg';

export const ReservationsContainer = (props) => {

    let requesting = props.requesting
    let user = props.user
    let children = props.children
    let fetchMyReservations = (user_id) => props.fetchMyReservations(user_id)  

    useEffect(() => {
      fetchMyReservations(user.id)
      // eslint-disable-next-line
    },[])
      


    const handleLoading = () => {
        if(requesting) {
          return <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div><img src={Spinner} alt="spinner" /></div>
            </div>
          </>
        } else {
          return <> {children} </>
        }
      }

        return (
          
            <div>
                <h1 className="text-center pt-5">My Bookings</h1>
                <br />
                { handleLoading() }
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
    reservations: state.reservations.reservations,
    user: state.users.user,
    requesting: state.reservations.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchMyReservations: (user_id) => {dispatch(fetchMyReservations(user_id))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer);