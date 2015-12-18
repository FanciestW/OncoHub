
if(Meteor.isClient){

	Template.medicine.helpers({
		meds: function(){
			return Meds.find({}, {sort: {createdAt: -1}});
		}
	});

	Template.medicine.events({
		"submit .addMed": function(event){
			event.preventDefault();
			if($("#medName") != ""){
				var text = event.target.text.value;

				Meds.insert({
					text: text
				});

				event.target.text.value = "";
			}
		}
	});
}