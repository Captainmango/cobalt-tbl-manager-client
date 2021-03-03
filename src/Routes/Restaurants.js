import React from 'react'
import RestaurantsContainer from '../Containers/RestaurantsContainer'
import RestaurantsList from '../Components/RestaurantsList'


const Restaurants = () => {
    return (
        <div>
            <RestaurantsContainer children={<RestaurantsList />} />
        </div>
    )
}

export default Restaurants;