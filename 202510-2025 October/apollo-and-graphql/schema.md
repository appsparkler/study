# Learning about Schema
- They can be written in `.graphql` files or in template/string literals with `#graphql` comment for syntax-highlighting.
- A field's return type can be a scalar, object, enum, union, or interface (all described below).
- Is not responsible for defining where data comes from or how it's stored. It is entirely implementation-agnostic.
- list fields are indicated with square brackets - `[]`

```.graphql
// basic example
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}
```

- By default, it's valid for any field in your schema to return null instead of its specified type.  To require that a particular field doesn't return null with an exclamation mark `!`, like so:

```graphql
type Author {
  name: String! # Can't return null
  books: [Book]
}
```

## Nullability and lists

```graphql
type Author {
  books: [Book!]! # This list can't be null AND its list *items* can't be null
}
```
- If ! appears inside the square brackets, the returned list can't include items that are null.
- If ! appears outside the square brackets, the list itself can't be null.
- In any case, it's valid for a list field to return an empty list.
  
## `__typename`
Every object type in your schema automatically has a field named `__typename`.  So this is a valid query:

```graphql
query UniversalQuery {
  __typename
}
```
## `Query` type
The `Query` type is a special object type that defines all of the top-level entry points for queries that clients execute against your server

```graphql
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

type Query {
  books: [Book]
  authors: [Author]
}
```
### Structuring queries
Since each book has an author and an author may have written more than one book, we can structure a query for books and their authors like so:

```graphql
query GetBooksAndAuthors {
    books {
        title
        author {
            name
        }
    }
}
// instead of:
query GetBooksAndAuthors {
    books {
        title
    }
    author {
        name
    }
}
```

## `Mutation` Types
- similar to `Query` types.  Whereas `Query` types define entry points for read operations, the `Mutation` types define entry points for write operations.

```graphql
type Mutation {
  addBook(title: String, author: String): Book
}
```
Another example:
```graphql
mutation CreateBook {
  addBook(title: "Fox in Socks", author: "Dr. Seuss") {
    title
    author {
      name
    }
  }
}
```

## The `Subscription` type
- Subscriptions are long-lasting GraphQL read operations that can update their result whenever a particular server-side event occurs. Most commonly, updated results are pushed from the server to subscribing clients. For example, a chat application's server might use a subscription to push newly received messages to all clients in a particular chat room.


## `Input` type
- Input types are special object types that allow you to provide hierarchical data as arguments to fields 
- Each field of an input type can be only a scalar, an enum, or another input type:

```graphql
input BlogPostContent {
  title: String
  body: String
}
```
- After you define an input type, any number of different object fields can accept that type as an argument:
```graphql
type Mutation {
  createBlogPost(content: BlogPostContent!): Post
  updateBlogPost(id: ID!, content: BlogPostContent!): Post
}
```
- Input types can sometimes be useful when multiple operations require the exact same set of information, but you should reuse them sparingly

## `Enum` type
- Similar to scalar, but its legal values are defined in the schema

```graphql
enum AllowedColor {
  RED
  GREEN
  BLUE
}

type Query {
  favoriteColor: AllowedColor # enum return value
  avatar(borderColor: AllowedColor): String # enum argument
}

// usage
query GetAvatar {
  avatar(borderColor: RED)
}
```


