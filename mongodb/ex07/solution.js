var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

var id = process.argv[3];

mongo.connect(url, function(err,db){
	if (err) throw err
	// db gives access to db
	var collection = db.collection(process.argv[2])
	collection.remove({
		"_id": id
	}, function(err,data){
		if (err) throw err
		db.close()		
	})
})