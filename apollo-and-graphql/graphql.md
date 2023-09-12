# GraphQL
It gives us a way of taking all our data sources and put it into some sort of user interface.

## Parts of GraphQL:
- Query
- Mutations
- Subscriptions
- Resolvers (resolver functions)

## GraphQL Playgounds
Allows us to play with our queries, mutations, subscriptions, etc. either with mocks or real data
Example: https://snowtooth.moonhighway.com

## Example of `Query` on https://snowtooth.moonhighway.com

### `liftCount` query with and without arguments in a single query:
```graphql
query {
  	liftCount
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

