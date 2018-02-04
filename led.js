$(function(){
  $('#led').on('click', function(){
    alert("aa");
  })
})

$(function(){
  $('#test').on('click', function() {
    console.log("aa");
    alert("ああ");
  });
});



$(function(){
  $('#nasubi').on({
    'mouseenter': function() {
      $(this).css('color','red');
    },
    'mouseleave': function() {
      $(this).css('color','lightblue');
    }
  });
});

