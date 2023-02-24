const { GraphQLString } = require("graphql");
const { User } = require("../models");
const { createJWToken } = require("../util/auth")

const register = {
    type: GraphQLString,
    description: "Register a new user",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString },
    },
    async resolve(_, args) {
        const { username, email, password, displayName } = args;

        const user = new User({ username, email, password, displayName })
        await user.save();

        const token = createJWToken({
            _id: user._id,
            username: user.username,
            email: user.email,
            displayName: user.displayName
        });
        return token
    }
}
const login = {
    type: GraphQLString,
    description: "Login a user and returns  a token",
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_, args) {
        const user = await User.findOne({ email: args.email }).select('+password');
        if (!user || args.password !== user.password)
            throw new Error("Invalid Credentials")
        const token = createJWToken({
            _id: user._id,
            username: user.username,
            email: user.email,
            displayName: user.displayName
        })
        return token
    }
}

const createPost = {
    type: GraphQLString,
    description: "Create a new post",
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    async resolve(_, args) {
        console.log(args);
        return 'New post created'
    }
}

module.exports = {
    register,
    login,
    createPost,
}