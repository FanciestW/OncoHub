Chat = new Mongo.Collection("Chat");

Chat.attachSchema(new SimpleSchema({

	createdBy: {
		type: String,
		autoValue: function(){ return this.userId }
	},

	user: {
		type: String,
		autoValue: function(){ return this.user.emails[0].address }
	},

	msg: {
		type: String,
		label: "Chat",
		optional: false,
		max: 500
	}
	
}));