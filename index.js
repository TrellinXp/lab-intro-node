class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }

  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[this.items.length-1];
  }

  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[0];
  }

  sum() {
    if(this.items.length === 0) {
      return 0;
    }

    return this.items.reduce( (prev, curr) => prev + curr );
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    let sum = this.items.reduce( (prev, curr) => prev + curr );
    return sum / this.items.length;
  }
}

module.exports = SortedList;
