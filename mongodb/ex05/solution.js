var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var fArg = process.argv[2];
var sArg = process.argv[3];
var obj = {
	'firstName': fArg,
	'lastName': sArg
}

var jsonObj = JSON.stringify(obj);
mongo.connect(url, function(err,db){
	if (err) throw err
	// db gives access to db
	var collection = db.collection('docs')
	collection.insert(obj, function(err,data){
		if (err) throw err
		console.log(jsonObj);
		db.close()		
	})
})