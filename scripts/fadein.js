console.log("scripts");

$(document).ready(function() {
    
  $(window).scroll( function(){

    $('.fadein').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object/1.15 ){
            
            $(this).animate({'opacity':'1'},500);
                
        }
        
    }); 

    
  });
    
});

//$("label").click(function(){
  //setTimeout(function(){
    //var section_height = $(".project-expand").height();
    //console.log(section_height);
    //if(section_height > 200) {
      //$(".project-expand section").animate({'opacity':'1'}, 1000);
    //} else {
      //$(".project-expand section").animate({'opacity':'0'}, 1000);
    //}
  //}, 500);
//});

