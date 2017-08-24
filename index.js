const express = require('express');
const async = require('async');
const request = require('request');


module.exports = {
  calculateEthPrice: function(buyDate, sellDate, amount) {
  	function httpGet(url, callback) {
	  const options = {
	    url :  url,
	    json : true
	  };
	  request(options,
	    function(err, res, body) {
	      callback(err, body);
	    }
	  );
	}
	const urls= [
	  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=BTC,USD,EUR&ts='+buyDate,
	  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=BTC,USD,EUR&ts='+sellDate
	];
	async.map(urls, httpGet, function (err, res){
		if (err) return console.log(err);
	  	let buyPrice = res[0].ETH.USD;
		let sellPrice = res[1].ETH.USD;
	  	let sellPriceAm = sellPrice*amount;
	  	let buyPriceAm = buyPrice*amount;
	  	let returnFrom = sellPriceAm-buyPriceAm;
	  	roi = (returnFrom-buyPriceAm)/buyPriceAm;
	  	roi = (roi+1)*100;
		return roi;
	});
  }
};
