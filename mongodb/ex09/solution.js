var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

var fArg = process.argv[2];

mongo.connect(url, function(err,db){
	if (err) throw err
	// db gives access to db
	var collection = db.collection('prices')
	collection.aggregate([
		{$match:{ "size": fArg }}
		,{$group:{
			_id: 'price'
			, price:{
				$avg: '$price'
			}
		}} 
	]).toArray(function(err,data){
		if (err) throw err
		console.log(data[0].price.toFixed(2));
		db.close()		
	})
})