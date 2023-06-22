import React, { useState } from 'react'
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client'



//  it's quite simple, you have to just query according to your requirement 
const QUERY_ALL_USERS = gql`
query GetAllUser{
users{
    ...on UserSuccessfulResult{
      users {
        id
    name
age
username
    nationality
      }}

      ... on UserErrorResult{
        message
      }
    }
}

`

const GET_MOVIE_BY_NAME = gql`

query Movie($name: String!){
movie(name: $name) {
  id 
  name 
  yearofPublication
}
}

`
const CREATE_USER_MUTATION = gql`
mutation CreateUser($input: CreateUserInput!){

createUser(input: $input) {
  id
  name
  age
  
}
}



`
const DELETE_USER_MUTATION = gql`

mutation DeleteUser($deleteUserId: ID!){
  deleteUser(id: $deleteUserId) {
    name
  }
}

`
const DisplayData = () => {
    const [movieSearched, setMovieSearched] = useState()

    const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);
    //  you can change above data: UserData

    // useLazy query
    const [fetchMovie, { data: movieSearchData, error: movieSearchError }] = useLazyQuery(GET_MOVIE_BY_NAME)
    // create user states
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState("")
    const [nationality, setNationality] = useState("")


    // MUTATION

    const [createUser] = useMutation(CREATE_USER_MUTATION)
    const [DeleteUser] = useMutation(DELETE_USER_MUTATION)
    if (loading) {
        return <h1>DATA IS LOADING...</h1>

    }
    if (error) {
        console.log(error)
        // return <h1>error</h1>

    }
    if (data) {
        console.log(data)

    }
    if (movieSearchError) {
        console.log(movieSearchError)
    }
    return (

        <div>
            <input type='text' placeholder='name' onChange={(event) => {
                setName(event.target.value)
            }} />
            <input type='text' placeholder='username' onChange={(event) => {
                setUserName(event.target.value)
            }} />
            <input type='number' placeholder='age' onChange={(event) => {
                setUserAge(Number(event.target.value))
            }} />
            <input type='text' placeholder='nationalaity' onChange={(event) => {
                setNationality(event.target.value.toUpperCase())
            }} />

            <button onClick={() => {
                createUser({
                    variables: {
                        input: {
                            name: userName,
                            age: userAge,
                            nationality,
                            username: userName
                        }
                    }



                }


                )
                refetch();
            }}>create user</button>

            <div>{data && data.users?.users.map((user) => {
                return (<div key={user.id}>

                    <br />
                    <h3>user Name : {user.name}</h3>
                    <p>age : {user.age}</p>
                    <p>id : {user.id}</p>
                    <p>nationality : {user.nationality}</p>
                    <button onClick={() => {
                        DeleteUser({
                            variables: {
                                "deleteUserId": user.id
                            }
                        }


                        )
                        refetch();
                    }}>delete user</button>



                </div>)
            })}

                <div>
                    <input type="text" placeholder='movie name' onChange={(event) => {
                        setMovieSearched(event.target.value
                        )
                    }}></input>
                    <button onClick={() => {
                        fetchMovie({
                            variables: {
                                name: movieSearched
                            }
                        })
                    }}>
                        Fetch Data
                    </button>
                    <div>
                        {movieSearchData && (
                            <div>

                                <h1>Movie name: {movieSearchData.movie.name}</h1>
                                <h1>Movie id: {movieSearchData.movie.id}</h1>
                                <h1> Publication Year: {movieSearchData.movie.yearofPublication}</h1>
                            </div>
                        )}
                        {movieSearchError && (
                            <div>

                                <h1>there is no movie with name: {movieSearched} </h1>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayData