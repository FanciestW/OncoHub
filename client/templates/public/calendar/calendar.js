if(Meteor.isClient){

	Template.calendar.helpers({

	});

	Template.calendar.events({
		"click #weekView": function(event){
			$("#myCalendar").fullCalendar('changeView', 'agendaWeek');
		},

		"click #dayView": function(event){
			$("#myCalendar").fullCalendar('changeView', 'agendaDay');
		},

		"click #monthView": function(event){
			$("#myCalendar").fullCalendar('changeView', 'month');
		}
	});
		
}