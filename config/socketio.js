
module.exports = function(io, config){
	io.enable("browser client minification");
	io.enable("browser client etag");
	io.enable("browser client gzip");
	io.set("transports", ["websocket", "xhr-polling"]);
	io.set("polling duration", 10);
}