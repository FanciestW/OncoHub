
if(Meteor.isClient){

	Template.medicine.helpers({
		meds: function(){
			return Meds.find({});
		}
	});

	Template.medicine.events({
		"submit .addMed": function(event){
			event.preventDefault();

			var text = event.target.text.value;

			Meds.insert({
				text: text,
				createdAt: new Date()
			});

			event.target.text.value="";
		}
	});
}