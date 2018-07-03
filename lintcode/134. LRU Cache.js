// 134. LRU Cache
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// set(key, value) - Set or insert the value if the key is not already present.
// When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

/**
 * @param {number} capacity
 */
class LRUCache  {
    constructor(limit) {
      this.size = 0;
      (typeof limit == "number") ? this.limit = limit : this.limit = 10;
      this.map = {};
      this.head = null;
      this.tail = null;
    }
};

LRUCache.prototype.lrunode = function(key, value) {
    if (typeof key != "undefined" && key !== null) {
        this.key = key;
    }
    if (typeof value != "undefined" && value !== null) {
        this.value = value;
    }
    this.prev = null;
    this.next = null;
}
LRUCache.prototype.setHead = function(node) {
    node.next = this.head;
    node.prev = null;
    if (this.head !== null) {
        this.head.prev = node;
    }
    this.head = node;
    if (this.tail === null) {
        this.tail = node;
    }
    this.size++;
    this.map[node.key] = node;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]) {
        return -1;
    }
    var value = this.map[key].value;
    var node = new LRUCache.prototype.lrunode(key, value);
    this.remove(key);
    this.setHead(node);
    return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var node = new LRUCache.prototype.lrunode(key, value);
    if (this.map[key]) {
        this.map[key].value = node.value;
        this.remove(node.key);
    } else {
        if (this.size >= this.limit) {
            delete this.map[this.tail.key];
            this.size--;
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.setHead(node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
LRUCache.prototype.remove = function(key) {
    var node = this.map[key];
    if (node.prev !== null) {
        node.prev.next = node.next;
    } else {
        this.head = node.next;
    }
    if (node.next !== null) {
        node.next.prev = node.prev;
    } else {
        this.tail = node.prev;
    }
    delete this.map[key];
    this.size--;
};

const lru = new LRUCache(2);
lru.put(1,1);
console.log(lru.map);
lru.put(2,2);
console.log(lru.map);
lru.get(1);
console.log(lru.map);
