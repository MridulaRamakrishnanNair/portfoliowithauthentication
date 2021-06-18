//IIFE- IMMEDIATELY INVOKED FUNCTION EXPRESSION

"use strict";

(function () {
    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/contact';
        }       
      });
    }
   
    function Start(): void
    {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

})(); 