class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  load(pos) {
    if(pos > this.length){
      throw new Error('OutOfBounds');
    } else {return this.items[pos]} 
  }

  max() {
    if(!this.length){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
    };

  min() {
    if(!this.length){
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = this.items.reduce((acc, value) => {
      return acc + value;
    }, 0);
    return sum
  }

  avg() {
    if(!this.length){
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce((acc, value) => {
        return acc + value;
      }, 0);
      return sum / this.length ;
    }
  }
}


module.exports = SortedList;
