

$('.filter__title').click(function() {
	$(this).siblings().find("input[type=checkbox], input[type=radio]").trigger('click');
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
  max: 4,
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

$( "#price-range" ).slider({
  range: true,
  values: [ 0, 150000 ],
  step: 100,
  min: 0,
  max: 150000,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  					var maxValue = ui.values[1];
            
            $(this).find('.ui-slider-handle').first().text(ui.values[0]);
            
            if (maxValue >= 150000) {
            $(this).find('.ui-slider-handle').last().text("$" + maxValue + "+");
            }
            else {
            $(this).find('.ui-slider-handle').last().text("$" + maxValue);
            }
    },
  create: function(event, ui) {
            var v1 =$(this).slider('values', 0);
            var v2 =$(this).slider('values', 1);
            $(this).find('.ui-slider-handle').first().text(v1);
            
            if (v2 >= 150000) {
            $(this).find('.ui-slider-handle').last().text("$" + v2 + "+");
            }
            else {
            $(this).find('.ui-slider-handle').last().text("$" + v2);
            }          
  }
});

$( "#width-range" ).slider({
  range: true,
  values: [ 1000, 8000 ],
  step: 25,
  min: 1000,
  max: 8000,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  					var maxValue = ui.values[1];
            
            $(this).find('.ui-slider-handle').first().text(ui.values[0]);
            
            if (maxValue >= 8000) {
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
            
            if (v2 >= 8000) {
            $(this).find('.ui-slider-handle').last().text(">" + v2);
            }
            else {
            $(this).find('.ui-slider-handle').last().text(v2);
            }          
  }
});

$( "#year-range" ).slider({
  range: true,
  values: [ 1970, 2019 ],
  step: 1,
  min: 1980,
  max: 2019,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  					var maxValue = ui.values[1];
            
            $(this).find('.ui-slider-handle').first().text(ui.values[0]);
            $(this).find('.ui-slider-handle').last().text(maxValue);
    },
  create: function(event, ui) {
            var v1 =$(this).slider('values', 0);
            var v2 =$(this).slider('values', 1);
            $(this).find('.ui-slider-handle').first().text(v1);
            $(this).find('.ui-slider-handle').last().text(v2);       
  }
});
// FILTER DEFAULTS END--------------------------------------------

//CHECKBOXES FUNCTIONALITY

$("#bedroom-checkbox").change(function() {
  
  if(!$("#bedroom-checkbox").is(":checked"))
  {
  $( "#bedroom-range" ).slider( "disable" );
  }
  else {
  
  $( "#bedroom-range" ).slider( "enable" );
  
  }
  
});


$("#bathroom-checkbox").change(function() {
  
  if(!$("#bathroom-checkbox").is(":checked"))
  {
  $( "#bathroom-range" ).slider( "disable" );
  }
  else {
  $( "#bathroom-range" ).slider( "enable" );
  }
  
});

$("#price-checkbox").change(function() {
  
  if(!$("#price-checkbox").is(":checked"))
  {
  $( "#price-range" ).slider( "disable" );
  }
	else { 
  $( "#price-range" ).slider( "enable" );
  }

});


$("#sections-checkbox").change(function() {
  
  if(!$("#sections-checkbox").is(":checked"))
  {
  $('input[type="radio"][name="sections"]').prop('disabled', true);
  }
  else { 
  $('input[type="radio"][name="sections"]').prop('disabled', false);
  }

});

$("#state-checkbox").change(function() {
  
  if(!$("#state-checkbox").is(":checked"))
  {
  $('input[type="radio"][name="state"]').prop('disabled', true);
  }
	else { 
  $('input[type="radio"][name="state"]').prop('disabled', false);
  }

});





$("#width-checkbox").change(function() {
  
  if(!$("#width-checkbox").is(":checked"))
  {
  $( "#width-range" ).slider( "disable" );
  }
	else { 
  $( "#width-range" ).slider( "enable" );
  }

});


$("#deal-checkbox").change(function() {
  
  if(!$("#deal-checkbox").is(":checked"))
  {
  $('input[type="radio"][name="rent-sale"]').prop('disabled', true);
  }
	else { 
  $('input[type="radio"][name="rent-sale"]').prop('disabled', false);
  }

});



$("#year-checkbox").change(function() {
  
  if(!$("#year-checkbox").is(":checked"))
  {
  $( "#year-range" ).slider( "disable" );
  }
	else { 
  $( "#year-range" ).slider( "enable" );
  }

});



