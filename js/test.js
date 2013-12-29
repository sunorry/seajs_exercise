define(function(require, exports, mudule){
  require('jquery');  //引入 jquery


  var change = require('change');

  console.log(jQuery);
  change.color('oOl', 'blue');
  change.font('oOl', '22px');

  //用 exports.change = change; 的调用方法, 可能是我用的很丑， var change = require('change'); 里的change 就相当于 exports，所以 change.change 就是 exports.change

  // var change = require('change');
  // change.change.color('oOl', 'blue');
  // change.change.font('oOl', '22px');


})