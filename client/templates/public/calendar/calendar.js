if(Meteor.isClient){
	Template.calendar.helpers({
		options: function(){
			return {
				defaultView: 'month',
				dayClick: function(date, jsEvent, view){
						
				}
			};
		}
	});

	$("#weekView").click(function(){
		console.log("Tested");
		$("#myCalendar").fullCalendar('changeView', basicWeek);
	});
}