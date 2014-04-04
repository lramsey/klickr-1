var move = function (end_x, end_y, duration){
  d3.selectAll(".mouse")
  .transition()
  .duration(duration)
  .style({'top':  end_y + 'px', 'left': end_x + 'px'});
};

var processData = function(arr, index){
  if ( index === arr.length ) {
    return;
  } else {
    move(arr[index].x,arr[index].y,arr[index].t );
    setTimeout(function(){
      processData(arr, index+1);
    }, arr[index].t );
  }
};


$(function(){

  $('#mybutton').on('click', function (){
    var test = [
      { x: 400, y : 100, t: 2000},
      { x: 400, y : 500, t: 500},
      { x: 100, y : 500, t: 2000},
      { x: 1000, y : 1000, t: 1000}
    ];
  processData(test, 0);
  });
});
