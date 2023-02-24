//TODO: Aquí ban las consultas que retorna datos 

const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { users, user } = require('./queries');
const { register, login, createPost } = require('./mutations');

const QueryType = new GraphQLObjectType({
    name: 'ListUser',
    description: 'The root query type',
    fields: {
        users,
        user,
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields: {
        register,
        login,
        createPost
    }
});


module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})