function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(i + n);
  }
}

function deepestChild(){
  let node = document.querySelector('#grand-node');
  let nextNode = node.children[0];
  while(nextNode){
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
