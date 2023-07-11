Following the turotial from [here](https://www.apollographql.com/docs/apollo-server/getting-started#step-2-install-dependencies)

# Concepts

## Type Definitions (`typeDefs`)
These define the structure/schema of the data.  We use these `typeDefs` along with `resolvers` to create the Apollo server.

## Resolvers (`resolvers`)
While `typeDefs` define the schema. The resolvers expose the API (Query) for the data.

A simple Apollo Server with `typeDefs` and `resolvers` to setup the Apollo server:

```ts

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
    Query: {
        books: () => books
    }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
```

## We can now easily query the server for data from the client.  For ex:

```ts
// this query will return only authors for all the books
query GetBooks {
  books {
    author
  }
}
```