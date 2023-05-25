import { useState } from "react";
// import Data from 'database'

import Auth from '../utils/auth'

export const UserScores = () => {




  return (
    <div className="form-container">
      {Auth.loggedIn() ? (
      <div>
        <h1>Hello World!</h1>
        <h2>Today's score: </h2>
        <h3>Highest Score: </h3>
        <h3>Your Total Score: </h3>
      </div>
      ) : (
        <h1>Log in to view your tally score!</h1>
      )}

    </div>
  )
}

export default UserScores;