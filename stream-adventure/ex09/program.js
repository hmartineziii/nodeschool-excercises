var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');


var text = 'hello\n'
stream.end(text)