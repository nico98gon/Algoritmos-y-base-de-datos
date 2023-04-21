// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.


// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)


// Constraints:

// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.


let MyHashSet = function() {
    this.buckets = new Array(1000); // Array of buckets
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const bucketIndex = this.getBucketIndex(key);
    if (!this.buckets[bucketIndex]) {
        this.buckets[bucketIndex] = []; // Create bucket if it doesn't exist
    }
    const bucket = this.buckets[bucketIndex];
    if (!bucket.includes(key)) {
        bucket.push(key); // Add key to the bucket if it doesn't already exist
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const bucketIndex = this.getBucketIndex(key);
    const bucket = this.buckets[bucketIndex];
    if (bucket) {
        const keyIndex = bucket.indexOf(key);
        if (keyIndex !== -1) {
            bucket.splice(keyIndex, 1); // Remove key from the bucket if it exists
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const bucketIndex = this.getBucketIndex(key);
    const bucket = this.buckets[bucketIndex];
    return bucket && bucket.includes(key) ? true : false; // Return true if key exists in the bucket, otherwise false
};

/**
 * Hash function to determine the bucket index for a given key
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.getBucketIndex = function(key) {
    return Math.floor(key / 1000); // Using floor division to get a bucket index within the range of 0 to 999
};
