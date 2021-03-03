import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { updateReservationRating } from '../Actions/reservationsActions'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

function RatingComponent(props) {

    const [rating, setRating] = useState(props.rating)
    let history = useHistory()

    //add reservation_id to the function call as that it the prop I passed down

    const updateRating = (user_id, reservation, rating, event) => {
        event.preventDefault();
        props.updateReservationRating(user_id, reservation, rating)
        history.push("/")
        toast.success("Added the rating")
    }

    return (
        <>
            <InputGroup>
                <InputGroup.Prepend>
                    <Button onClick={event => updateRating(props.user.id, props.reservation, rating, event)} variant="outline-primary">Rate</Button>
                    <Button variant="danger" onClick={()=> setRating(rating > 0 ? rating - 1 : 0 )} > - </Button>
                </InputGroup.Prepend>
                <FormControl className="text-center" readOnly value={rating} onChange={(event) => setRating(event.target.value) } min="0" length="1" type="number" />
                <InputGroup.Append>
                    <Button variant="success" onClick={ () => setRating( rating < 5 ? rating + 1 : 5) }> + </Button>
                </InputGroup.Append>
            </InputGroup>
        </>

    )
}

const mapPropsToState = state => (
    {
        user: state.users.user
    }
)

const mapDispatchToProps = dispatch => (
    {
        updateReservationRating: (user_id, reservation_id, reservation) => dispatch(updateReservationRating(user_id, reservation_id, reservation))
    }
)

export default connect(mapPropsToState, mapDispatchToProps)(RatingComponent);
