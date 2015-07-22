var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err,db){
	if (err) throw err
	// db gives access to db
	var collection = db.collection('users')
	collection.update({
		"username":"tinatime"
	},{
		$set: {
			"age": 40
		}
	}, function(err,data){
		if (err) throw err
		db.close()		
	})
})