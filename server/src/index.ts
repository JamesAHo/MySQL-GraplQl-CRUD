// write initial steps of applications
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'
const PORT = process.env.PORT || 3001

const main = async () => {

    const app = express() 
    app.use(cors())
    // use json for data visualization
    app.use(express.json())
    // graphql endpoints
    // app.use("/graphql", graphqlHTTP({
    //     schema,
    //     graphiql: true
    // }))

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
    })
};




main().catch((err) => {
    console.log(err)
})
