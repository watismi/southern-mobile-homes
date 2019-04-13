

$('.range__title').click(function() {
	$(this).siblings().find("input[type=checkbox]").trigger('click');
});



$( "#bedroom-range, #bathroom-range, #square-feet-range")
.on( "slidestart", function( event, ui ) { 
  $("body").css('cursor', 'grabbing');
  $(".ui-widget.ui-widget-content").css('cursor', 'grabbing');
} );
$( "#bedroom-range, #bathroom-range, #square-feet-range" )
.on( "slidestop", function( event, ui ) { 
  $("body").css('cursor', 'auto');
  $(".ui-widget.ui-widget-content").css('cursor', 'pointer');
} );



//OC DDEFAULTS
var oc=$('.owl-carousel');var ocOptions=oc.data('carousel-options');var ocdefaults={items:3,rewind:true,mouseDrag:true,touchDrag:true,pullDrag:true,freeDrag:false,nav:false,dots:false,autoplay:false,autoplayHoverPause:true,navContainer:false}; 
//----OC DEFAULTS END-------

//-------FILTER HOMES FUNCTION---------
function filterhomes(){var owl=$('.owl-carousel');var hidden=$('#hiddenHomes');var bedroomDisabled=$("#bedroom-range").slider("option","disabled");var bedroomNumber= +($(this).find('.bedroomsmarker').text());var bedroomNumberFilter=$("#bedroom-range").slider("option","value");var bathroomDisabled=$("#bathroom-range").slider("option","disabled");var bathroomNumber= +($(this).find('.bathroomsmarker').text());var bathroomNumberFilter=$("#bathroom-range").slider("option","value");var squareFeetDisabled=$("#square-feet-range").slider("option","disabled");var squareFeet= +($(this).find('.squarefeetmarker').text());var squareFeetFilterMin=$("#square-feet-range").slider("values",0);var squareFeetFilterMax=$("#square-feet-range").slider("values",1);if((bedroomNumber==bedroomNumberFilter||bedroomDisabled)&&(bathroomNumber==bathroomNumberFilter||bathroomDisabled)&&(squareFeet>=squareFeetFilterMin||squareFeetDisabled)&&((squareFeet<=squareFeetFilterMax)||(squareFeet>=2000&&squareFeetFilterMax==2000)||(squareFeetDisabled))){$(this).appendTo(owl)}else{$(this).appendTo(hidden)}}
//END OF FILTER HOMES FUNCTION

//Slider Change Function
function sliderChange(){var owl=$('.owl-carousel');var owlItems=owl.find('.homes__col-item');var noHouse=$('.houses-no-filter');var nav=$('.houses__nav-wrapper');if(owl.is(':empty')){nav.fadeOut(200,function(){noHouse.fadeIn(200)})}else{owl.owlCarousel($.extend(ocdefaults,ocOptions));noHouse.fadeOut(200,function(){$(owl).fadeTo(200,1);if(owlItems.length>3){nav.fadeIn(200)}else{nav.fadeOut(200)}})}}
//Slider Change Function End

// FILTER DEFAULTS BEGIN--------------------------------------------	
  $( "#bedroom-range" ).slider({
  max: 5,
  min: 1,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value);
  },
  create: function(event, ui) {
            var v=$(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
  } 
});

// ARROWS FUNCTIONALITY
$("#bedrooms-next").click(function(){var e=$("#bedroom-range").slider("option","max"),o=$("#bedroom-range").slider("option","value")+1;o<=e&&($("#bedroom-range").slider("value",o),$("#bedroom-range").find(".ui-slider-handle").text(o))}),$("#bedrooms-prev").click(function(){var e=$("#bedroom-range").slider("option","min"),o=$("#bedroom-range").slider("option","value")-1;e<=o&&($("#bedroom-range").slider("value",o),$("#bedroom-range").find(".ui-slider-handle").text(o))});
//ARROWS FUNCTIONALITY END


  $( "#bathroom-range" ).slider({
  max: 5,
  min: 1,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value);
  },
  create: function(event, ui) {
            var v=$(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
  } 
});

// ARROWS FUNCTIONALITY
$("#bathrooms-next").click(function(){var maxValue=$("#bathroom-range").slider("option","max");var value=$("#bathroom-range").slider("option","value");var nextValue=value+1;if(nextValue<=maxValue){$("#bathroom-range").slider("value",nextValue);$("#bathroom-range").find('.ui-slider-handle').text(nextValue)}});$("#bathrooms-prev").click(function(){var minValue=$("#bathroom-range").slider("option","min");var value=$("#bathroom-range").slider("option","value");var prevValue=value-1;if(prevValue>=minValue){$("#bathroom-range").slider("value",prevValue);$("#bathroom-range").find('.ui-slider-handle').text(prevValue)}});
//ARROWS FUNCTIONALITY END
  $( "#square-feet-range" ).slider({
  range: true,
  values: [ 700, 2000 ],
  step: 25,
  min: 700,
  max: 2000,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  					var maxValue = ui.values[1];
            
            $(this).find('.ui-slider-handle').first().text(ui.values[0]);
            
            if (maxValue >= 2000) {
            $(this).find('.ui-slider-handle').last().text(">" + maxValue);
            }
            else {
            $(this).find('.ui-slider-handle').last().text(maxValue);
            }
    },
  create: function(event, ui) {
            var v1 =$(this).slider('values', 0);
            var v2 =$(this).slider('values', 1);
            $(this).find('.ui-slider-handle').first().text(v1);
            
            if (v2 >= 2000) {
            $(this).find('.ui-slider-handle').last().text(">" + v2);
            }
            else {
            $(this).find('.ui-slider-handle').last().text(v2);
            }          
  }
});

