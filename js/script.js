$(document).ready(function() {
	//draggable
	$( ".draggable_1" ).draggable();
	// droppable
	$( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "#drop_p" )
            .html( "Dropped!" );
      }
    });

	//resizable
	$("#resizable").resizable();
	// selectable
	$("#selectable").selectable( function() {
		$("li").addClass("me");
	});
	// shortable
	$("#sortable").sortable();
	// accordion exm 1
	$("#accordion1").accordion();
	// accordion exm 2
	$("#accordion2").accordion({
		collapsible: "true",
		heightStyle: "content",
		icons: {
			"header": "ui-icon-plus",
			"activeHeader": "ui-icon-minus"
		}
	});
	// accordion sortable exm 3
	$("#accordion3").accordion({
		collapsible: "true",
		header: ">div>.accordion_title"
	})
	.sortable({
		axis: "y",
		handle: ".accordion_title",
		stop: function(event, ui){
			ui.item.children(".accordion_title").triggerHandler("focusout");
			$(this).accordion("refresh");
		}
	});
	// datepicker
	$( "#datepicker1" ).datepicker({
		dateFormat: "yy-mm-dd"
	});
	let dateFormat = "d MM, y",
	from = $( "#from_date" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		dateFormat: dateFormat,
	}) .on( "change", function() {
		to.datepicker( "option", "minDate", getDate( this ) );
	}),
	to = $( "#to_date" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		dateFormat: dateFormat,
	}) .on( "change", function() {
		from.datepicker( "option", "maxDate", getDate( this ) );
	});
 
    function getDate( element ) {
      let date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
    // datepicker exm 3
    $("#datepicker3").datepicker({
    	altField: "#alternative",
    	altFormat: "DD, d MM, y"
    })
    // datepicker exm 4
    $("#datepicker4").datepicker({
    	showOn: "button",
    	buttonImage: "images/calendar.gif",
    	buttonImageOnly: true,
    	buttonText: "Select date"
    })

})