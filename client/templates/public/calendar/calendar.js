if(Meteor.isClient){
	
	Template.calendar.helpers({
		options: function(){
			return{
				header: {
					left: 'title',
					center : '',
					right: 'today, agendaDay, agendaWeek, month, prev, next'
				},

				dayClick: function(date, jsEvent, view){
					if(view.name != 'month')
						return;
					this.fullCalendar('changeView', 'agendaDay').fullCalendar('gotoDate', date);
				},

				events: function(){
					return Events.find({});
				}

			}
		}
	});

	Template.calendar.events({
		"submit .newEvent": function(event){
			event.preventDefault();

			var name = event.target.eventName.value;
			var startDate = event.target.startDate.value;
			var endDate = event.target.endDate.value;

			Events.insert({
				title: name,
				start: startDate,
				end: endDate
			})
		}
	});

}