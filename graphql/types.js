const { GraphQLObjectType, GraphQLString, GraphQLID, } = require("graphql");
const { User } = require("../models");

//TODO: Definir nuestros propios tipos de datos de usuario
const UserType = new GraphQLObjectType({
    name: "UserTypes",
    description: "The user type",
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    },
});

const PostType = new GraphQLObjectType({
    name: "PostType",
    description: "The post type",
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: {
            type: UserType, resolve(parent) {
                return User.findById(parent.authorId)
            }
        }
    }
})

module.exports = {
    UserType,
    PostType
}

//minuto: 1.24.40 de 3.09.32