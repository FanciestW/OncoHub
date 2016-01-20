if(Meteor.isClient){

	Template.medicine.helpers({
		meds: function(){
			return Meds.find({}).fetch().reverse();
		}
	});

	Meteor.subscribe('meds');

	//Does not prettify date
	Template.registerHelper("prettifyDate", function(medDate){
		return new Date(medDate).toString('yyyy-MM-dd')
	});

	//this event listener does not do anything any more after switching to simple schema and autoform
	Template.medicine.events({
		"submit": function(event){
			event.preventDefault();
			var text = event.target.medName.value;

			Meds.insert({
				text: text
			});

			event.target.text.value = "";
		}
	});
	
	Meteor.subscribe("Meds");
}