$(document).ready(function() {

var turn = 1;
var xWin = 0;
var oWin = 0;
var winner = '';

$('td').on('click', function() {
  if ($(this).hasClass('o') || $(this).hasClass('x')) {
    console.log('illegal click')
  } else if (winner === 'dog' || winner === 'cat'){
    console.log('already a winner');
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
    xWin += 1;
    winner = 'cat';
    $('.cat-score').text('Cats:  ' + xWin);
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
    oWin += 1;
    winner = 'dog';
    $('.dog-score').text('Dogs:  ' + oWin);
  }
}

$('.restart').on('click', function(){
  $('.square').removeClass('x').removeClass('o');
  $('.square').text("");
  turn = 1;
  winner ='';
})


});
