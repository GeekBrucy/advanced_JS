var MySet = function(){
  var items = {};

  this.has = function(value){
    return items.hasOwnProperty(value); 
  }

  this.add = function(value){
    if(!this.has(value)){
      items[value] = value;
      return value;
    }
    return false;
  }

  this.remove = function(value){
    if(this.has(value)){
      delete items[value];
      return true;
    } else {
      return null;
    }
  }
  this.clear = function(){
    items = {};
  }
  this.size = function(){
    return Object.keys(items).length;
  }
  this.value = function(){
    var values = [];
    for(var i in items){
      if(items.hasOwnProperty(i)){
        values.push(i)
      }
    }
    return values;
  }
  this.union = function(otherSet){
    var resultSet = new MySet();

    var arr = this.value();
    for(var i = 0; i < arr.length; i++){
      resultSet.add(arr[i]);
    }

    arr = otherSet.value();
    for(var i = 0; i < arr.length; i++){
      resultSet.add(arr[i]);
    }
    return resultSet;
  }
  this.intersection = function(otherSet){
    var resultSet = new MySet();

    var arr = this.value();
    for(var i = 0; i < arr.length; i++){
      if(otherSet.has(arr[i])){
        resultSet.add(arr[i]);
      }
    }
    return resultSet;
  }
  this.diff = function(otherSet){
    var resultSet = new MySet();

    var arr = this.value();

    for(var i = 0; i < arr.length; i++){
      if(!otherSet.has(arr[i])){
        resultSet.add(arr[i]);
      }
    }
    return resultSet;
  }
  this.getItems = function(){
    return items;
  }
}