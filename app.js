const calculateEthPrice = require('./index');
calculateEthPrice(1452680400,1452546400,100).then(function(result) {
   console.log(result);
   return result;
})  