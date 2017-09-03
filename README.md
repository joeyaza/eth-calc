# eth-calc

A simple Node module which takes a buy date, sell date and amount sold and works out profit loss on Ether - the blockchain based currency.

NPM install and require such as…

	const calculateEthPrice = require(‘./index');

then call using 

	calculateEthPrice(buyDate, sellDate, amount).then(function(result) {
 	  return result;
	})  

e.g..

const calculateEthPrice = require('./index');
calculateEthPrice(1452680400,1452546400,100).then(function(result) {
   console.log(result); // for testing
   return result;
})  
