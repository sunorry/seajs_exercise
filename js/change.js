define(function(require, exports, module){
  var change = {};

  change.color = function(id, color) {
    $("#"+id).css("color", color);
  };

  change.font = function(id, size) {
    $("#"+id).css("font-size", size);
  };

  //暴露接口
  module.exports = change;

  //第二种暴露接口的方法,这种方法暴露的话引用的方法就不同了，详细看 test.js 下的注释代码
  //exports.change = change;

})