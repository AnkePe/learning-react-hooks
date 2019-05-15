import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';


const App = () => {

  // random dummy data, aray van objecten
  const userData = [
    { id: 1, name: 'Anke', username: 'ankepe'},
    { id: 2, name: 'Marian', username: 'woody'},
    { id: 3, name: 'Bes', username: 'bessie'},
  ]

  // set state in hooks met useState
  const [users, setUsers] = useState(userData)

  // ftie om user toe te voegen 
  const addUser = user => {
    //id wordt hier manueel ingevoerd omdat we niet met externe db werken
    user.id = user.length + 1
    // state: alle bestaande users en deze nieuwe erbij
    setUsers([...users, user])
  }

  // ftie om user te verwijderen
  // we behouden alle users behalve die met dit id
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // we geven aan UserTable de users mee die daar via props gebruikt kunnen worden
  // we geven aan AddUserForm de ftie addUser mee, opgepast zonder () erachter
  // we geven aan UserTable de ftie deleteUser mee
  return (
    <div className="container">
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>    
  );
}

export default App;
