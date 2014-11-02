var obnoxise, rand;
$(document).ready(function (){
  $('.obnoxise').on('click', function (e) {
    e.preventDefault();
    $('#obnoxious').html(obnoxise($('#text').val()));
  });
});

rand = function () {
  return Math.random() * 100;
};

// STRING src
obnoxise = function (src) {
  var arr;
  arr = src.split('');
  for(var i = 0; i < src.length; i++){
    if(arr[i]===' '){
      if(rand()<50){
        arr[i] = '.';
      }
      continue;
    }
    if(rand()<50){
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join('') + '!!';
};