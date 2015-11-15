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


}