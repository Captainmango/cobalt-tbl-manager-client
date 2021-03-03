import { toast } from 'react-toastify';

export const createNewUser = (data) => {
    return (dispatch) => {
      dispatch({ type: "CREATE_NEW_USER" });
      fetch('http://localhost:3001/signup', {
          method: 'POST',
          mode: 'cors',
          headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(returnData => {
        if(returnData.data){
          let user = {id: returnData.data.id,
                      username: returnData.data.attributes.username,
                      first_name: returnData.data.attributes.first_name,
                      last_name: returnData.data.attributes.last_name,
                      email_address: returnData.data.attributes.email_address,
                      mobile_number: returnData.data.attributes.mobile_number};
            localStorage.setItem("token", returnData.data.attributes.token);
          dispatch({ type: 'ADD_USER', user})
          toast.success("Successfully created your account")}
        else {
          toast.error("Couldn't create account. Please check the details and try again.")
          } 
        })
      }
    }

export const logInUser = (username, password) => {
    return (dispatch) => {
        dispatch({ type: "LOGIN_USER" });
        fetch('http://localhost:3001/login', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json' },
          body: JSON.stringify(username, password)
        })
        .then(response => response.json())
        .then(returnData => {
            let user = {id: returnData.data.id,
                        username: returnData.data.attributes.username,
                        first_name: returnData.data.attributes.first_name,
                        last_name: returnData.data.attributes.last_name,
                        email_address: returnData.data.attributes.email_address,
                        mobile_number: returnData.data.attributes.mobile_number};
            localStorage.setItem("token", returnData.data.attributes.token);
            dispatch({ type: "ADD_USER", user });
            toast.success("Logged in successfully")
        })
        .catch(error => {
          toast.error("Failed to login. Please chack tour username and password")
          console.log(error)
        })
    }

}

export const logOutUser = () => {
  return (dispatch) => {
    dispatch({type: "LOGOUT_USER"})
    alert("Logged out successfully.")
  }
}
