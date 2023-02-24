const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'provide a valid email address',
            ]
        },
        displayName: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("User", userSchema);
