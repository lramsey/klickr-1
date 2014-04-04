$(function(){

  $('#mybutton').on('click', function (){
    console.log("hello mouse");

// 
    var mouse = d3.select(".container").append('svg');

    mouse.select('rect').data(5)
                .attr('width', 100)
                .attr('height', 100)
                .attr('x', 300)
                .attr('y', 300)
                .transition()
                .duration(1500)
                .attr('x', 500)
                .attr('y', 500);
          // .transition()
          // .duration(5000)
          // .attr("x", 400)
          // .attr("y", 200);

// using d3
    // $('.mouse').css('top', '400px');
    // $('.mouse').css('left', '300px');
    // $('.mouse').css('-webkit-transform', translateX(200px));
    // $('.mouse').css('-webkit-transform', translateY(50px));

// using html javascript
    // mouse = document.getElementsByClassName(".mouse");
    // mouse.style.top = "400px";
    // mouse.style.left = "200px";

  });

});
