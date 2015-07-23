var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

var fArg = process.argv[2];
// console.log(fArg)

mongo.connect(url, function(err,db){
	if (err) throw err
	// db gives access to db
	var collection = db.collection('parrots')
	collection.count({
		age:{
			$gt: +fArg
		}
	}, function(err,data){
		if (err) throw err
		console.log(data.toString());
		db.close()		
	})
})