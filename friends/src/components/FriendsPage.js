import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../auth/axiosWithAuth'


function FriendsPage() {
  const [friend, setFriend ] = useState([])

  useEffect(() => {

    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriend(res.data))
      .catch(err => console.log(err))

  },[])

  return (
    <div>
      <h2>Friends List</h2>
      {
        friend.length > 0 ? friend.map(frend => <p>{frend.name}</p>) : 'no friend'
      }
    </div>
  )
}

export default FriendsPage
