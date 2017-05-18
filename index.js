function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget(){
  var element = document.querySelector('#nested .target');
  return element;
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rank.length; i++) {
    let kids = rank[i].children;

    for (let j = 0; j < kids.length; j++) {
      kids[j].innerHTML = parseInt(kids[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  while(nextNode){
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
