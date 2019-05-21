import React from 'react'

// dit stond er voor het doorgeven van de props
// const UserTable = () => (     )
// een ( ipv { omdat er maar 1 ding gereturnd wordt
// zou ook werken met { return()}
// de () worden gebruikt om uwe return over meerdere lijnen te spreiden

// UserTable krijgt via props de users door van App.js
// ? (): () als er users zijn, dan mappen we de userdata en anders boodschap No Users
const UserTable = props => (

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button 
                                onClick={() => props.editRow(user)}
                                className="button muted-button">Edit</button>
                            <button 
                                onClick={() => props.deleteUser(user.id)}
                                className="button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No Users</td>
                </tr>
            )}
            
        </tbody>
    </table>
)

export default UserTable