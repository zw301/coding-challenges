// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
//
// Follow up:
// Could you do both operations in O(1) time complexity?
//
// Example:
//
// LRUCache cache = new LRUCache( 2 /* capacity */ );
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /*
    * @param capacity: An integer
    */
    constructor(capacity) {
        this.capacity = capacity;
        this.hs = new Map();
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.tail.prev = this.head;
        this.head.next = this.tail;
    }

    /*
     * @param key: An integer
     * @return: An integer
     */
    get(key) {
        // write your code here
        if (!this.hs.has(key)) {
            return -1;
        }
        let current = this.hs.get(key);
        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.move_to_tail(current);
        return this.hs.get(key).value;
    }

    /*
     * @param key: An integer
     * @param value: An integer
     * @return: nothing
     */
    put(key, value) {
        // write your code here
        if (this.get(key) != -1) {
            this.hs.get(key).value = value;
            return;
        }
        if (this.hs.size == this.capacity) {
            this.hs.delete(this.head.next.key);
            this.head.next = this.head.next.next;
            this.head.next.prev = this.head;
        }
        let insert = new Node(key, value);
        this.hs.set(key, insert);
        this.move_to_tail(insert);
    }
    move_to_tail(current) {
        current.prev = this.tail.prev;
        this.tail.prev = current;
        current.prev.next = current;
        current.next = this.tail;
    }
}

////

/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) {
        return -1;
    }
    let curr = this.map.get(key);
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    this.moveToTail(curr);
    return this.map.get(key).value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.get(key) !== -1) {
        this.map.get(key).value = value;
        return;
    }
    if (this.map.size === this.capacity) {
        this.map.delete(this.head.next.key);
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
    }
    const insert = new Node(key, value);
    this.map.set(key, insert);
    this.moveToTail(insert);
};

LRUCache.prototype.moveToTail = function(curr) {
    curr.prev = this.tail.prev;
    this.tail.prev.next = curr;
    this.tail.prev = curr;
    curr.next = this.tail;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));// returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));// returns -1 (not found)
cache.put(4, 4);// evicts key 1
console.log(cache.get(1));// returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4));// returns 4
