$(document).ready(function(){

//User enters and submits an item which adds an li element to their list */
  
  $('form').submit(function(event){
    event.preventDefault();
       var itemAdded = $('input[name="add"]').val();
      $('.shopping-list').append('<li><button class="complete-btn"><img class="check-mark" src="images/check.svg"/></button><div class="list-item"><p>' + itemAdded + '</p></div><button class="remove-btn">X</button></li>');
  });

//Allows users to check and uncheck complete button in their list

  $('.complete-btn').on('click', function(){
    if($('.check-mark').css('display', 'none')){
      $('.check-mark').show();
      $('p').css('text-decoration', 'line-through');
    }  
   });

  $('.complete-btn').on('click', function(){
    if(('.check-mark').show()){
      $('.check-mark').css('display', 'none');
      $('p').css('text-decoration', 'none');
    }
  });
 

//Removes list items when clicked

  $('.remove-btn').on('click', function(){
      $('li').remove();

  });


});

