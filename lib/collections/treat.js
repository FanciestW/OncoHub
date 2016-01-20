Treatments = new Mongo.Collection("treatments");

Treatments.attachSchema(new SimpleSchema({

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