import React from 'react';


const ButtonFetchUsers = (props) => {
    return (
        <button 
        style={{
            padding:'10px 20px',
            border: '2px solid black',
        }}
        onClick={props.click}>Add new user</button>
    );
}

export default ButtonFetchUsers;