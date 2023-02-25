//TODO: Aquí ban las consultas que retorna datos 

const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { users, user, posts, post } = require('./queries');
const { register, login, createPost, updatePost, deletePost } = require('./mutations');

const QueryType = new GraphQLObjectType({
    name: 'ListUser',
    description: 'The root query type',
    fields: {
        users,
        user,
        posts,
        post
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields: {
        register,
        login,
        createPost,
        updatePost,
        deletePost
    }
});


module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})