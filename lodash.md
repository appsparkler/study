# Lodash

## Why Lodash
- works cross-browser
- easy to understand
- declarative

- try to use sugar wherever possible
- `reject` and `filter` are methods to refine a list
- `groupBy` is a great way to group data
- `orderBy` is a great way to sort data.  It accepts one required argument and another optional argument.  Both are arrays.  The first argument is an array of properties we want to order by and second argument is an array of the how we want to sort `asc` or `desc`.
- getting parts of the array - `head` returns to first member of an array, `tail` returns all elements except head. `last` returns the last member of an array, `initial` will return all members except the last one.

# String utils
- `toLower` and `toUpper` are to change the case.  The unique thing about these methods is that they can be used with `chain`
- `split` and `join` methods are to split/join a string/array with a delimitter.
- `camelCase` and `snakeCase` are to convert strings to camel or snake case

## Random Number - 
   - `random(from, to)` will give a random number between two numbers
   - `random(from, to, true)` will return a floating number
   - `random(to)` will assume to `from` to be `0`.
- Unique Id - `uniqeId` method generates unique ids

## Array methods
- `flatten` - helps us flatten an array for ex. `[[1,2],[3,4]]` > `flatten(arr)` > `[1,2,3,4]`
- `compact` - removes all `falsy` values from an array 

## Object
- `assign` - this allows us to create new objects from existing objects

## Basic Type Checking
- `isNil` - this method to check if a variable is `null` or `undefined`
There are many such utilities we'll find with "is" in the docs - for ex: `isDate`, `isElement`, `isNull`, etc.

## Important points
- `clone` will not work on nested objects.  Use `cloneDeep` to be safer

## Throttle & Debounce
- Throttle allows us to trigger the function only after a specific time has passed after the previous trigger.
- Debounce allows us to trigger the function only after a specific time has passed irrespective of a previous trigger.