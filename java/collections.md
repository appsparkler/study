
# Collections

## Factors for selecting a collection type
- is the order important
- are duplicates allowed
- speed of operations
- memory use

## Notes
- All types of collections implement `Iterable` - it is at the top of the hierarchy.
- `Collection` is not a concrete class (i.e. a class that can be used).  
- `Set, List and Queue` too are not concrete classes - they are interfaces and have specific behaviours.


<img width="300" alt="image" src="https://user-images.githubusercontent.com/12084821/218350225-72aeefde-1b1d-4762-8698-83eb46382962.png">

### Sets
- Do not allow duplicates
- Are unordered

### List
- Allow duplicate entries
- Order is significant

### Queue
- Lets us add items to the head of the collection
- They typically use FIFO operations
- The are similiar to real-life queues in stores

### Maps
- Does not extend the `Collection` interface
- Implement `Key, Value` pairs

### Linked Lists
- Items can be inserted anywhere in the list very efficiently (fast)
- Not very common - most of what it can do can be achieved by ArrayList
- Can be used when we want to insert a large number of items somewhere in between the list.
- 
