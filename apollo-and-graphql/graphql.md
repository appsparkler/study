# GraphQL
It gives us a way of taking all our data sources and put it into some sort of user interface.

## Parts of GraphQL:
- Query - allows us to get data
- Mutations - allows us to mutate data
- Subscriptions - allows us to subscribe to changes in data
- Resolvers (resolver functions)
- Fragments - allows us to club multiple fields together
- GraphQL scalar types

## GraphQL Playgounds
Allows us to play with our queries, mutations, subscriptions, etc. either with mocks or real data
Example: https://snowtooth.moonhighway.com

## Example of `Query` on https://snowtooth.moonhighway.com

### `liftCount` query with and without arguments in a single query:
```graphql
query {
  	allLifts: liftCount
    openLifts: liftCount(status: OPEN)
    closedLifts: liftCount(status: CLOSED)
    holdLifts: liftCount(status: HOLD)
}
```


### `liftCount` with dynamic `LiftStatus (status)`
```graphql
query($status: LiftStatus) {
 liftCount(status: $status)   
}
```
Now we can dynamically query the endpoint:
```json
{
    "status": "OPEN"
}
```
OR
```json
{
    "status": "CLOSED"
}
```
OR
```json
{
    "status": "HOLD"
}
```

### `allLifts` query with only fields that we need - `id`, `name` (`liftName`) and `status`
```graphql
query {
    allLifts {
        id
        liftName: name
        status
    }
}
```

### `allLifts` query with trail access and `trailAccess` with list of lifts that can access it
```graphql
query {
  allLifts {
    id
    name
    status
    trailAccess {
      id
      name
      accessedByLifts {
        name
        elevationGain
      }
    }
  }
}
```

### more than one query...
```graphql
query AllLifts {
  allLifts {
    id
    name
    status
    trailAccess {
      id
      name
      accessedByLifts {
        name
        elevationGain
      }
    }
  }
}

query AllTrails {
  allTrails {
    id
    name
    accessedByLifts {
      id
      name
    }
  }
}
```



## Example of `Mutation` on https://snowtooth.moonhighway.com
This shows that we can perform mutations as well:
```graphql
mutation OpenAstraExpress{
  setLiftStatus(id: "astra-express", status: OPEN) {
    name
    id
    status
  }
}
mutation CloseAstraExpress{
  setLiftStatus(id: "astra-express", status: CLOSED) {
    name
    id
    status
  }
}
```

## Example of `Fragment` on https://snowtooth.moonhighway.com
Here we group `id` and `name` field so that whenever we want this we can just use `...CommonLiftFields`

```graphql
fragment CommonLiftFields on Lift {
  id
  name
}

query GetAllLifts {
  allLifts {
    ...CommonLiftFields
  }
}
```

## Example of `Subscription` on https://snowtooth.moonhighway.com

```graphql
subscription LiftStatusChange {
  liftStatusChange {
    id
    name
    status
  }
}
```

Once we run the subscription, we can change the lift status and notice the subscription deliver the change.

```graphql
mutation OpenAstraExpress {
  setLiftStatus(id: "astra-express", status: OPEN) {
    status
  }
}

mutation HoldAstraExpress {
  setLiftStatus(id: "astra-express", status: HOLD) {
    status
  }
}
```

## Scalar Types

### Inbuilt Scalar Types
- Int
- Float
- String
- Boolean
- ID

## Null v/s Non-Nullable
- If a fields type has suffix `!` in its schema, it is a non-nullable field.
- For an array; there are three possibilities:
    - [Car] - field and array members, both can be null
    - [Car]! - field cannot be null but its members can be `Car` or `null`
    - [Car!]! - field cannot be null nor can its members be null

## Defining Queries
All queries will be wrapped in `type Query {}`

```graphql
type Query {
    allLifts
    liftCount
    ...
}
```

## Setting up a GraphQL Server

### Install dependencies:
- graphql
- apollo-server
- nodemon

### Setup the Server

```js
const {ApolloServer, gql} = require("apollo-server")
const {readFileSync} = require('fs')
const query = readFileSync("./query.graphql", {encoding: "utf-8"}) // we can have syntax highlighting in query.graphql
const typeDefs = gql(query.toString())
const server = new ApolloServer({
  typeDefs,
  mocks: true
})
server
  .listen()
  .then(() => console.log("listening..."))
```

### The `.graphql` file
- Mostly, everything in a `.graphql` file is a `type`
- `type Query` is where we define all our queries
- We can define custom types too with the `type` keyword - for ex. `type SkiDay {...}`

```graphql
type SkiDay {
  id: ID!
  date: String!
  mountain: String!
}

type Query {
  totalDays: Int!

}
```
