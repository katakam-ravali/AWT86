var e = require('events');
var em = new e.EventEmitter();
 
var myfunction = function()     //event handler or listener
{
	console.log("Click Event is generated");
}
em.on('click',myfunction);    //linking listener and event
em.emit('click'); 