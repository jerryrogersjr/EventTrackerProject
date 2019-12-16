
export class Expense {
  id: number;
  expenseDate: Date;
  paidToName: string;
  expenseType: string;
  paymentType: string;
  workorderNumber: number;
  description: string;
  expenseTotal: number;
  createdAt: Date;
  updatedAt: Date;

  constructor( // Constructor needed if private for encapsulation.

    id?: number,
    expenseDate?: Date,
    paidToName?: string,
    expenseType?: string,
    paymentType?: string,
    workorderNumber?: number,
    description?: string,
    expenseTotal?: number,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    this.id = id;
    this.expenseDate = expenseDate;
    this.paidToName = paidToName;
    this.expenseType = expenseType;
    this.paymentType = paymentType;
    this.workorderNumber = workorderNumber;
    this.description = description;
    this.expenseTotal = expenseTotal;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
