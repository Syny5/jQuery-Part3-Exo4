$('#enlarge').on('click', function(){
$('#rectangle').css('height', '+=10px');
// if($('#rectangle').height().val() > 100{
//   $('#rectangle').css('height', '10px');
// }
});
$('#green').on('click', function(){
  $('#rectangle').css('background-color', 'green')
});
$('#backColor').on('click', function(){
  $('#rectangle').css('background-color', '')
});
$('#hide').on('click', function(){
  $('#rectangle').hide();
});
$('#show').on('click', function(){
  $('#rectangle').show();
});
