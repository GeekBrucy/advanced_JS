var LinkedList = function(){

  // linkedList head
  var head = null;
  // linkedList length
  var length = 0;

  var Node = function(element){
    this.element = element;
    this.next = null;
  }

  // append element to tail
  this.append = function(element){
    var node = new Node(element);

    if(head === null){
      head = node;
    } else {
      var current = head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  // get head element
  this.getHead = function(){
    return head;
  }
  // add element at any position
  this.insert = function(position, element){
    // handle out of bound
    if(position >= 0 && position < length){
      var node = new Node(element);
      if(position === 0){
        var current = head;
        head = node;
        head.next = current;
      } else {
        var index = 0;
        var current = head;
        var previous = null;
        while(index < position){
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.next = current;
      }
    }
  }
}