# Reddis Caching

## Architecture
The cache layer sits between the server and the DB.  It stores data in key-value pairs where key is the id, for example, and the value is the document on the DB associated with that key.
- so next time the client requests the same query, it returns it directly from the cache.

## Exercise:
- A practical approach is necessary to understand Redis caching architecture.