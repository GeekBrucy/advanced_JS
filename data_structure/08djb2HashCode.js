var djb2HashCode = function(key){
  var hash = 5381;
  for(var i = 0; i < key.length; i++){
    hash = hash * 33 + key[i].charCodeAt();
  }
  return hash % 1013;
}