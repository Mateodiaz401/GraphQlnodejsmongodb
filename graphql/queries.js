
const { GraphQLList, GraphQLID, GraphQLString } = require('graphql');
const { UserType, PostType } = require('./types');
const { User, Post } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    resolve() {
        return User.find();
    },
};

const user = {
    type: UserType,
    description: "Get a user by id",
    args: {
        id: { type: GraphQLID }
    },
    resolve: (_, { id }) => User.findById(id),
}

const posts = {
    type: new GraphQLList(PostType),
    description: "Get posts",
    resolve: () => Post.find()

}
const post = {
    type: PostType,
    description: "Get post",
    args: {
        id: { type: GraphQLID }
    },
    resolve: (_, { id }) => Post.findById(id)
}



module.exports = {
    users,
    user,
    posts,
    post
}