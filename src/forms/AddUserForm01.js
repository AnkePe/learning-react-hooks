import React, { useState } from 'react'

// AddUserForm krijgt via props de functie AddUsers door van App.js

const AddUserForm = props => {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value="" />
      <label>Username</label>
      <input type="text" name="username" value="" />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm