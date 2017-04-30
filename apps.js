$(document).ready(function() {

var turn = 1;


$('td').on('click', function() {
  if ($(this).hasClass('o') || $(this).hasClass('x')) {
    console.log('illegal click')
  } else {
  if (turn % 2 === 0) {
     $(this).addClass('x');
   } else {
     $(this).addClass('o');
   }
  //  $(this).off('click');
   turn++;
   determineWinnerX();
   determineWinnerO();
 }
});



function determineWinnerX() {
  if (($('#one').hasClass('x') && $('#two').hasClass('x') && $('#three').hasClass('x'))
  ||
  ($('#four').hasClass('x') && $('#five').hasClass('x') && $('#six').hasClass('x'))
  ||
  ($('#seven').hasClass('x') && $('#eight').hasClass('x') && $('#nine').hasClass('x'))
  ||
  ($('#one').hasClass('x') && $('#four').hasClass('x') && $('#seven').hasClass('x'))
  ||
  ($('#two').hasClass('x') && $('#five').hasClass('x') && $('#eight').hasClass('x'))
  ||
  ($('#three').hasClass('x') && $('#six').hasClass('x') && $('#nine').hasClass('x'))
  ||
  ($('#one').hasClass('x') && $('#five').hasClass('x') && $('#nine').hasClass('x'))
  ||
  ($('#three').hasClass('x') && $('#five').hasClass('x') && $('#seven').hasClass('x')))
  {
    alert('MEOW! Cats are the winner!');
  }
}

function determineWinnerO() {
  if (($('#one').hasClass('o') && $('#two').hasClass('o') && $('#three').hasClass('o'))
  ||
  ($('#four').hasClass('o') && $('#five').hasClass('o') && $('#six').hasClass('o'))
  ||
  ($('#seven').hasClass('o') && $('#eight').hasClass('o') && $('#nine').hasClass('o'))
  ||
  ($('#one').hasClass('o') && $('#four').hasClass('o') && $('#seven').hasClass('o'))
  ||
  ($('#two').hasClass('o') && $('#five').hasClass('o') && $('#eight').hasClass('o'))
  ||
  ($('#three').hasClass('o') && $('#sio').hasClass('o') && $('#nine').hasClass('o'))
  ||
  ($('#one').hasClass('o') && $('#five').hasClass('o') && $('#nine').hasClass('o'))
  ||
  ($('#three').hasClass('o') && $('#five').hasClass('o') && $('#seven').hasClass('o')))
  {
    alert('WOOF! Dogs are the winner!');
  }
}

$('.restart').on('click', function(){
  $('.square').removeClass('x').removeClass('o');
  $('.square').text("");
  turn = 1;
})


});
