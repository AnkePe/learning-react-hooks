import React, { useState } from 'react'

const EditUserForm = props => {
    // we krijgen onze state van currentUser in App.js via props
    const [user, setUser] = useState(props.currentUser)    

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value})
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                props.updateUser(user.id, user)
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}                
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}                
            />
            <button>Update user</button>
            <button
                className="button muted-button"
                onClick={() => props.setEditing(false)} 
            >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm