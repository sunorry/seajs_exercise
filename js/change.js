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
})