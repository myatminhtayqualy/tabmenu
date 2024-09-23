// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});

const headers = document.querySelectorAll('.accordion-header');


headers.forEach(header => {
     header.addEventListener('click',function(){
        const content = this.nextElementSibling;
        const icon = header.querySelector('.headertext');

        icon.classList.toggle('newicon');
 
        content.classList.toggle('show');
      
       
     });  
});


// Your jQuery code goes here
$(function () {
  // Your code here
  $('.nav-link').on('click', function (e) {
    
    e.preventDefault();

    
    $('.textbox').removeClass('show');

    
    var target = $(this).data('target');

   
    $(target).addClass('show');

   
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});
