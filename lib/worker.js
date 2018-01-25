'use strict';

var util = require('util');
var Vector = require('./vector');

//var Hashcash = require('hashcasher');
//var Worker = require('event-worker');

var WebWorker;

if (process.env.APP_ENV !== 'browser') {
  WebWorker = require('webworker-threads').Worker;
} else {
  WebWorker = window.Worker;
}

/**
 * Workers are arbitrary containers for processing data.  They can be thought of
 * almost like "threads", as they run asynchronously over the duration of a
 * contract's lifetime as "fulfillment conditions" for its closure.
 * @param       {Object} initial - Configuration object
 * @constructor
 */
function Worker (work) {
  if (typeof work !== 'function') {
    work = function () {
      function compute (i) {
        return i * i;
      }
      
      this.onmessage = function (event) {
        console.log('worker received:', event.data);
        var result = compute(2);
        postMessage('hello!');
      }
    }
  }
  this.work = work;
}

util.inherits(Worker, Vector);

Worker.prototype.mine = function (input) {
  var self = this;
  
  console.log('worker mining...', input);
  self.compute();

}

/**
 * Handle a task.
 * @param  {Vector} input Input vector.
 * @return {String}       Outcome of the requested job.
 */
Worker.prototype.compute = function (input) {
  var self = this;
  var vector = new Vector(input);
  var output = vector.compute();
  
  if (vector.debug) console.log('[WORKER]', 'compute', typeof input, input, output);
  
  var worker = new WebWorker(function () {
    var self = this;
    var Hashcash = require('./hashcash');
    var hashcash = new Hashcash();
    this.onmessage = async function (event) {
      console.log('hello:', event);
      var cash = await hashcash.mine(event.data);
      self.postMessage({
        status: 'success',
        cash: cash
      });
    }
  });
  worker.onmessage = function (event) {
    console.log('host received:', event);
  }
  worker.postMessage(input);
};

Worker.prototype.route = function (path) {
  switch (path) {
    default:
      return this.compute(path);
      break;
  }
};

module.exports = Worker;
