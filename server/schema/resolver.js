const { UserList, MovieList } = require("../FakeData")
const _ = require("lodash")


/*
query-> users->favoriteMovies-> another level



*/
const resolvers = {

    Query: {

        //  user resolver
        users(parent, args, context) {
            // console.log(context)
            // console.log(parent);
            if (UserList) return { users: UserList };

            return { message: "yo , there was an error" }
        },
        user(parents, args, context, info) {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) })

            return user

        },

        //  movie resolver
        movies() {
            return MovieList;
        },
        movie(parents, args) {
            const name = args.name
            const movie = _.find(MovieList, { name: name })

            return movie

        },


    },
    User: {
        favoriteMovies(parent) {
            // console.log(parent)

            return _.filter(MovieList, (movie) =>
                movie.yearofPublication >= 2000 && movie.yearofPublication <= 2013
            )


        }

    }
    ,
    Mutation: {
        // create user
        createUser(parent, args) {
            const user = args.input
            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1;

            UserList.push(user)
            return user;
        },
        // update user name
        updateUserName(parent, args) {
            const Id = args.input.id
            const newName = args.input.newUserName



            const user = _.find(UserList, { id: Number(Id) })

            user.name = newName
            return user

        },
        // delete user
        deleteUser(parent, args) {
            const id = Number(args.id)
            _.remove(UserList, (user) => user.id === id)
            return null


        },
    },

    UsersResult: {
        __resolveType(obj) {
            if (obj.users) {
                return "UserSuccessfulResult"

            }

            else if (obj.message) { return "UserErrorResult" }
            return null;
        },
    },

};

module.exports = { resolvers };