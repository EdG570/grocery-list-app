

$(document).ready(function(){
    
  $('input[name="submit"]').click(function(){
       var itemAdded = $('input[name="add"]').val();
      
      $('.shopping-list').append('<li><input type="checkbox" class="myClass"/><div class="list-item"><p>' + itemAdded + '</p></div><button class="remove-btn">X</button></li>');

  });
  

});