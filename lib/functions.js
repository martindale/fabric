module.exports = {
  merge: require('lodash.merge'),
  OP_ADD: function (state) {
    var op = this.stack.pop();
    var a = this.stack.pop();
    var b = this.stack.pop();
    return parseInt(a) + parseInt(b);
  }
}
