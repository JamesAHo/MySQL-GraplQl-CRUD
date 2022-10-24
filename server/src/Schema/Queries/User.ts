import {GraphQLList} from 'graphql';
import {UserType} from "../TypeDefs/User";
import {Users} from "../../Entities/Users"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        // data manipuation start here under resolve
        return Users.find();
    }
}