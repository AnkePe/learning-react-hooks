import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';



const App = () => {

  // random dummy data, aray van objecten
  const userData = [
    { id: 1, name: 'Anke', username: 'ankepe'},
    { id: 2, name: 'Marian', username: 'woody'},
    { id: 3, name: 'Bes', username: 'bessie'},
  ]
  // we don't know who is being edited until someone has been selected
  const initialFormState = { id: null, name: '', username: '' }

  // setting state with hooks
  const [ users, setUsers ] = useState(userData)
  // current user is the empty user until someone has been selected to be edited
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  // edit mode is turned off
  const [ editing, setEditing ] = useState(false)

  // CRUD operations
  // ftie om user toe te voegen 
  const addUser = user => {
    //id wordt hier manueel ingevoerd omdat we niet met externe db werken
    user.id = users.length + 1
    // state: alle bestaande users en deze nieuwe erbij
    setUsers([...users, user])    
  }

  // ftie om user te verwijderen
  // we behouden alle users behalve die met dit id
  const deleteUser = id => {
    // volgende lijn omdat je anders kan deleten terwijl je edit (is true op dat moment)
    setEditing(false)
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
  
  console.log(users)
  

  // we geven aan UserTable de users mee die daar via props gebruikt kunnen worden
  // we geven aan AddUserForm de ftie addUser mee, opgepast zonder () erachter
  // we geven aan UserTable de ftie deleteUser mee
  // we geven aan UserTable de ftie editRow mee
  // we geven aan EditUserForm de fties currentUser, updateUser en setEditing mee

  // we tonen ofwel EditUserForm ofwel AddUserForm
  return (    
    <div className="container">
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
            <h2>Edit user</h2>
            <EditUserForm               
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
            </div>

          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />            
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>    
  );
}

export default App;
