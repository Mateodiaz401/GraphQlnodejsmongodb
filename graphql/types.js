const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLScalarType } = require("graphql");

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

module.exports = {
    UserType
}

//minuto: 1.24.40 de 3.09.32