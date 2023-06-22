const UserList = [
    {

        id: 1,
        name: "Vraj",
        username: "vraj",
        age: 20,
        nationality: "INDIA",
        friends: [
            {

                id: 2,
                name: "Ganesh sir",
                username: "ganesh sir",
                age: 20,
                nationality: "US",

            },
            {

                id: 3,
                name: "Rakesh",
                username: "rakesh",
                age: 22,
                nationality: "CANADA",

            },

        ]

    },
    {

        id: 2,
        name: "Ganesh sir",
        username: "ganesh sir",
        age: 20,
        nationality: "US",

    },
    {

        id: 3,
        name: "Rakesh",
        username: "rakesh",
        age: 22,
        nationality: "CANADA",

    },
    {

        id: 4,
        name: "Shirish",
        username: "shirish",
        age: 20,
        nationality: "INDIA",

    },


]
const MovieList = [
    {

        id: 1,
        name: "A",
        yearofPublication: 2001,
        isInTheaters: true

    },
    {

        id: 2,
        name: "B",
        yearofPublication: 2003,
        isInTheaters: true

    },
    {

        id: 3,
        name: "C",
        yearofPublication: 2001,
        isInTheaters: false

    },
    {

        id: 4,
        name: "d",
        yearofPublication: 2006,
        isInTheaters: true

    },

]


module.exports = { UserList, MovieList };