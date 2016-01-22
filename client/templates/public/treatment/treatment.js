if(Meteor.isClient){
	
	Template.treatment.helpers({
		treats: function(){
			return Treatments.find().fetch().reverse();
		}
	});

	Meteor.subscribe("Treatments");
}