function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget(){
  var element = document.querySelector('div#id .nested');
  return element;
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < ranked.length; i++) {
  	var siblings = ranked[i];
    while (siblings !== null) {
    	var num = parseInt(siblings.HTML)+n;
	  	siblings.innerHTML = num;
    	siblings = siblings.nextElementSibling;
  	}
  }
