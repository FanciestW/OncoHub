Meds = new Mongo.Collection("Meds");

Meds.attachSchema(new SimpleSchema({

	medName: {
		type: String,
		label: "Name of Medicine",
		optional: false,
		max: 250
	},

	medDose: {
		type: Number,
		label: "Medication dosage in mg",
		optional: false,
		min: 0
	}
}));