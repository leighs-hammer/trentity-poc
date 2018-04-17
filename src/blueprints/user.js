const mockUser = {
	uid: "1234",
	firstName: "Joe",
	lastName: "Soap",
	middleNames: "I dont exist",
	identity: {
		localIdentityNumber: {
			value: "4321",
			trustAuthorities: [
				"123", "4321"
			],
			lastValidated: "UTC Timestamp"
		},
		passportNumber: {
			value: "1234567890",
			trustAuthorities: [
				"123", "4321"
			],
			lastValidated: "UTC Timestamp"
		},
		taxNumber: {
			value: "xxx",
			trustAuthorities: [
				"123", "4321"
			],
			lastValidated: "UTC Timestamp"
		},
		resedentialAddress: {
			value: {
				street: "1 something road",
				city: "nowhere",
				postalCode: "1234567",
				state: "somewhere",
				country: "outthere",
			},
			trustAuthorities: [
				"123", "4321"
			],
			lastValidated: "UTC Timestamp"
		},
		business: {
			
		}
	},

}