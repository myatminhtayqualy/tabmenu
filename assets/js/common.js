



$(function () {
  

  $('.tablink').on('click', function (e) {
    
    e.preventDefault();

    
    $('.tabchild').removeClass('show');

    
    var target = $(this).data('target');

   
    $(target).addClass('show');

   
    $('.tablink').removeClass('active');
    $(this).addClass('active');
  });
});
