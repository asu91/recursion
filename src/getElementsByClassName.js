// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	var iterate = function(element){
		//push into result if element contains className in classList
		if(element.classList && element.classList.contains(className)){
			result.push(element)
		}
		//iterate over nested childNodes
		if(element.childNodes){
			for(var i=0;i<element.childNodes.length;i++){
				iterate(element.childNodes[i]);
			}
		}
	}
	//iterate through document.body
	iterate(document.body)
	return result;
};

//document.body
//element.childNodes
//element.classList