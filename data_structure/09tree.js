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

  this.search = function(value){

  }

  this.remove = function(value){

  }

  var min = function(node){
    // situation 1: tree is empty
    if(node === null) return null;

    while(node && node.left){
      node = node.left;
    }
    return node;
  }
  this.min = function(){
    return min(root);
  }
  this.max = function(){
    return max(root);
  }
  var max = function(node){
    if(node === null) return null;
    
    while(node && node.right){
      node = node.right;
    }
    return node;
  }
  var traverse = function(node, callback){
    if(node === null){
      return
    }
    traverse(node.left, callback);
    traverse(node.right, callback);
    callback(node.value);
  }
  this.traverse = function(callback){
    traverse(root, callback);
  }

  this.getRoot = function(){
    return root;
  }
}