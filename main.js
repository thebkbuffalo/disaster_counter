var clock;
var time;
$(document).ready(function(){

  function save() {
    localStorage.setItem('time', clock.timer.count);
    console.log(localStorage.getItem('time'));

  }

  clock = new FlipClock($('.your-clock'), localStorage.getItem('time'), {

  });
  clock.timer.count = localStorage.getItem('time');


  setInterval(save, 2000);


  $('.reset').on('click', function(){
    clock.setTime(0);
    clock.timer.count = 0;
    console.log(clock.timer.count);
  });
});
