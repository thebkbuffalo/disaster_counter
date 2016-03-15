$(document).ready(function(){

  var clock = new FlipClock($('.your-clock'), {
  });


  // have this save the current time to localStorage somehow, and than make the clock start from that point everytime its initialized...this should work, also add a reset button
  $('.save').on('click', function(){
    console.log(clock.timer.count);
    localStorage.setItem('time', clock.time.count);
  });
  // console.log(clock.timer.count);
});
