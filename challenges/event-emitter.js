'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.cache = {};
}

EventEmitter.prototype.on = function(event, cb) {
  if (!this.cache.hasOwnProperty(event)) this.cache[event] = [];
  this.cache[event].push(cb);
  return this;
};

EventEmitter.prototype.trigger = function(event, ...args) {
  this.cache[event].forEach(cb => {
    cb(...args);
  });
  return this;
};

EventEmitter.prototype.emit = function(event, ...args) {
  this.trigger(event, ...args);
  return this;
};

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
//   counter++;
// }); // counter should be 0
// instance.trigger('increment').trigger('increment');
// console.log(counter); // counter should be 1
// instance.trigger('increment');
// console.log(counter); // counter should be 2

module.exports = EventEmitter;
