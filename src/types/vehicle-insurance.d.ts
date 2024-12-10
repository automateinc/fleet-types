export interface IVehicleInsurance {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	vehicleId: string;

	company: string;
	coverageType: string;
	policyNumber: string;
	amount: number;

	issueDate: string;
	expiryDate: string;

	active: boolean;
}
