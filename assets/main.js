$('.accordion .content').eq(0).addClass('open');

$('.accordion h2').on('click', function (event) {
	var header = $(event.target);
  var panel = header.next();
  
  $('.accordion .content').removeClass('open');
  
  panel.addClass('open');
});


$('.accordion2 .content2').eq(0).addClass('open');

$('.accordion2 h4').on('click', function (event) {
	var header = $(event.target);
  var panel2 = header.next();
  
  $('.accordion2 .content2').removeClass('open');
  
  panel2.addClass('open');
});