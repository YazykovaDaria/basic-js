const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    const len = this.chain.filter((val) => val !== undefined);
    return len.length;
  },

  addLink(value) {
    // console.log(value)
    if (value === undefined) {
      this.chain.push([`( )`]);
      return this;
    } else {
      this.chain.push([`( ${value} )`]);
      return this;
    }
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.getLength() || !Number.isInteger(position) || position <= 0) {
      throw new Error("You can't remove incorrect link!");
    }
    delete this.chain[position - 1];
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const filt = this.chain.filter((val) => val !== undefined);
    return filt.join('~~');
  }
};

module.exports = {
  chainMaker,
};
