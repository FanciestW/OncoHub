Treatments = new Mongo.Collection("Treatments");

Treatments.attachSchema(new SimpleSchema({

	createdBy: {
		type: String,
		autoValue: function(){ return this.userId }
	},

	treatmentName: {
		type: String,
		label: "Treatment Name",
		optional: false,
		max: 250
	},

	treatmentDate: {
		type: Date,
		label: "Date of Treament",
		optional: false,
	},

	treatmentDesc: {
		type: String,
		label: "Description of Treatment",
		optional: true,
		max: 3000
	}

}));