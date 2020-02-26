var HashTable = function(){
  var items = [];

  // hash function
  // convert key to number
  var loseloseHashCode = function(key){
    var hash = 0;
    for(var i = 0; i < key.length; i++){
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }
  this.put = function(key, value){
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + value);
    items[position] = value;
  }

  this.getItems = function(){
    return items;
  }

  this.remove = function(key){
    items[loseloseHashCode(key)] = undefined;
  }

  this.get = function(key){
    return items[loseloseHashCode(key)];
  }

  var djb2HashCode = function(){

  }
}

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

// resolve conflict (same hashcode)
// solution 1: split link method (use linked list)
var HashTable_LinkedList = function(){
  var table = [];

  var Node = function(key, value){
    this.key = key;
    this.value = value;
  }
  var loseloseHashCode = function(key){
    var hash = 0;
    for(var i = 0; i < key.length; i++){
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }

  this.put = function(key, value){
    var position = loseloseHashCode(key);

    if(table[position]){
      table[position].append(new Node(key, value));
    } else {
      var l = new LinkedList();
      table[position] = l;
      table[position].append(new Node(key, value));
    }
  }
  this.get = function(key){
    var position = loseloseHashCode(key);
    if(table[position]){
      var current = table[position].getHead();
      while(current){
        if(current.element.key === key){
          return current.element.value;
        }
        current = current.next;
      }
    } else {
      return undefined;
    }
  }
  this.remove = function(key){
    var position = loseloseHashCode(key);
    if(table[position]){
      var current = table[position].getHead();
      while(current){
        if(current.element.key === key){
          table[position].remove(current.element);
          if(table[position].isEmpty()){
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
    } else {
      return false;
    }
  }
  this.getTable = function(){
    return table;
  }
}

var hl = new HashTable_LinkedList();
hl.put('Donnie', 'donnie@qq.com');
hl.put('Ana', 'ana@qq.com');

// solution 2: linear probing
var HashTable_LinearProbing = function(){
  var table = [];

  var Node = function(key, value){
    this.key = key;
    this.value = value;
  }
  var loseloseHashCode = function(key){
    var hash = 0;
    for(var i = 0; i < key.length; i++){
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }
  this.put = function(key, value){
    var position = loseloseHashCode(key);
    if(table[position] === undefined){
      table[position] = new Node(key, value);
    } else {
      var index = position + 1;
      while(table[index] !== undefined){
        index++;
      }
      table[index] = new Node(key, value);
    }
  }
  this.get = function(key){
    var position = loseloseHashCode(key);
    if(table[position]){
      if(table[position].key === key){
        return table[position].value;
      } else {
        var index = position + 1;
        while(table[index].key !== key){
          index++;
        }
        return table[index].value;
      }
    }
  }
  this.remove = function(key){
    var position = loseloseHashCode(key);
    if(table[position]){
      if(table[position].key === key){
        table[position] = undefined;
        return true;
      } else {
        var index = position + 1;
        while(table[index].key !== key){
          index++;
        }
        
      }
    } else {
      return false;
    }
  }
}

var htlp = new HashTable_LinearProbing();
htlp.put('Ana', 'anaana');
htlp.put('Donnie', 'donnieieieiei');