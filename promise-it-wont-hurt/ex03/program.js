var function (user, callback) {
  if (user) {
    callback(null, user); 
  }
  return callback("No user was found", null);
}

