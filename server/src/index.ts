// write initial steps of applications
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import {schema} from './Schema'
import { createConnection } from 'typeorm';
import {Users} from './Entities/Users'

const PORT = process.env.PORT || 3001

const main = async () => {
    // create mySQL connection using createConnection typeorm
    await createConnection({
        type: 'mysql',
        database: "graphqltest",
        username:'root',
        password:'200012',
        logging: true,
        synchronize: false,
        // entities 
        entities: [Users]
    });

    const app = express() 
    app.use(cors())
    // use json for data visualization
    app.use(express.json())
    // graphql endpoints
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
    })
};




main().catch((err) => {
    console.log(err)
})
