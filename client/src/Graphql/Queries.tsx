import {gql} from "@apollo/client"

export const GET_USER = gql `
query {
    getAllUsers{
      id
      name
      username
      password
    }
  }

`