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
Example server created here : https://stackblitz.com/edit/graphql-apollo-server-appsparkler

### Install dependencies:
- graphql
- apollo-server
- nodemon

### Setup the Server
- if we don't have a DB setup; we can use `mocks: true` for the `ApolloServer`
- we can put all our `graphql` syntax in a `.graphql` file and then read the file and pass the contents to `gql`
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

### The `.graphql` file and `type Query {}`
- Mostly, everything in a `.graphql` file is a `type`
- `type Query {}` is where we define all our queries

```graphql
type Query {
  totalDays: Int!
}
```

### Custom Types
We can define custom types too with the `type` keyword - for ex. `type SkiDay {...}`

```graphql
type SkiDay {
  id: ID!
  date: String!
  mountain: String!
}
type Query {
  totalDays: Int!
  allSkiDays: [SkiDay!]!
}
```

### Enum Type
```graphql
enum Conditions {
  POWDER
  HEAVY
  ICE
  THIN
}
type SkiDay {
  id: ID!
  date: String!
  mountain: String!
  condition: Conditions
}
type Query {
  totalDays: Int!
  allSkiDays: [SkiDay!]!
}
```

### `Mutation` Type
we need `Mutation` types to edit data on database
```graphql
type Mutation {
  removeDay(id: ID!): SkiDay!
}
```

### `input` Type for `Mutation`
`input` types are used for `mutations` - to club 2 or more fields together and provide a schema for mutation arguments

```graphql
input AddDayDetails {
  mountain: String!
  date: String!
  conditions: Conditions
}

type Mutation {
  addDay(dayDetails: AddDayDetails!): SkiDay!
  editDay(id:ID! dayDetails: AddDayDetails): SkiDay!
}
```

### Custom `scalar`
Many a times we want a date, url, email etc. which is also a type String.  For such cases; we need to define a custom `scalar` type

```graphql
scalar Date

type SkiDay {
  id: ID!
  mountain: String!
  date: Date!
  conditions: Conditions!
}

enum Conditions {
  POWDER # lot of snow
  HEAVY # thick wet snow
  ICE 
  THIN 
}

type Query {
  totalDays: Int!
  allSkiDays: [SkiDay!]!
}

input AddDayDetails {
  mountain: String!
  date: Date!
  conditions: Conditions
}

type Mutation {
  addDay(dayDetails: AddDayDetails!): SkiDay!
  removeDay(id: ID!): SkiDay!
}
```

### Custom Mocks
- the mock data usually returns strings like `"Hello World"` for `String` type so we can customize the mocks if we want some other data
- also, for custom scalars like `scalar Date`; we need to define the mock else we'll get an error

```js
const mocks = {
  Date() {
    return '2023-12-12';
  },
  String() {
    return 'Cool Data...';
  },
};

// now, we can pass this to ApolloServer
new ApolloServer({typeDefs, mocks})
```

### Custom Mocks - configuring the number of items in a list

```js
const mocks = {
  Query: () => ({
    allSkiDays: () => new MockList(8),// will return 8 items
    allSkiDays: () => new MockList(8, 10),// will return between 8 and 10 items
  }),
}
```

### Subscription Type
We can setup subscription type which can be used by clients to listen to data changes:

```graphql
type Subscription {
  skiDay: SkiDay!
}
```

### Documenting your spec
- We can add documentation for each of the `types, input, scalar, etc.`.  We simply need to wrap them in `"""<documentation>"""` just above it.
- to document each property; we can wrap the documentation in `"<documentation>"` just above the it.

```grapql
"""
An object that describes a ski day
"""
type SkiDay {
  "A unique identifier for a ski day"
  id: ID!
  mountain: String!
  date: Date!
  conditions: Conditions!
}
```

## More resources
- https://graphql.org/code



