var PriorityQueue = function(){
  var items = [];

  // Auxiliary Class
  var QueueItem = function(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueItem = new QueueItem(element, priority);

    var added = false;

    for(var i = 0; i < items.length; i++){
      if(queueItem.priority > items[i].priority){
        items.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
    if(!added){
      items.push(queueItem);
    }
  }
  this.getItems = function(){
    return items;
  }
}