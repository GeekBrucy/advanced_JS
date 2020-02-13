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
  this.removeAt = function(position){
    if(position >= 0 && position < length){
      if(position === 0){
        var current = head;
        head = current.next;
      } else {
        var current = head;
        var previous = null;
        var index = 0;
        while(index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }

      length--;
      return current;
    }
    return null;
  }
  this.remove = function(element){
    return this.removeAt(this.indexOf(element));
  }
  this.indexOf = function(element){
    var index = 0;
    var current = head;
    while(current){
      if(element === current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  this.isEmpty = function(){
    return length === 0;
  }

  this.size = function(){
    return length;
  }
}