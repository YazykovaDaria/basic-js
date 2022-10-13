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
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  const del =  this.chain.map((chank, i) => {
if (i === position -1) {
  return [];
}
return chank;
    }).filter((ch) => ch.length > 0)
    this.chain = del;
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const filt = this.chain
    //.filter((val) => val !== undefined);
    this.chain = [];
    return filt.join('~~');
  }
};

module.exports = {
  chainMaker,
};
