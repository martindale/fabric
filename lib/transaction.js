'use strict';

var util = require('util');
var crypto = require('crypto');

var patch = require('fast-json-patch');

function Transaction (data) {
  if (!data) data = {};

  this['@data'] = {
    type: 'Transaction',
    name: data.name
  };

  this.clock = 0;
  this.stack = [];
  this.known = {};

  if (data.name) {
    this.stack.push(data.name);
  }

  this.init();
}

util.inherits(Transaction, require('./vector'));

Transaction.prototype.isValid = function () {
  let sample = 'OP_DUP OP_HASH160 20 0xecae7d092947b7ee4998e254aa48900d26d2ce1d OP_EQUALVERIFY OP_CHECKSIG';
}

module.exports = Transaction;
