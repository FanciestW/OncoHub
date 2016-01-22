if(Meteor.isClient){

	Template.chat.helpers({
		msg: function(){
			return Chat.find();
		}
	});	

	Meteor.subscribe("Chat");
	
	$("#div1").animate({ scrollTop: $('#div1').prop("scrollHeight")}, 1000);
}