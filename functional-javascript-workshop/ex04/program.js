function getShortMessages(messageObjectArray){
	return messageObjectArray.map(function(messageObject){
		return messageObject.message
	}).filter(function(message){
		return message.length <50
	})
	// messageObjectArray.filter(function(messageObject){
	// 	return messageObject.message.length < 50;
	// });	
};

module.exports = getShortMessages;