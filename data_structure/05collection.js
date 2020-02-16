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
  this.getItems = function(){
    return items;
  }
}