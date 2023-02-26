# Api with nodejs GraphQL

## The following `packages` were used

```
 - dotenv
 - express
 - express-graphql
 - graphql
 - jsonwebtoken
 - mongoose
```
## In this project you have model for User, Post, Comment

### To make an inquiry it will be as follows
#### reate a user

```
mutation {
  register(
    username:""
    email:""
    password:""
    displayName:""
  )
}
```

#### check all users
```
query {
  users{
    id
    username
    displayName
    email
  }
}
```
or also with
```
{
  users{
    id
    username
    displayName
    email
  }
}
```

#### Search for a single user
```
{
  user(id: "63f7e8d3d2afc6473c4eeedf"){
    username
    displayName
    email
  }
}
```
### To execute the project will be as follows

```
npm run dev 
```
For that you have to install `nodemon`
### install globally
npm install -g nodemon

### install inside project
npm i nodemon -D

in the `package.json` file you have to configure the following
```
"scripts": {
		"dev": "nodemon  server.js"
	},

```
