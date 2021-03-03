import { toast } from 'react-toastify';

export const fetchPreviousLocations = (user_id) => {
    return (dispatch) => {
        dispatch({type: "FETCH_PREVIOUS_RESTAURANTS"});
        fetch(`http://localhost:3001/users/${user_id}/restaurants`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let restaurants = returnData.data;
            dispatch({type: "ADD_PREVIOUS_RESTAURANTS", restaurants: restaurants})
        })

    }
}

export const fetchAllRestaurants = () => {
    return (dispatch) => {
        dispatch({type: "FETCH_ALL_RESTAURANTS"});
        fetch(`https://cobalt-table-manager-api.herokuapp.com/restaurants`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let restaurants = returnData.data;
            dispatch({type: "ADD_RESTAURANTS", restaurants: restaurants })
        })

    }
}

export const searchRestaurants = (searchTerm) => {
    return (dispatch) => {
        dispatch({type: "SEARCH_RESTAURANTS"});
        fetch(`https://cobalt-table-manager-api.herokuapp.com/${searchTerm}`, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(returnData => {
            let restaurants = returnData.data;
            dispatch({type: "ADD_RESTAURANTS", restaurants: restaurants})
        })
        .catch(error => {
            console.log(error)
            dispatch({type: "DELETE_RESTAURANTS"})
            toast.error("Couldn't find any restaurants with that search. Please try again.")
        })
    }
}

export const deleteRestaurants = () => {
    return (dispatch) => {
      dispatch({type: "DELETE_RESTAURANTS"})
    }
  }
  