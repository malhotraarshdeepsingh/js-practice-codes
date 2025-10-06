class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.map = new Map(); // key -> node
    this.head = null; // most recently used
    this.tail = null; // least recently used
    this.length = 0;
  }

  #removeNode(node) {
    if (!node) return;

    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;

    node.prev = null;
    node.next = null;
  }

  #addToHead(node) {
    node.next = this.head;
    node.prev = null;

    if (this.head) this.head.prev = node;
    this.head = node;

    if (!this.tail) this.tail = node;
  }

  get(key) {
    if (!this.map.has(key)) return undefined;

    const node = this.map.get(key);
    
    // Move node to head (most recently used)
    this.#removeNode(node);
    this.#addToHead(node);

    return node.value;
  }

  put(key, value) {
    // Case 1: Key already exists → update and move to head
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.#removeNode(node);
      this.#addToHead(node);
      return;
    }

    // Case 2: New key → if full, evict LRU (tail)
    if (this.length === this.limit) {
      this.map.delete(this.tail.key);
      this.#removeNode(this.tail);
      this.length--;
    }

    // Create and add new node to head
    const newNode = { key, value, prev: null, next: null };
    this.#addToHead(newNode);
    this.map.set(key, newNode);
    this.length++;
  }

  debug() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(`[${current.key}:${current.value}]`);
      current = current.next;
    }

    return result.join(" -> ");
  }
}

// Example usage
const cache = new LRUCache(3);
cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);
console.log("Cache:", cache.debug()); // [c:3] -> [b:2] -> [a:1]

cache.get("a");
console.log("After get(a):", cache.debug()); // [a:1] -> [c:3] -> [b:2]

cache.put("d", 4);
console.log("After put(d):", cache.debug()); // [d:4] -> [a:1] -> [c:3] (b evicted)
