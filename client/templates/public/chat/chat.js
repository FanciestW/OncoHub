if(Meteor.isClient){

	Template.chat.helpers({
		msg: function(){
			return Chat.find();
		}
	});	

	Meteor.subscribe("Chat");
}