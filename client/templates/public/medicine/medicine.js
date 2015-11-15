if(Meteor.isClient){
	Template.body.helper({
		meds: [
			{ text: "Med 1" },
			{ text: "Med 2" },
			{ text: "Med 3" },
			{ text: "Med 4" }
		]
	});
}