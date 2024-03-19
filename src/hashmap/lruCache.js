class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
    this.map = new Map();
  }

  enqueue(key) {
    this.queue = [...this.queue.filter((el) => el !== key), key];
  }

  get(key) {
    if (this.map.has(key)) {
      this.enqueue(key);
      return this.map.get(key);
    }

    return -1;
  }

  put(key, value) {
    this.enqueue(key);
    if (this.queue.length > this.capacity) {
      this.map.delete(this.queue.shift());
    }
    this.map.set(key, value);
  }
}

module.exports = LRUCache;
