/**
 * @read: https://leetcode.com/problems/lru-cache/description/
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 *
 * Implement the LRUCache class:
 *
 * LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * int get(int key) Return the value of the key if the key exists, otherwise return -1.
 * void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 *
 * The tricky thing is to have O(1) get and put time. We could create linked lists and hashmaps, but it's very complex and easy to go wrong.
 *
 * Fortunately JS/TS has a very convenient structure called Map, which behaves like an object, with the particularity of respecting insertion order of keys. So we know if we add a key, it will be at the end of the object, and the first inserted key will be at the beginning.
 *
 * The "key" (haha) is to be sure to remove keys and re-add it at the end of the map when interacted with.
 */

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const value = this.cache.get(key);
    if (value === undefined) {
        return -1;
    }
    //Small hack to re-order keys: we remove the requested key and place it at the end
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.size >= this.capacity && !this.cache.has(key)) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
    }

    this.cache.delete(key);
    this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */