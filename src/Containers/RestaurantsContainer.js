import React from 'react';
import { connect } from 'react-redux';
import { fetchAllRestaurants } from '../Actions/restaurantsActions';
import Spinner from '../icons/Spinner.svg';

export const RestaurantsContainer = (props) => {
  let requesting = props.requesting
  let children = props.children

    const handleLoading = () => {
        if(requesting) {
          return <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div><img src={Spinner} alt="spinner" /></div>
            </div>
          </>
        } else {
          return <>{ children }</>
      
        }
      }
        return (
          
            <div>
                <h1 className="text-center pt-5">Restaurants</h1>
                { handleLoading() }
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
    restaurants: state.restaurants.restaurants,
    user: state.users.user,
    requesting: state.restaurants.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchAllRestaurants: () => {dispatch(fetchAllRestaurants())}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
