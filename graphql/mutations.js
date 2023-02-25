const { GraphQLString, GraphQLID } = require("graphql");
const { User, Post } = require("../models");
const { createJWToken } = require("../util/auth");
const { PostType } = require("../graphql/types")

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
    type: PostType,
    description: "Create a new post",
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    async resolve(_, args, { verifiedUser }) {
        const post = new Post({
            title: args.title,
            body: args.body,
            authorId: verifiedUser._id,
        });
        console.log(post);
        await post.save();

        return post
    }
}

const updatePost = {
    type: PostType,
    description: "Update a post",
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
    },
    async resolve(_, { id, title, body }, { verifiedUser }) {
        if (!verifiedUser) throw new Error("Unauthorized")
        const updatedPost = await Post.findByIdAndUpdate(
            { _id: id, authorId: verifiedUser._id },
            {
                title,
                body
            },
            {
                new: true,
                runValidators: true
            }
        )

        return updatedPost;
    }

}

const deletePost = {
    type: GraphQLString,
    description: "Delete a post",
    args: {
        postId: { type: GraphQLID }
    },
    async resolve(_, { postId }, { verifiedUser }) {
        if (!verifiedUser) throw new Error("Unauthorized")
        const postDelete = await Post.findByIdAndDelete({
            _id: postId,
            authorId: verifiedUser._id,
        })
        if (!postDelete) throw new Error("Post not found")
        return "Post Deleted";
    }
}


module.exports = {
    register,
    login,
    createPost,
    updatePost,
    deletePost
}