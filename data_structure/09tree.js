var Tree = function(){
  var root = null;

  var Node = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  var insertNode = function(node, newNode) {
    if(newNode.value > node.value){
      // to the right
      if(!node.right){
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    } else if(newNode.value < node.value) {
      if(!node.left){
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    }
  }
  this.insert = function(value){
    var newNode = new Node(value);
    if(root === null){
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  this.search = function(value){}

  this.remove = function(value){}

  this.traverse = function(){}

  this.getRoot = function(){
    return root;
  }
}