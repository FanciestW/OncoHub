if(Meteor.isClient){

	Template.medicine.helpers({
		meds: function(){
			return Meds.find().fetch().reverse();
		}
	});

	Template.medicine.events({
		"submit": function(event){
			console.log("Hello");
			event.preventDefault();
			var text = event.target.medName.value;

			Meds.insert({
				text: text
			});

			event.target.text.value = "";
		}
	});
}