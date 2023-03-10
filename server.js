const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const { authenticate } = require("./middleware/auth")

const { connectDB } = require("./db")


connectDB();

const app = express();

app.use(authenticate);

app.listen(3000);
//TODO: Method  express 
app.get('/', (req, res) => {
    res.send('Welcome to my graphql api')
});

//TODO:Method GraphQl

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))


console.log('server is running on port 3000');