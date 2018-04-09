function initMap() {
        var uluru = {lat: 49.98146 , lng: 6.4390300000000025 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
	  
	  
function myFunction1() {
    var x = document.getElementById("myDIV");
	var y = document.getElementById("myDIV2");
	var z = document.getElementById("myDIV3");
   
        x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
 
}

function myFunction2() {
    var x = document.getElementById("myDIV");
	var y = document.getElementById("myDIV2");
	var z = document.getElementById("myDIV3");

        y.style.display = "block";
		x.style.display = "none";
		z.style.display = "none";

}

function myFunction3() {
    var x = document.getElementById("myDIV");
	var y = document.getElementById("myDIV2");
	var z = document.getElementById("myDIV3");

        z.style.display = "block";
		x.style.display = "none";
		y.style.display = "none";
} 
	  
	  
	    $(function(){
    $('.navbar').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.navbar').data('size') == 'big')
        {
            $('.navbar').data('size','small');
            $('.navbar').stop().animate({
                height:'50px'
            },600);
        }
    }
    else
    {
        if($('.navbar').data('size') == 'small')
        {
            $('.navbar').data('size','big');
            $('.navbar').stop().animate({
                height:'100px'
            },600);
        }  
    }
});


  
	    $(function(){
    $('.navbar-brand').data('size','big');
});
$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.navbar-brand').data('size') == 'big')
        {
            $('.navbar-brand').data('size','small');
            $('.navbar-brand').stop().animate({
                width:'70px'
            },600);
        }
    }
    else
    {
        if($('.navbar-brand').data('size') == 'small')
        {
            $('.navbar-brand').data('size','big');
            $('.navbar-brand').stop().animate({
                width:'200px'
            },600);
        }  
    }
});
	  
	  
	  	  $(function(){
    $('.nav').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.nav').data('size') == 'big')
        {
            $('.nav').data('size','small');
            $('.nav').stop().animate({
                height:'50px'
            },600);
        }
    }
    else
    {
        if($('.nav').data('size') == 'small')
        {
            $('.nav').data('size','big');
            $('.nav').stop().animate({
                height:'100px'
            },600);
        }  
    }
});
	  
	  	  
	  	  $(function(){
    $('.navbar-sites').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.navbar-sites').data('size') == 'big')
        {
            $('.navbar-sites').data('size','small');
            $('.navbar-sites').stop().animate({
                height:'50px'
            },600);
        }
    }
    else
    {
        if($('.navbar-sites').data('size') == 'small')
        {
            $('.navbar-sites').data('size','big');
            $('.navbar-sites').stop().animate({
                height:'100px'
            },600);
        }  
    }
});
	  
	 
	  
	  
	  
	  
	  $ (document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#Startseite']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });  
  
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})