// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //check for null
  if(!obj) {
  	return String(obj)
  }
  //check for string
  if(typeof obj == 'string') {
  	obj = "\""+obj+"\""
  	return obj
  }
  else {
  	if(Array.isArray(obj)){
  		if(obj.length == 0){
  			return "[]"
  		}
  		for(var i=0; i<obj.length; i++) {
  			obj[i] = stringifyJSON(obj[i]);
  		}
  		return "["+obj+"]"
  	}
  	else if(typeof obj == 'object'){
  		var json = [];
  		for (var key in obj){
  			if(typeof obj[key]=='function' || obj[key] === undefined) {
  				continue;
  			}
  			else if(obj.hasOwnProperty(key)) {
  				json.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
  			}
  		}
  		return "{" + json + "}"
  	}
  }
  return String(obj)
};
