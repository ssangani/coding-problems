class RandomizedSet {
  constructor() {
    this.map = new Map();
  }

  search(val) {
    return this.map.has(val);
  }

  insert(val) {
    if (this.search(val)) return false;

    this.map.set(val, 1);
    return true;
  }

  remove(val) {
    if (!this.search(val)) return false;

    this.map.delete(val);
    return true;
  }

  getRandom() {
    const keys = [...this.map.keys()];
    const idx = Math.floor(Math.random() * keys.length);
    return keys[idx];
  }
}

module.exports = RandomizedSet;
