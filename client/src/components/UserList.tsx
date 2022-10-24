import React from 'react'
import {useQuery} from "@apollo/client"
import {GET_USER} from '../Graphql/Queries'

function UserList() {

    const {data, error} = useQuery(GET_USER)
    if(data) {
        console.log(data)
    } else {
        console.log(error)
    }

  return (
    <div>
        UserList
        {
            data && data.getAllUsers.map((user: any) => {
                return (
                    <div>
                        {user.name}/{user.username}
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserList