import React, { useState } from 'react'

const AddUserForm = props => {
    //initial state in variabele steken zodat we deze terug kunnen halen na submit
    const initialFormState = { id: null, name: "", username: "" }
    //tijdelijke state voor deze form
    const [user, setUser] = useState(initialFormState)
    //input verwerken
    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value})
    }

    // de form krijgt een zelfgeschreven onSubmit functie mee
    // lege waarden worden niet aanvaard
    return (
        <form
            onSubmit = { event => {
                event.preventDefault()
                if (!user.name || !user.username) return
                props.addUser(user)
                setUser(initialFormState)
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
            <button>Add new User</button>
        </form>
    )

}

export default AddUserForm