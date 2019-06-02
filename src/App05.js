import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  
  // we don't know who is being edited until someone has been selected
  const initialFormState = { id: null, name: '', username: '' }
  
  const [ users, setUsers ] = useState(userData)

  // current user is the empty user until someone has been selected to be edited
  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  // edit mode is turned off
  const [ editing, setEditing ] = useState(false)

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  
  const deleteUser = id => {    
    setUsers(users.filter(user => user.id !== id))
  }
  
  // ftie om user te updaten
  // we mappen door de users en zoeken die met het id van degene die we willen updaten
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  // ftie om in edit mode te gaan en current user te bepalen eens geklikt
  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }



// new: line 59 - pass the EditRow function (props)
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App