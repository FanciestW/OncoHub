if(Meteor.isClient){

	Template.medicine.helpers({
		meds: function(){
			return Meds.find().fetch().reverse();
		}
	});

	Template.medicine.helpers("formatDate", function(medDate){
		return new Date(medDate).toString('yyyy-MM-dd');
	});

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
}