$( "#price-range" ).slider({
  range: true,
  values: [ 1000, 50000 ],
  step: 500,
  min: 1000,
  max: 50000,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  					var maxValue = ui.values[1];
            
            $(this).find('.ui-slider-handle').first().text(ui.values[0]);
            
            if (maxValue >= 50000) {
            $(this).find('.ui-slider-handle').last().text(">" + maxValue);
            }
            else {
            $(this).find('.ui-slider-handle').last().text(maxValue);
            }
    },
  create: function(event, ui) {
            var v1 =$(this).slider('values', 0);
            var v2 =$(this).slider('values', 1);
            $(this).find('.ui-slider-handle').first().text(v1);
            
            if (v2 >= 50000) {
            $(this).find('.ui-slider-handle').last().text(">" + v2);
            }
            else {
            $(this).find('.ui-slider-handle').last().text(v2);
            }          
  }
});



var owl = $('.owl-carousel');
$(owl).show();
$(".homes__col-item").each(filterhomes);
$(sliderChange());

// FILTER DEFAULTS END--------------------------------------------


$( "#bedroom-range" ).on( "slidechange", function( event, ui ) {

	var owl = $('.owl-carousel');
  owl.fadeTo(200,0);
	setTimeout(function() {
    $(owl).trigger('destroy.owl.carousel');
    $(".homes__col-item").each(filterhomes);
  	sliderChange();
},200);
  
} );

$( "#bathroom-range" ).on( "slidechange", function( event, ui ) {
	var owl = $('.owl-carousel');
  owl.fadeTo(300,0);
	setTimeout(function() {
    $(owl).trigger('destroy.owl.carousel');
    $(".homes__col-item").each(filterhomes);
  	sliderChange();
}, 200);
} );


$( "#square-feet-range" ).on( "slidechange", function( event, ui ) {
	var owl = $('.owl-carousel');
  owl.fadeTo(200,0);
	setTimeout(function() {
    $(owl).trigger('destroy.owl.carousel');
    $(".homes__col-item").each(filterhomes);
  	sliderChange();
}, 200);
} );

//CHECKBOXES FUNCTIONALITY

$("#bedroom-checkbox").change(function() {
  
  if(!$("#bedroom-checkbox").is(":checked"))
  {
  $( "#bedroom-range" ).slider( "disable" );
  }
	else {
  
  $( "#bedroom-range" ).slider( "enable" );
  
  }
  
  var owl = $('.owl-carousel');
  owl.fadeTo(200,0);
	setTimeout(function() {
    $(owl).trigger('destroy.owl.carousel');
    $(".homes__col-item").each(filterhomes);
  	sliderChange();
}, 200);
});


$("#bathroom-checkbox").change(function() {
  
  if(!$("#bathroom-checkbox").is(":checked"))
  {
  $( "#bathroom-range" ).slider( "disable" );
  }
	else {
  
  $( "#bathroom-range" ).slider( "enable" );
  
  }
  
	var owl = $('.owl-carousel');
  owl.fadeTo(200,0);
	setTimeout(function() {
    $(owl).trigger('destroy.owl.carousel');
    $(".homes__col-item").each(filterhomes);
  	sliderChange();
}, 200);
  
});

$("#square-feet-checkbox").change(function() {
  
  if(!$("#square-feet-checkbox").is(":checked"))
  {
  $( "#square-feet-range" ).slider( "disable" );
  }
	else { 
  $( "#square-feet-range" ).slider( "enable" );
  }
	var owl = $('.owl-carousel');
  owl.fadeTo(200,0);
	setTimeout(function() {
    $(owl).trigger('destroy.owl.carousel');
    $(".homes__col-item").each(filterhomes);
  	sliderChange();
}, 200);
});

$("#price-checkbox").change(function() {
  
  if(!$("#price-checkbox").is(":checked"))
  {
  $( "#price-range" ).slider( "disable" );
  }
	else { 
  $( "#price-range" ).slider( "enable" );
  }
	var owl = $('.owl-carousel');
  owl.fadeTo(200,0);
	setTimeout(function() {
    $(owl).trigger('destroy.owl.carousel');
    $(".homes__col-item").each(filterhomes);
  	sliderChange();
}, 200);
});


$("#prev-house").click(function(){
	var owl = $('.owl-carousel');
  owl.trigger('prev.owl.carousel');
})

$("#next-house").click(function(){
	var owl = $('.owl-carousel');
  owl.trigger("next.owl.carousel");
})
